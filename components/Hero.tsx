"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] overflow-hidden bg-black"
    >
      {/* Background texture */}
      <Image
        src="/images/hero-collage.webp"
        alt="Abstract hair texture background"
        fill
        className="object-cover object-center blur-[2px] scale-105"
        placeholder="blur"
        blurDataURL="data:image/webp;base64,UklGRmgAAABXRUJQVlA4IFwAAACQAwCdASoUAAsAPzmEuVOvKKWisAgB4CcJZACdABhvr+oZEH5oAP7L+wRjTkA7wBkHmQD+zN+KbGCWNus9lvt+d+QDPcb/c9b9xwg7asjn3tPVTcj0RBwnmoHwAA=="
        priority
        sizes="100vw"
      />

      {/* Layered overlays for depth + readability */}
      {/* Base darkening gradient — stronger in center where text sits */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.7) 100%)",
        }}
      />
      {/* Radial vignette — darkest behind center text, lighter at edges */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(0,0,0,0.3) 0%, transparent 70%)",
        }}
      />

      {/* Bottom fade into cream */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, #FAF7F2 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-20 flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
        <div className="max-w-[680px]">
          {/* Badge */}
          <motion.div
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-[13px] font-medium text-white/90 backdrop-blur-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_8px_rgba(139,92,246,0.6)]" />
            32K+ Happy Customers
          </motion.div>

          {/* Heading — text shadow for guaranteed readability */}
          <motion.h1
            className="font-heading text-[clamp(2.25rem,5.5vw,4rem)] font-medium leading-[1.08] tracking-[-0.02em] text-white"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5), 0 1px 3px rgba(0,0,0,0.3)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Transform Your Hair with Nano Plastia &amp; Keratin Treatments
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-white/70"
            style={{ textShadow: "0 1px 10px rgba(0,0,0,0.4)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Pickering&apos;s premier destination for smoothing treatments,
            balayage coloring, and hair restoration. Experience salon excellence
            in the GTA.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-9 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-accent px-9 py-4 text-[15px] font-semibold text-white shadow-[0_4px_24px_rgba(139,92,246,0.35)] transition-all duration-300 hover:bg-accent-hover hover:shadow-[0_4px_32px_rgba(139,92,246,0.5)] hover:scale-[1.02]"
            >
              Book an Appointment
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-9 py-4 text-[15px] font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/15 hover:border-white/40"
            >
              View Services
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
