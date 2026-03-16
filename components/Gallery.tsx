"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "@/lib/data";
import SectionHeader from "./ui/SectionHeader";
import AnimatedReveal from "./ui/AnimatedReveal";
import Button from "./ui/Button";

export default function Gallery() {
  return (
    <section className="bg-cream-dark/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader title="Explore Our Transformations" />

        <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
          {images.gallery.map((img, i) => (
            <AnimatedReveal key={i} delay={i * 0.08} className="mb-4 break-inside-avoid">
              <motion.div
                className="group relative overflow-hidden rounded-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  placeholder="blur"
                  blurDataURL={img.blurDataURL}
                />

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
