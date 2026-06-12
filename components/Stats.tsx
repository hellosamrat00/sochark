"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { stats } from "@/lib/data";
import Reveal from "./Reveal";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-6xl font-bold tracking-tight md:text-7xl">
      {display}
      <span className="text-accent">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-28">
      <div className="grid gap-16 lg:grid-cols-2">
        <Reveal>
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-muted">
            Why Sochark
          </p>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight tracking-tight">
            One partner from first sketch to
            <span className="text-accent"> production scale</span>.
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
            Most agencies hand you a deliverable and disappear. We operate as
            your product team — designing, building, automating, and
            maintaining systems that compound in value. Whether you need a
            single landing page or a dedicated engineering squad, the quality
            bar stays the same.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-x-8 gap-y-14 self-center">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div className="flex flex-col gap-2 border-l border-line pl-6">
                <Counter value={stat.value} suffix={stat.suffix} />
                <span className="text-sm uppercase tracking-wider text-muted">
                  {stat.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
