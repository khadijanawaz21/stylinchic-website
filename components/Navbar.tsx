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

      // Active section detection
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
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-cream/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="font-serif text-2xl font-semibold text-espresso">
            Stylin&apos;Chic
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.href
                    ? "text-accent"
                    : "text-espresso/70 hover:text-espresso"
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
                className={`block h-0.5 w-6 ${mobileOpen ? "bg-cream" : "bg-espresso"}`}
                animate={
                  mobileOpen
                    ? { rotate: 45, y: 4 }
                    : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className={`block h-0.5 w-6 ${mobileOpen ? "bg-cream" : "bg-espresso"}`}
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className={`block h-0.5 w-6 ${mobileOpen ? "bg-cream" : "bg-espresso"}`}
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
                  className="font-serif text-3xl font-medium text-cream hover:text-accent-rose transition-colors"
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
