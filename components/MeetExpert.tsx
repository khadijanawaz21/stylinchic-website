"use client";

import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import AnimatedReveal from "./ui/AnimatedReveal";

export default function MeetExpert() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader title="Meet Your Hair Expert" />

        <AnimatedReveal className="mx-auto max-w-2xl">
          <div className="text-center">
            {/* Large image placeholder */}
            <motion.div
              className="mx-auto mb-8 aspect-[3/4] w-64 overflow-hidden rounded-3xl bg-gradient-to-br from-accent-rose/25 via-cream-dark to-accent/15"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Replace with actual photo of Shabana */}
              <div className="flex h-full items-center justify-center text-espresso/15">
                <svg
                  className="h-16 w-16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </motion.div>

            {/* Decorative line */}
            <div className="mx-auto mb-6 h-px w-16 bg-accent" />

            <h3 className="font-serif text-3xl font-medium text-espresso">
              Shabana
            </h3>
            <p className="mt-2 text-lg text-espresso/60">Lead Stylist</p>

            <p className="mx-auto mt-4 max-w-md text-espresso/60 leading-relaxed">
              With years of expertise in smoothing treatments, color
              transformations, and hair restoration, Shabana brings passion
              and precision to every client&apos;s journey.
            </p>

            <motion.a
              href="https://www.instagram.com/sty_lin_chic/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-rose transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              @sty_lin_chic
            </motion.a>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
