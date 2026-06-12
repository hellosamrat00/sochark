"use client";

import { motion } from "framer-motion";

const ease = [0.76, 0, 0.24, 1] as const;

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* curtain wipe — ink layer holds the wordmark, then lifts; accent follows */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[92] flex items-center justify-center bg-background"
        style={{ transformOrigin: "top" }}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.65, ease, delay: 0.85 }}
      >
        <motion.span
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: [0, 1, 1, 0], y: [24, 0, 0, -28] }}
          transition={{ duration: 1, times: [0, 0.2, 0.78, 1], ease: "easeInOut" }}
          className="font-display text-4xl font-bold tracking-tight md:text-5xl"
        >
          SOCHARK<span className="text-accent">.</span>
        </motion.span>
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[91] bg-accent"
        style={{ transformOrigin: "top" }}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.65, ease, delay: 1 }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        {children}
      </motion.div>
    </>
  );
}
