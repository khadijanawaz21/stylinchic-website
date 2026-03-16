import sharp from "sharp";
import { readdir, writeFile, mkdir } from "fs/promises";
import { join, resolve } from "path";

const INPUT_DIR = resolve("images-raw");
const OUTPUT_DIR = resolve("public/images");
const MAX_WIDTH = 1200;
const WEBP_QUALITY = 82;
const BLUR_WIDTH = 20;

// Mapping: source filename → output name + processing instructions
const IMAGE_MAP = [
  // HERO
  {
    src: "Your Keratin Hair Appointment is Calling 📞🤙! Call or text this number to book your appointment (1).jpg",
    out: "hero",
    alt: "Silky smooth keratin-treated hair at Stylin'Chic salon in Pickering",
  },

  // BEFORE/AFTER — need left/right crop
  {
    src: "Your Keratin Hair Appointment is Calling 📞🤙! Call or text this number to book your appointment (4).jpg",
    out: "ba1",
    splitMode: "thirds", // left 1/3 = before, top-right 1/3 = after
    altBefore: "Frizzy damaged hair before keratin treatment",
    altAfter: "Silky straight hair after keratin treatment at Stylin'Chic",
  },
  {
    src: "649068799_18097130897297152_9001100891975467940_n.jpg",
    out: "ba2",
    splitMode: "halves",
    altBefore: "Frizzy unmanageable hair before smoothing treatment",
    altAfter: "Smooth sleek hair after Nanoplastia treatment at Stylin'Chic",
  },
  {
    src: "Transform Your Hair with Stunning Colours & Luxury TreatmentsFrom rich, vibrant shades to health.jpg",
    out: "ba3",
    splitMode: "halves",
    altBefore: "Hair before color transformation",
    altAfter: "Stunning pink and purple balayage color transformation",
  },

  // SERVICES
  {
    src: "Your Keratin Hair Appointment is Calling 📞🤙! Call or text this number to book your appointment.jpg",
    out: "service-smoothing",
    alt: "Glossy smooth hair after keratin smoothing treatment",
  },
  {
    src: "Beautiful cherry brown colour with keratin treatment 🌹🌹🌹🌹🌹.jpg",
    out: "service-color",
    alt: "Cherry brown hair color with keratin treatment",
  },
  {
    src: "Your Keratin Hair Appointment is Calling 📞🤙! Call or text this number to book your appointment (2).jpg",
    out: "service-repair",
    alt: "Restored healthy shiny hair after repair treatment",
  },
  {
    src: "Feel free to book an appointment for hair color and hair treatments keratin, Nanoplastia, botox  (1).jpg",
    out: "service-beauty",
    alt: "Beautifully styled bouncy curls at Stylin'Chic salon",
  },

  // WHY CHOOSE US
  {
    src: "Your Keratin Hair Appointment is Calling 📞🤙! Call or text this number to book your appointment (3).jpg",
    out: "why-choose",
    alt: "Precision highlights and straightening treatment showcasing Stylin'Chic expertise",
  },

  // MEET THE EXPERT
  {
    src: "Transform Your Hair with Stunning Colours & Luxury TreatmentsFrom rich, vibrant shades to health (3).jpg",
    out: "expert-shabana",
    alt: "Collection of hair transformations by Shabana, lead stylist at Stylin'Chic",
  },

  // GALLERY
  {
    src: "638867424_18095332457297152_8584175614724684148_n.jpg",
    out: "gallery-1",
    alt: "Caramel balayage highlights at Stylin'Chic Pickering",
  },
  {
    src: "Transform Your Hair with Stunning Colours & Luxury TreatmentsFrom rich, vibrant shades to health (1).jpg",
    out: "gallery-2",
    alt: "Honey balayage straightening treatment result",
  },
  {
    src: "Feel free to book an appointment for hair color and hair treatments keratin, Nanoplastia, botox .jpg",
    out: "gallery-3",
    alt: "Copper auburn hair color bob cut",
  },
  {
    src: "Transform Your Hair with Stunning Colours & Luxury TreatmentsFrom rich, vibrant shades to health (5).jpg",
    out: "gallery-4",
    alt: "Brown balayage with bouncy curls styling",
  },
  {
    src: "Transform Your Hair with Stunning Colours & Luxury TreatmentsFrom rich, vibrant shades to health (4).jpg",
    out: "gallery-5",
    alt: "Dramatic before and after keratin smoothing transformation",
  },
  {
    src: "Transform Your Hair with Stunning Colours & Luxury TreatmentsFrom rich, vibrant shades to health (2).jpg",
    out: "gallery-6",
    alt: "Rich cherry brown curls with warm highlights",
    cropBottom: 0.15, // Remove bottom 15% (Instagram UI overlay)
  },
  {
    src: "629540896_18095087570297152_431080492626990087_n.jpg",
    out: "gallery-7",
    alt: "Keratin treatment transformation from frizzy to silky smooth",
  },
  {
    src: "Feel free to book an appointment for hair color and hair treatments keratin, Nanoplastia, botox  (2).jpg",
    out: "gallery-8",
    alt: "Hair smoothing treatment before and after result",
  },
];

async function generateBlurDataURL(buffer) {
  const tiny = await sharp(buffer)
    .resize(BLUR_WIDTH)
    .webp({ quality: 20 })
    .toBuffer();
  return `data:image/webp;base64,${tiny.toString("base64")}`;
}

