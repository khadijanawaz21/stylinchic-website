"use client";

import { motion } from "framer-motion";
import { differentiators } from "@/lib/data";
import SectionHeader from "./ui/SectionHeader";
import Button from "./ui/Button";
import AnimatedReveal from "./ui/AnimatedReveal";

export default function WhyChooseUs() {
  return (
    <section id="about" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader title="Why Choose Stylin'Chic" />

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Text + badges side */}
          <AnimatedReveal direction="left">
            <p className="text-lg leading-relaxed text-espresso/70">
              Pickering&apos;s premier salon for Nanoplastia, Keratin, and
              Balayage. Expert treatments using premium products for
              transformative results. Proudly serving the GTA.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {differentiators.map((item, i) => (
                <motion.div
                  key={item.title}
                  className="rounded-2xl border border-espresso/10 bg-cream-dark/50 p-5 transition-colors hover:border-accent/30"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <h4 className="font-serif text-lg font-medium text-espresso">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm text-espresso/60">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-10">
              <Button href="#contact" variant="primary">
                Get Expert Care
              </Button>
            </div>
          </AnimatedReveal>

          {/* Image side */}
          <AnimatedReveal direction="right">
            <div className="aspect-[3/4] overflow-hidden rounded-3xl bg-gradient-to-br from-accent-rose/20 via-cream-dark to-sage/15">
              {/* Replace with actual salon image */}
              <div className="flex h-full items-center justify-center text-espresso/15">
                <svg
                  className="h-20 w-20"
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
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}
