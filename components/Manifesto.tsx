"use client";

import { motion } from "framer-motion";
import { manifesto } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.045, delayChildren: 0.1 },
  },
};

const wordAnim = {
  hidden: { opacity: 0.1, y: 14, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export default function Manifesto() {
  const words = manifesto.split(" ");

  return (
    <section className="mx-auto max-w-5xl px-6 py-40">
      <p className="mb-10 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-muted">
        <span className="text-accent">✦</span> Manifesto
      </p>
      <motion.p
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-25%" }}
        className="font-display text-[clamp(1.8rem,4.5vw,3.6rem)] font-semibold leading-[1.25] tracking-tight"
      >
        {words.map((word, i) => {
          const accent = /^(soch|thought\.?:?)$/i.test(word.replace(/[—,]/g, ""));
          return (
            <motion.span
              key={i}
              variants={wordAnim}
              className={`inline-block whitespace-pre ${accent ? "italic text-accent" : ""}`}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.p>
    </section>
  );
}
