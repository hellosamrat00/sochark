import { testimonials } from "@/lib/data";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

export default function Testimonials() {
  return (
    <section className="border-t border-line bg-foreground/[0.02]">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <Reveal>
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-muted">
            Client stories
          </p>
          <h2 className="mb-16 font-display text-[clamp(2.2rem,6vw,4.5rem)] font-bold leading-tight tracking-tight">
            Shipped for clients,
            <br />
            <span className="text-stroke">worldwide.</span>
          </h2>
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal key={item.company} delay={i * 0.08} className="h-full">
              <TiltCard max={5} className="h-full">
                <figure className="group flex h-full flex-col justify-between gap-12 rounded-2xl border border-line bg-background p-8 transition-colors duration-300 hover:border-accent/40 hover:bg-foreground/[0.04]">
                  <div>
                    <div className="mb-6 flex flex-wrap items-center gap-2 text-xs text-muted">
                      <span className="rounded-full border border-line px-3 py-1 transition-colors group-hover:border-accent group-hover:text-accent">
                        {item.type}
                      </span>
                      <span className="rounded-full border border-line px-3 py-1">
                        {item.country}
                      </span>
                    </div>
                    <p className="mb-4 font-display text-2xl font-semibold transition-colors duration-300 group-hover:text-accent">
                      {item.company}
                    </p>
                    <blockquote className="text-sm leading-relaxed text-muted">
                      &ldquo;{item.body}&rdquo;
                    </blockquote>
                  </div>
                  <figcaption className="flex items-center gap-4 border-t border-line pt-6">
                    <span
                      aria-hidden
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-line font-display text-sm font-semibold text-accent"
                    >
                      {item.name
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </span>
                    <span>
                      <span className="block font-display text-sm font-semibold">
                        {item.name}
                      </span>
                      <span className="block text-xs text-muted">{item.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
