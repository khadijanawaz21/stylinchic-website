"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/data";
import Button from "./ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && (section as HTMLElement).offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].href);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        className="fixed top-4 left-0 right-0 z-40 mx-auto w-[90%] max-w-5xl md:w-[85%]"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <nav
          className={`flex items-center justify-between rounded-full px-6 py-3 backdrop-blur-xl transition-all duration-200 ${
            scrolled
              ? "border border-white/15 bg-white/80 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
              : "border border-white/12 bg-white/10"
          }`}
        >
          <a
            href="#"
            className={`font-heading text-[22px] font-semibold tracking-[-0.01em] transition-colors duration-200 ${
              scrolled ? "text-espresso" : "text-white"
            }`}
          >
            Stylin&apos;Chic
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[14px] font-medium transition-colors duration-200 ${
                  activeSection === link.href
                    ? "text-accent"
                    : scrolled
                      ? "text-espresso/65 hover:text-espresso"
                      : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <Button href="#contact" variant="primary">
              Book Now
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <div className="flex flex-col gap-1.5">
              <motion.span
                className={`block h-0.5 w-6 transition-colors duration-200 ${
                  mobileOpen
                    ? "bg-cream"
                    : scrolled
                      ? "bg-espresso"
                      : "bg-white"
                }`}
                animate={
                  mobileOpen
                    ? { rotate: 45, y: 4 }
                    : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className={`block h-0.5 w-6 transition-colors duration-200 ${
                  mobileOpen
                    ? "bg-cream"
                    : scrolled
                      ? "bg-espresso"
                      : "bg-white"
                }`}
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className={`block h-0.5 w-6 transition-colors duration-200 ${
                  mobileOpen
                    ? "bg-cream"
                    : scrolled
                      ? "bg-espresso"
                      : "bg-white"
                }`}
                animate={
                  mobileOpen
                    ? { rotate: -45, y: -4 }
                    : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.3 }}
              />
            </div>
          </button>
        </nav>
      </motion.header>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-espresso"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-heading text-2xl font-medium text-cream hover:text-accent transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1 + navLinks.length * 0.08,
                  duration: 0.4,
                }}
              >
                <Button
                  href="#contact"
                  variant="primary"
                  onClick={() => setMobileOpen(false)}
                >
                  Book Now
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
