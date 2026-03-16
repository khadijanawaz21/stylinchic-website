"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/data";
import SectionHeader from "./ui/SectionHeader";

export default function Process() {
  return (
    <section id="process" className="bg-espresso py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader title="How It Works" light />

        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {/* Connector line (desktop only) */}
          <div className="absolute top-12 left-[16.67%] right-[16.67%] hidden h-px bg-cream/20 md:block" />

          {processSteps.map((step, i) => (
            <motion.div
              key={step.number}
              className="relative text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              {/* Large decorative number */}
              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-cream/20 bg-charcoal-light">
                <span className="font-serif text-4xl font-bold text-accent">
                  {step.number}
                </span>
              </div>

              <h3 className="font-serif text-2xl font-medium text-cream">
                {step.title}
              </h3>
              <p className="mt-3 text-cream/60 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
