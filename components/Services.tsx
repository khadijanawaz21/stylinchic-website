"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { services, differentiators, images } from "@/lib/data";
import SectionHeader from "./ui/SectionHeader";
import AnimatedReveal from "./ui/AnimatedReveal";

export default function Services() {
  return (
    <section id="services" className="bg-cream-dark/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader title="Our Signature Services" />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {services.map((service, i) => {
            const img = images.services[i];
            return (
              <AnimatedReveal key={service.title} delay={i * 0.08}>
                <motion.div
                  className="group relative overflow-hidden rounded-2xl bg-cream p-5 transition-shadow duration-300 hover:shadow-lg sm:p-6"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="mb-4 max-h-[220px] overflow-hidden rounded-xl sm:max-h-[280px]">
                    <motion.div
                      className="h-full w-full"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={img.width}
                        height={img.height}
                        className="h-full w-full object-cover"
                        placeholder="blur"
                        blurDataURL={img.blurDataURL}
                      />
                    </motion.div>
                  </div>

                  <h3 className="font-heading text-[20px] font-medium tracking-[-0.02em] text-espresso">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 text-[14px] text-espresso/55 leading-relaxed">
                    {service.description}
                  </p>

                  {service.note && (
                    <p className="mt-1.5 text-[12px] font-medium text-accent">
                      {service.note}
                    </p>
                  )}

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {service.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        className="rounded-full bg-cream-dark px-2.5 py-0.5 text-[11px] font-medium text-espresso/55"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + tagIndex * 0.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-500 group-hover:w-full" />
                </motion.div>
              </AnimatedReveal>
            );
          })}
        </div>

        {/* Differentiator badges */}
        <AnimatedReveal className="mt-10">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {differentiators.map((item, i) => (
              <motion.div
                key={item.title}
                className="rounded-2xl border border-espresso/8 bg-cream px-5 py-4 text-center transition-colors hover:border-accent/25"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08 }}
              >
                <h4 className="font-heading text-base font-medium tracking-[-0.02em] text-espresso">
                  {item.title}
                </h4>
                <p className="mt-0.5 text-[13px] text-espresso/50">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
