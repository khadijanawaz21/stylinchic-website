import sharp from "sharp";
import { readdir, mkdir, stat, copyFile } from "fs/promises";
import { join, basename } from "path";

const IMAGE_DIR = "public/images";
const PREVIEW_DIR = "public/images/grade-preview";

// Files to skip — already look cinematic or are non-photo assets
const SKIP_FILES = new Set([
  "hero-collage.webp",
  "shabana.webp",
  "manifest.json",
  "expert-shabana.webp",
]);

// 3 images to generate before/after previews for
const PREVIEW_FILES = new Set([
  "service-color.webp",
  "gallery-1.webp",
  "ba2-after.webp",
]);

/**
 * Generate a radial vignette overlay as a raw RGBA buffer.
 * Transparent center fading to rgba(0,0,0,0.25) at edges.
 */
async function createVignette(width, height) {
  const channels = 4;
  const data = Buffer.alloc(width * height * channels);

  const cx = width / 2;
  const cy = height / 2;
  // Normalize so corners = 1.0
  const maxDist = Math.sqrt(cx * cx + cy * cy);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const dx = (x - cx) / cx;
      const dy = (y - cy) / cy;
      // Elliptical distance, stretched slightly wider than tall
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Smooth falloff: no darkening in center 40%, full at edges
      const t = Math.max(0, Math.min(1, (dist - 0.4) / 0.6));
      // Ease-in curve for natural falloff
      const alpha = Math.round(t * t * 64); // max alpha ~64 = 25%

      const idx = (y * width + x) * channels;
      data[idx] = 0;       // R
      data[idx + 1] = 0;   // G
      data[idx + 2] = 0;   // B
      data[idx + 3] = alpha; // A
    }
  }

  return sharp(data, { raw: { width, height, channels } })
    .png()
    .toBuffer();
}

// Cache vignettes by dimension key
const vignetteCache = new Map();

async function getVignette(width, height) {
  const key = `${width}x${height}`;
  if (vignetteCache.has(key)) return vignetteCache.get(key);
  console.log(`  Generating vignette ${key}...`);
  const buf = await createVignette(width, height);
  vignetteCache.set(key, buf);
  return buf;
}

async function gradeImage(inputPath, outputPath) {
  // Read original to get dimensions for vignette
  const metadata = await sharp(inputPath).metadata();

  // Resize first to get consistent dimensions
  const resized = await sharp(inputPath)
    .rotate() // auto-orient from EXIF
    .resize({ width: 1200, withoutEnlargement: true })
    .toBuffer();

  const resizedMeta = await sharp(resized).metadata();
  const vignette = await getVignette(resizedMeta.width, resizedMeta.height);

  const result = await sharp(resized)
    // Color grading: warmth, saturation, slight hue shift
    .modulate({
      brightness: 1.02,
      saturation: 1.18,
      hue: 4,
    })
    // Gentle contrast boost — lift shadows, tame highlights
    .linear(1.08, -8)
    // Open up midtones slightly
    .gamma(1.05)
    // Crisp hair strand detail
    .sharpen({ sigma: 1.2 })
    // Vignette overlay — draw focus to center
    .composite([
      {
        input: vignette,
        blend: "multiply",
      },
    ])
    .webp({ quality: 85 })
    .toBuffer();

  return result;
}

async function main() {
  await mkdir(PREVIEW_DIR, { recursive: true });

  const files = (await readdir(IMAGE_DIR)).filter(
    (f) => f.endsWith(".webp") && !SKIP_FILES.has(f)
  );

  console.log(`\nCinematic Color Grade — Processing ${files.length} images\n`);

  let totalOriginal = 0;
  let totalOutput = 0;

  for (const file of files) {
    const inputPath = join(IMAGE_DIR, file);
    const originalStats = await stat(inputPath);
    const originalKB = (originalStats.size / 1024).toFixed(0);

    try {
      // Save before preview if this is a preview file
      if (PREVIEW_FILES.has(file)) {
        await copyFile(inputPath, join(PREVIEW_DIR, `before-${file}`));
      }

      const graded = await gradeImage(inputPath, inputPath);

      // Save after preview
      if (PREVIEW_FILES.has(file)) {
        const { writeFile } = await import("fs/promises");
        await writeFile(join(PREVIEW_DIR, `after-${file}`), graded);
      }

      // Overwrite original
      const { writeFile } = await import("fs/promises");
      await writeFile(inputPath, graded);

      const outputKB = (graded.length / 1024).toFixed(0);
      totalOriginal += originalStats.size;
      totalOutput += graded.length;

      console.log(`  ✓ ${file.padEnd(30)} ${originalKB}KB → ${outputKB}KB`);
    } catch (err) {
      console.error(`  ✗ ${file}: ${err.message}`);
    }
  }

  console.log(`\n  Total: ${(totalOriginal / 1024 / 1024).toFixed(2)}MB → ${(totalOutput / 1024 / 1024).toFixed(2)}MB`);
  console.log(`  Previews saved to ${PREVIEW_DIR}/`);
  console.log(`  Done.\n`);
}

main().catch(console.error);
