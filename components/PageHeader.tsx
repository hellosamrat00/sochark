"use client";

import { motion } from "framer-motion";

const line = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: 0,
    transition: {
      duration: 0.8,
      delay: 1.0 + i * 0.1,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    },
  }),
};

export default function PageHeader({
  eyebrow,
  title,
  titleOutline,
  description,
}: {
  eyebrow: string;
  title: string;
  titleOutline?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line px-6 pb-16 pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-15%] h-[28rem] w-[28rem] rounded-full opacity-15 blur-3xl"
        style={{
          background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-muted"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          {eyebrow}
        </motion.p>

        <h1 className="font-display text-[clamp(2.8rem,8vw,6.5rem)] font-bold leading-[0.98] tracking-tight">
          <span className="block overflow-hidden">
            <motion.span variants={line} custom={0} initial="hidden" animate="show" className="block">
              {title}
            </motion.span>
          </span>
          {titleOutline && (
            <span className="block overflow-hidden">
              <motion.span
                variants={line}
                custom={1}
                initial="hidden"
                animate="show"
                className="text-stroke block"
              >
                {titleOutline}
              </motion.span>
            </span>
          )}
        </h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.7 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