async function processStandard(inputPath, outputName, opts = {}) {
  let pipeline = sharp(inputPath);
  const metadata = await sharp(inputPath).metadata();

  // Optional bottom crop (for removing Instagram UI)
  if (opts.cropBottom) {
    const cropHeight = Math.round(metadata.height * (1 - opts.cropBottom));
    pipeline = pipeline.extract({
      left: 0,
      top: 0,
      width: metadata.width,
      height: cropHeight,
    });
  }

  pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });

  const buffer = await pipeline.webp({ quality: WEBP_QUALITY }).toBuffer();
  const info = await sharp(buffer).metadata();
  const outPath = join(OUTPUT_DIR, `${outputName}.webp`);
  await writeFile(outPath, buffer);

  const blurDataURL = await generateBlurDataURL(buffer);

  console.log(`  ✓ ${outputName}.webp (${info.width}x${info.height}, ${(buffer.length / 1024).toFixed(0)}KB)`);

  return {
    src: `/images/${outputName}.webp`,
    width: info.width,
    height: info.height,
    blurDataURL,
    alt: opts.alt || "",
  };
}

async function processSplit(inputPath, outputName, splitMode, alts) {
  const metadata = await sharp(inputPath).metadata();
  const results = {};

  if (splitMode === "halves") {
    // Left half = before
    const halfW = Math.round(metadata.width / 2);
    const beforeBuf = await sharp(inputPath)
      .extract({ left: 0, top: 0, width: halfW, height: metadata.height })
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: WEBP_QUALITY })
      .toBuffer();
    const beforeInfo = await sharp(beforeBuf).metadata();
    await writeFile(join(OUTPUT_DIR, `${outputName}-before.webp`), beforeBuf);
    results.before = {
      src: `/images/${outputName}-before.webp`,
      width: beforeInfo.width,
      height: beforeInfo.height,
      blurDataURL: await generateBlurDataURL(beforeBuf),
      alt: alts.before,
    };
    console.log(`  ✓ ${outputName}-before.webp (${beforeInfo.width}x${beforeInfo.height}, ${(beforeBuf.length / 1024).toFixed(0)}KB)`);

    // Right half = after
    const afterBuf = await sharp(inputPath)
      .extract({ left: halfW, top: 0, width: metadata.width - halfW, height: metadata.height })
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: WEBP_QUALITY })
      .toBuffer();
    const afterInfo = await sharp(afterBuf).metadata();
    await writeFile(join(OUTPUT_DIR, `${outputName}-after.webp`), afterBuf);
    results.after = {
      src: `/images/${outputName}-after.webp`,
      width: afterInfo.width,
      height: afterInfo.height,
      blurDataURL: await generateBlurDataURL(afterBuf),
      alt: alts.after,
    };
    console.log(`  ✓ ${outputName}-after.webp (${afterInfo.width}x${afterInfo.height}, ${(afterBuf.length / 1024).toFixed(0)}KB)`);
  } else if (splitMode === "thirds") {
    // Left 1/3 = before
    const thirdW = Math.round(metadata.width / 3);
    const beforeBuf = await sharp(inputPath)
      .extract({ left: 0, top: 0, width: thirdW, height: metadata.height })
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: WEBP_QUALITY })
      .toBuffer();
    const beforeInfo = await sharp(beforeBuf).metadata();
    await writeFile(join(OUTPUT_DIR, `${outputName}-before.webp`), beforeBuf);
    results.before = {
      src: `/images/${outputName}-before.webp`,
      width: beforeInfo.width,
      height: beforeInfo.height,
      blurDataURL: await generateBlurDataURL(beforeBuf),
      alt: alts.before,
    };
    console.log(`  ✓ ${outputName}-before.webp (${beforeInfo.width}x${beforeInfo.height}, ${(beforeBuf.length / 1024).toFixed(0)}KB)`);

    // Top-right 1/3 = after (right 1/3, top half)
    const afterW = metadata.width - 2 * thirdW;
    const afterH = Math.round(metadata.height / 2);
    const afterBuf = await sharp(inputPath)
      .extract({ left: 2 * thirdW, top: 0, width: afterW, height: afterH })
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: WEBP_QUALITY })
      .toBuffer();
    const afterInfo = await sharp(afterBuf).metadata();
    await writeFile(join(OUTPUT_DIR, `${outputName}-after.webp`), afterBuf);
    results.after = {
      src: `/images/${outputName}-after.webp`,
      width: afterInfo.width,
      height: afterInfo.height,
      blurDataURL: await generateBlurDataURL(afterBuf),
      alt: alts.after,
    };
    console.log(`  ✓ ${outputName}-after.webp (${afterInfo.width}x${afterInfo.height}, ${(afterBuf.length / 1024).toFixed(0)}KB)`);
  }

  return results;
}

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });

  const manifest = {};
  console.log("Processing images...\n");

  for (const item of IMAGE_MAP) {
    const inputPath = join(INPUT_DIR, item.src);
    console.log(`Processing: ${item.out}`);

    try {
      if (item.splitMode) {
        manifest[item.out] = await processSplit(inputPath, item.out, item.splitMode, {
          before: item.altBefore,
          after: item.altAfter,
        });
      } else {
        manifest[item.out] = await processStandard(inputPath, item.out, {
          alt: item.alt,
          cropBottom: item.cropBottom,
        });
      }
    } catch (err) {
      console.error(`  ✗ Failed: ${err.message}`);
    }
  }

  // Write manifest JSON
  const manifestPath = join(OUTPUT_DIR, "manifest.json");
  await writeFile(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`\nManifest written to ${manifestPath}`);

  // Calculate total size
  const { readdirSync, statSync } = await import("fs");
  const files = readdirSync(OUTPUT_DIR).filter((f) => f.endsWith(".webp"));
  const totalSize = files.reduce((sum, f) => sum + statSync(join(OUTPUT_DIR, f)).size, 0);
  console.log(`Total: ${files.length} images, ${(totalSize / 1024 / 1024).toFixed(2)}MB`);
}

main().catch(console.error);
