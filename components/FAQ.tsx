"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/lib/data";
import SectionHeader from "./ui/SectionHeader";

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-espresso/10">
      <button
        className="flex w-full items-center justify-between py-5 text-left cursor-pointer"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="pr-4 text-lg font-medium text-espresso">
          {faq.question}
        </span>
        <motion.span
          className="shrink-0 text-espresso/40"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
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
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-espresso/60 leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <SectionHeader title="Answers to Your Most Common Questions" />

        <div>
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() =>
                setOpenIndex(openIndex === i ? null : i)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
