"use client";

import { motion } from "framer-motion";
import Button from "./ui/Button";

export default function Hero() {
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
          {/* Main image placeholder */}
          <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-3xl bg-gradient-to-br from-cream-dark via-accent-rose/20 to-accent/10">
            {/* Replace with actual hero image: <Image src="/hero.jpg" alt="..." fill className="object-cover" /> */}
            <div className="absolute inset-0 flex items-center justify-center text-espresso/20">
              <svg
                className="h-24 w-24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
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
