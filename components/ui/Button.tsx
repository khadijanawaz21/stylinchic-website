"use client";

import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300 cursor-pointer";

  const variants = {
    primary: "bg-accent text-white hover:bg-accent-hover",
    secondary: "bg-espresso text-cream hover:bg-espresso-light",
    outline:
      "border border-espresso/20 text-espresso hover:bg-espresso hover:text-cream",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedStyles}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={combinedStyles}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  );
}
