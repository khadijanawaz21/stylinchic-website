"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "@/lib/data";
import Button from "./ui/Button";

export default function Hero() {
  const hero = images.hero;

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-cream"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-32 lg:grid-cols-[1fr_1.2fr] lg:gap-12 lg:px-8">
        {/* Text content — left side */}
        <div className="flex flex-col justify-center">
          <motion.div
            className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            32K+ Happy Customers
          </motion.div>

          <motion.h1
            className="font-serif text-[clamp(2.8rem,7vw,5.5rem)] font-medium leading-[1.02] tracking-tight text-espresso"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Transform Your Hair with Nano Plastia &amp; Keratin Treatments
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-lg leading-relaxed text-espresso/60"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Pickering&apos;s premier destination for smoothing treatments,
            balayage coloring, and hair restoration. Experience salon
            excellence in the GTA.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Button href="#contact" variant="primary">
              Book an Appointment
            </Button>
            <Button href="#services" variant="outline">
              View Services
            </Button>
          </motion.div>
        </div>

        {/* Image area — right side, larger and more editorial */}
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-full overflow-hidden rounded-3xl">
            <Image
              src={hero.src}
              alt={hero.alt}
              width={hero.width}
              height={hero.height}
              className="h-auto w-full object-cover object-top"
              placeholder="blur"
              blurDataURL={hero.blurDataURL}
              priority
            />
            {/* Bottom gradient fade into cream background */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-cream to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
