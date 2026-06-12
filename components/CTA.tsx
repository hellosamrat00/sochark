"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";

export default function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-line">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-30%] left-1/2 h-[30rem] w-[60rem] -translate-x-1/2 rounded-full opacity-15 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-36 text-center">
        <Reveal>
          <p className="mb-6 text-sm uppercase tracking-[0.25em] text-muted">
            Have an idea?
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-[clamp(2.8rem,9vw,7.5rem)] font-bold leading-[0.95] tracking-tight">
            Let&apos;s build
            <br />
            something <span className="italic text-accent">smart</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-md text-lg text-muted">
            Tell us what you&apos;re working on. We&apos;ll reply within one
            business day with honest next steps — no sales script.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <Magnetic strength={0.25} className="mt-12">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-accent px-10 py-5 font-display text-lg font-semibold text-background"
              >
                Start a project
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </Magnetic>
          <p className="mt-6 text-sm text-muted">
            or email{" "}
            <a
              href="mailto:hello@sochark.com"
              className="text-foreground underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
            >
              hello@sochark.com
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
