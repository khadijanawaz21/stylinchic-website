"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { images, type BeforeAfterPair } from "@/lib/data";
import SectionHeader from "./ui/SectionHeader";
import AnimatedReveal from "./ui/AnimatedReveal";

function Slider({ pair, index }: { pair: BeforeAfterPair; index: number }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current || !isDragging.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };
  const handleMouseUp = () => {
    isDragging.current = false;
  };
  const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const handleTouchMove = (e: React.TouchEvent) =>
    handleMove(e.touches[0].clientX);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[3/4] w-full cursor-ew-resize overflow-hidden rounded-2xl select-none"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      onTouchMove={handleTouchMove}
      role="slider"
      aria-label={`Before and after comparison ${index + 1}`}
      aria-valuenow={Math.round(position)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
    >
      {/* "After" side (full background) */}
      <div className="absolute inset-0">
        <Image
          src={pair.after.src}
          alt={pair.after.alt}
          width={pair.after.width}
          height={pair.after.height}
          className="h-full w-full object-cover"
          placeholder="blur"
          blurDataURL={pair.after.blurDataURL}
        />
        <div className="absolute bottom-4 right-4 z-20 rounded-full bg-espresso/70 px-3 py-1 text-xs font-medium text-cream">
          After
        </div>
      </div>

      {/* "Before" side (clipped) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={pair.before.src}
          alt={pair.before.alt}
          width={pair.before.width}
          height={pair.before.height}
          className="h-full w-full object-cover"
          placeholder="blur"
          blurDataURL={pair.before.blurDataURL}
        />
        <div className="absolute bottom-4 left-4 z-20 rounded-full bg-espresso/70 px-3 py-1 text-xs font-medium text-cream">
          Before
        </div>
      </div>

      {/* Drag handle */}
      <div
        className="absolute top-0 bottom-0 z-10 w-0.5 bg-cream shadow-lg"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-cream shadow-lg">
          <svg
            className="h-5 w-5 text-espresso"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 9l4-4 4 4m0 6l-4 4-4-4"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section id="results" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader title="The Proof is in the Results" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.beforeAfter.map((pair, i) => (
            <AnimatedReveal key={i} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Slider pair={pair} index={i} />
              </motion.div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
