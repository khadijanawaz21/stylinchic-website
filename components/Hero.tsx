"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./ui/Button";

const mosaicCells = [
  { src: "/images/service-smoothing.webp", alt: "Glossy straight dark hair texture", scale: 2.8, position: "center 30%" },
  { src: "/images/service-color.webp", alt: "Cherry burgundy red hair texture", scale: 2.5, position: "center 40%" },
  { src: "/images/gallery-1.webp", alt: "Caramel balayage highlights texture", scale: 2.6, position: "center 35%" },
  { src: "/images/gallery-4.webp", alt: "Bouncy brown curls texture", scale: 2.4, position: "center 45%" },
  { src: "/images/why-choose.webp", alt: "Straight hair with highlights texture", scale: 2.7, position: "center 30%" },
  { src: "/images/hero.webp", alt: "Dark smooth keratin result texture", scale: 2.5, position: "center 40%" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] overflow-hidden bg-black"
    >
      {/* Mosaic grid background */}
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-3 gap-0 md:grid-cols-3 md:grid-rows-2">
        {mosaicCells.map((cell, i) => (
          <motion.div
            key={i}
            className="relative overflow-hidden"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.03, 1] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 3.3,
            }}
          >
            <Image
              src={cell.src}
              alt={cell.alt}
              fill
              className="object-cover"
              style={{
                transform: `scale(${cell.scale})`,
                objectPosition: cell.position,
              }}
              priority={i < 3}
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </motion.div>
        ))}
      </div>

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.8) 100%)",
        }}
      />

      {/* Content — centered */}
      <div className="relative z-20 flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
        <motion.div
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[13px] font-medium text-white backdrop-blur-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          32K+ Happy Customers
        </motion.div>

        <motion.h1
          className="max-w-3xl font-heading text-[clamp(2rem,5vw,3.75rem)] font-medium leading-[1.1] tracking-[-0.02em] text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Transform Your Hair with Nano Plastia &amp; Keratin Treatments
        </motion.h1>

        <motion.p
          className="mt-5 max-w-xl text-base leading-relaxed text-white/65"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Pickering&apos;s premier destination for smoothing treatments,
          balayage coloring, and hair restoration. Experience salon excellence
          in the GTA.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Button href="#contact" variant="primary">
            Book an Appointment
          </Button>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-full border border-white/25 px-8 py-3.5 text-sm font-medium tracking-wide text-white transition-colors duration-300 hover:bg-white/10"
          >
            View Services
          </a>
        </motion.div>
      </div>
    </section>
  );
}
