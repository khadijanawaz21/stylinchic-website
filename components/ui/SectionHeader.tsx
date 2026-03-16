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
      className={`mb-16 text-center ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2
        className={`font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight ${
          light ? "text-cream" : "text-espresso"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl mx-auto text-lg ${
            light ? "text-cream/70" : "text-espresso/60"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
