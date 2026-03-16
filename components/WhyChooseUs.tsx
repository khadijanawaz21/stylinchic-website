"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { differentiators, images } from "@/lib/data";
import SectionHeader from "./ui/SectionHeader";
import Button from "./ui/Button";
import AnimatedReveal from "./ui/AnimatedReveal";

export default function WhyChooseUs() {
  const img = images.whyChoose;

  return (
    <section id="about" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader title="Why Choose Stylin'Chic" />

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <AnimatedReveal direction="left">
            <p className="text-base leading-relaxed text-espresso/60">
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
                  <h4 className="font-heading text-lg font-medium tracking-[-0.02em] text-espresso">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-[14px] text-espresso/55">
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

          <AnimatedReveal direction="right">
            <div className="aspect-[3/4] overflow-hidden rounded-3xl">
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                className="h-full w-full object-cover"
                placeholder="blur"
                blurDataURL={img.blurDataURL}
              />
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}
