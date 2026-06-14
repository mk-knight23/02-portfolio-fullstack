import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  /** Direction the content travels in from. */
  from?: "up" | "left" | "right";
  delay?: number;
  className?: string;
}

const LUXURY_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Scroll-triggered entrance used across cinematic sections.
 * Mirrors the YORCH whileInView pattern (opacity + offset, once).
 */
export function Reveal({
  children,
  from = "up",
  delay = 0,
  className = "",
}: RevealProps) {
  const offset =
    from === "left"
      ? { x: -40, y: 0 }
      : from === "right"
        ? { x: 40, y: 0 }
        : { x: 0, y: 40 };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: LUXURY_EASE, delay }}
    >
      {children}
    </motion.div>
  );
}
