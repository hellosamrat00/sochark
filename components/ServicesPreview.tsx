"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

export default function ServicesPreview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <Reveal>
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-muted">
              What we do
            </p>
            <h2 className="font-display text-[clamp(2.2rem,6vw,4.5rem)] font-bold leading-tight tracking-tight">
              Full-stack capability,
              <br />
              <span className="text-stroke">one studio.</span>
            </h2>
          </div>
          <Link
            href="/services"
            className="group flex items-center gap-2 font-display text-lg font-medium text-foreground transition-colors hover:text-accent"
          >
            All services
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <Reveal key={service.id} delay={i * 0.06} className="h-full">
            <TiltCard className="h-full">
              <Link
                href={`/services#${service.id}`}
                className="group flex h-full flex-col justify-between gap-12 rounded-2xl border border-line bg-foreground/[0.02] p-8 transition-colors duration-300 hover:border-accent/40 hover:bg-foreground/[0.05]"
              >
                <div className="flex items-start justify-between">
                  <span className="font-display text-sm text-muted">
                    {service.index}
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-background">
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                  </span>
                </div>
                <div>
                  <h3 className="mb-2 font-display text-2xl font-semibold transition-colors duration-300 group-hover:text-accent">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {service.tagline}
                  </p>
                </div>
              </Link>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
