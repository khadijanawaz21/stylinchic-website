"use client";

import { motion } from "framer-motion";

interface AnimatedRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}

export default function AnimatedReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: AnimatedRevealProps) {
  const directionOffset = {
    up: { x: 0, y: 30 },
    left: { x: -30, y: 0 },
    right: { x: 30, y: 0 },
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...directionOffset[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
