"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] overflow-hidden bg-black"
    >
      {/* Background collage image */}
      <Image
        src="/images/hero-collage.webp"
        alt="Collage of hair transformations at Stylin'Chic salon"
        fill
        className="object-cover object-center"
        placeholder="blur"
        blurDataURL="data:image/webp;base64,UklGRmgAAABXRUJQVlA4IFwAAACQAwCdASoUAAsAPzmEuVOvKKWisAgB4CcJZACdABhvr+oZEH5oAP7L+wRjTkA7wBkHmQD+zN+KbGCWNus9lvt+d+QDPcb/c9b9xwg7asjn3tPVTcj0RBwnmoHwAA=="
        priority
        sizes="100vw"
      />

      {/* Light overlay — image is already dark */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.5) 100%)",
        }}
      />

      {/* Bottom fade into cream */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-20"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, #FAF7F2 100%)",
        }}
      />

      {/* Content — centered */}
      <div className="relative z-20 flex min-h-[100svh] flex-col items-center justify-center px-6 text-center md:items-center md:text-center">
        <div className="max-w-[700px]">
          <motion.div
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-[13px] font-medium text-white backdrop-blur-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            32K+ Happy Customers
          </motion.div>

          <motion.h1
            className="font-heading text-[clamp(2rem,5vw,3.75rem)] font-medium leading-[1.1] tracking-[-0.02em] text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Transform Your Hair with Nano Plastia &amp; Keratin Treatments
          </motion.h1>

          <motion.p
            className="mt-5 text-base leading-relaxed text-white/65"
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
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3.5 text-sm font-medium tracking-wide text-white transition-colors duration-300 hover:bg-white/10"
            >
              View Services
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
