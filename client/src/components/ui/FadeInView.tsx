import { motion, type Variants } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

// ─── Variants ──────────────────────────────────────────────────────────────────
const VARIANTS: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: 28 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: -28 },
    visible: { opacity: 1, x: 0 },
  },
  none: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

// Smooth custom ease curve (fast out → gentle settle)
const EASE = [0.22, 1, 0.36, 1] as const;

interface FadeInViewProps {
  children: ReactNode;
  /** Delay in seconds before the animation starts (for staggered groups) */
  delay?: number;
  /** Direction the element slides in from */
  direction?: "up" | "left" | "right" | "none";
  /** Optional inline styles forwarded to the motion.div wrapper */
  style?: CSSProperties;
  className?: string;
  /** Animation duration in seconds (default 0.65s) */
  duration?: number;
}

/**
 * FadeInView — wraps children in a Framer Motion element that fades (+ slides)
 * into view once the element enters the viewport.
 *
 * Usage:
 *   <FadeInView direction="up" delay={0.1}>
 *     <Typography>Hello</Typography>
 *   </FadeInView>
 *
 * Notes:
 * - `once: true` means the animation only plays the first time (no re-trigger on scroll back).
 * - `margin: "-60px"` fires slightly before the element reaches the viewport edge,
 *   giving a natural "already arriving" feel rather than a late pop-in.
 */
export function FadeInView({
  children,
  delay = 0,
  direction = "up",
  style,
  className,
  duration = 0.65,
}: FadeInViewProps) {
  return (
    <motion.div
      variants={VARIANTS[direction]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: EASE }}
      style={style}
      className={className}
    >
      {children}
    </motion.div>
  );
}
