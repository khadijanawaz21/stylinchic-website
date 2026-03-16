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
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-32 lg:grid-cols-2 lg:gap-16 lg:px-8">
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
            className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.05] tracking-tight text-espresso"
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

        {/* Image area — right side */}
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-3xl">
            <Image
              src={hero.src}
              alt={hero.alt}
              width={hero.width}
              height={hero.height}
              className="h-full w-full object-cover object-center"
              placeholder="blur"
              blurDataURL={hero.blurDataURL}
              priority
            />
          </div>

          {/* Decorative floating element */}
          <motion.div
            className="absolute -bottom-4 -left-4 rounded-2xl bg-espresso px-6 py-4 text-cream shadow-xl lg:-left-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-xs font-medium uppercase tracking-wider text-cream/60">
              Trusted by
            </p>
            <p className="font-serif text-2xl font-semibold">32,000+</p>
            <p className="text-sm text-cream/80">Happy Clients</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
