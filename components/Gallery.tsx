"use client";

import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import AnimatedReveal from "./ui/AnimatedReveal";
import Button from "./ui/Button";

const galleryItems = [
  { aspect: "aspect-[3/4]", span: "" },
  { aspect: "aspect-square", span: "" },
  { aspect: "aspect-[3/4]", span: "" },
  { aspect: "aspect-square", span: "" },
  { aspect: "aspect-[4/3]", span: "sm:col-span-2" },
  { aspect: "aspect-[3/4]", span: "" },
  { aspect: "aspect-square", span: "" },
  { aspect: "aspect-[3/4]", span: "" },
];

export default function Gallery() {
  return (
    <section className="bg-cream-dark/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader title="Explore Our Transformations" />

        <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
          {galleryItems.map((item, i) => (
            <AnimatedReveal key={i} delay={i * 0.08} className="mb-4 break-inside-avoid">
              <motion.div
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cream-dark via-accent-rose/15 to-accent/10 ${item.aspect}`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Replace with actual gallery image */}
                <div className="absolute inset-0 flex items-center justify-center text-espresso/10">
                  <svg
                    className="h-10 w-10"
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

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-espresso/0 transition-colors duration-300 group-hover:bg-espresso/40">
                  <span className="translate-y-4 text-sm font-medium text-cream opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    View on Instagram
                  </span>
                </div>
              </motion.div>
            </AnimatedReveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            href="https://www.instagram.com/sty_lin_chic/"
            variant="outline"
          >
            More on Instagram
          </Button>
        </div>
      </div>
    </section>
  );
}
