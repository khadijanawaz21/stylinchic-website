"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  light = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <motion.div
      className={`mb-14 text-center ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2
        className={`font-heading text-[clamp(1.75rem,4vw,2.75rem)] font-medium tracking-[-0.02em] leading-[1.15] ${
          light ? "text-cream" : "text-espresso"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 max-w-2xl mx-auto text-base leading-relaxed ${
            light ? "text-cream/70" : "text-espresso/55"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
