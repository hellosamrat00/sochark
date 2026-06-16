"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import Magnetic from "./Magnetic";

const line = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: 0,
    transition: { duration: 0.9, delay: 1.0 + i * 0.12, ease: [0.21, 0.47, 0.32, 0.98] as const },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-end overflow-hidden px-6 pb-16 pt-32"
    >
      {/* background glow — slow ambient drift */}
      <motion.div
        aria-hidden
        animate={{ y: [0, -40, 0], x: [0, 24, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full opacity-20 blur-3xl"
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          }}
        />
      </motion.div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-muted"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          Software · AI · Cloud · Growth · Sochark Technologies
        </motion.p>

        <h1 className="font-display text-[clamp(3rem,11vw,9.5rem)] font-bold leading-[0.95] tracking-tight">
          <span className="block overflow-hidden">
            <motion.span variants={line} custom={0} initial="hidden" animate="show" className="block">
              We build
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span variants={line} custom={1} initial="hidden" animate="show" className="block">
              digital products
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span variants={line} custom={2} initial="hidden" animate="show" className="block">
              that <span className="italic text-accent">think</span><span className="text-stroke">.</span>
            </motion.span>
          </span>
        </h1>

        <div className="mt-12 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.7 }}
            className="max-w-md text-lg leading-relaxed text-muted"
          >
            From SaaS platforms and mobile apps to AI agents, cloud
            infrastructure, and growth marketing. We turn ambitious ideas
            into software that ships, scales, and earns.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.85, duration: 0.7 }}
          >
            <Magnetic>
              <Link
                href="/services"
                className="group flex items-center gap-3 font-display text-lg font-medium"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-line transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-background">
                  <ArrowDownRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
                </span>
                Explore our services
              </Link>
            </Magnetic>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
