"use client";

import { motion } from "framer-motion";
import { reviews } from "@/lib/data";
import SectionHeader from "./ui/SectionHeader";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <svg
          key={i}
          className="h-4 w-4 text-accent"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  return (
    <div className="w-[350px] shrink-0 rounded-2xl bg-cream p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 font-serif text-lg font-semibold text-accent">
          {review.name.charAt(0)}
        </div>
        <div>
          <p className="font-medium text-espresso">{review.name}</p>
          <p className="text-xs text-espresso/50">{review.service}</p>
        </div>
      </div>
      <StarRating rating={review.rating} />
      <p className="mt-3 text-sm leading-relaxed text-espresso/70">
        &ldquo;{review.quote}&rdquo;
      </p>
    </div>
  );
}

export default function Reviews() {
  const doubledReviews = [...reviews, ...reviews];

  return (
    <section id="reviews" className="bg-cream-dark/30 py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader title="Client Love" />
      </div>

      {/* Marquee container — slowed to 80s for leisurely reading */}
      <div className="group relative">
        <motion.div
          className="flex gap-6 px-6"
          animate={{ x: [0, -50 * reviews.length + "%"] }}
          transition={{
            x: {
              duration: 80,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          whileHover={{ animationPlayState: "paused" }}
          style={{ width: "fit-content" }}
        >
          {doubledReviews.map((review, i) => (
            <ReviewCard key={`${review.name}-${i}`} review={review} />
          ))}
        </motion.div>

        {/* Gradient fades on edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-cream-dark/30 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-cream-dark/30 to-transparent" />
      </div>
    </section>
  );
}
