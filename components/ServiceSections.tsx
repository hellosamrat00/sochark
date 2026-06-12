"use client";

import { useEffect, useState } from "react";
import { services } from "@/lib/data";
import Reveal from "./Reveal";

export default function ServiceSections() {
  const [activeId, setActiveId] = useState(services[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -55% 0px" }
    );
    services.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-16 lg:grid-cols-[240px_1fr]">
        {/* sticky index */}
        <aside className="hidden lg:block">
          <nav className="sticky top-32">
            <p className="mb-6 text-xs uppercase tracking-[0.25em] text-muted">
              Index
            </p>
            <ul className="flex flex-col gap-1">
              {services.map((service) => {
                const isActive = activeId === service.id;
                return (
                  <li key={service.id}>
                    <a
                      href={`#${service.id}`}
                      className={`group flex items-baseline gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                        isActive
                          ? "bg-foreground/[0.05] text-accent"
                          : "text-muted hover:text-foreground"
                      }`}
                    >
                      <span className="font-display text-xs">{service.index}</span>
                      <span className="font-medium">{service.title}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        {/* service blocks */}
        <div className="flex flex-col gap-28">
          {services.map((service) => (
            <article key={service.id} id={service.id} className="scroll-mt-32">
              <Reveal>
                <div className="flex items-baseline gap-6 border-b border-line pb-6">
                  <span className="font-display text-sm text-accent">
                    {service.index}
                  </span>
                  <h2 className="font-display text-[clamp(1.8rem,4.5vw,3.2rem)] font-bold tracking-tight">
                    {service.title}
                  </h2>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mt-6 max-w-xl text-lg italic leading-relaxed text-muted">
                  {service.tagline}
                </p>
              </Reveal>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {service.items.map((item, j) => (
                  <Reveal key={item} delay={0.15 + j * 0.04}>
                    <div className="group flex h-full items-start gap-3 rounded-xl border border-line bg-foreground/[0.02] px-5 py-4 transition-colors duration-300 hover:border-accent/40 hover:bg-foreground/[0.05]">
                      <span
                        className="mt-0.5 text-sm text-accent transition-transform duration-300 group-hover:rotate-90"
                        aria-hidden
                      >
                        ✦
                      </span>
                      <span className="text-sm leading-relaxed text-foreground/85">
                        {item}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
