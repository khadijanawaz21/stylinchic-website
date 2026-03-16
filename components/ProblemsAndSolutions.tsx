"use client";

import { motion } from "framer-motion";
import { problems, solutions } from "@/lib/data";
import SectionHeader from "./ui/SectionHeader";
import AnimatedReveal from "./ui/AnimatedReveal";

export default function ProblemsAndSolutions() {
  return (
    <section className="bg-cream-dark/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader title="Problems We Solve" />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Problems column */}
          <AnimatedReveal direction="left">
            <div className="rounded-3xl bg-cream p-8 lg:p-10">
              <h3 className="mb-8 font-serif text-2xl font-medium text-espresso">
                Hair Problems We Solve
              </h3>
              <div className="space-y-6">
                {problems.map((problem, i) => (
                  <motion.div
                    key={problem.title}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-rose/15 text-accent-rose">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-espresso">
                        {problem.title}
                      </h4>
                      <p className="mt-1 text-sm text-espresso/60">
                        {problem.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedReveal>

          {/* Solutions column */}
          <AnimatedReveal direction="right">
            <div className="rounded-3xl bg-espresso p-8 lg:p-10">
              <h3 className="mb-8 font-serif text-2xl font-medium text-cream">
                How We Fix It
              </h3>
              <div className="space-y-6">
                {solutions.map((solution, i) => (
                  <motion.div
                    key={solution.title}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-cream">
                        {solution.title}
                      </h4>
                      <p className="mt-1 text-sm text-cream/60">
                        {solution.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedReveal>
        </div>

        {/* Visual connector lines (desktop) */}
        <div className="mt-8 hidden items-center justify-center gap-2 lg:flex">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="h-px w-16 bg-accent/30"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
