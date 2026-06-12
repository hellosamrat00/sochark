import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Sochark fuses 'soch' — Nepali for thought — with 'spark'. We're a software, AI & cloud studio that operates as your product team — from first sketch to production scale.",
};

const values = [
  {
    title: "No black boxes",
    body: "You see the repo, the board, and the people. Weekly demos of working software, not status decks.",
  },
  {
    title: "Outcomes over hours",
    body: "We scope engagements around what ships, not how long we sat. If a no-code tool solves it in a day, that's what we'll recommend.",
  },
  {
    title: "Built to hand over",
    body: "Your code in your repos, documented from day one. You could take everything in-house in 30 days — most clients never want to.",
  },
  {
    title: "Stay after launch",
    body: "Software is a living thing. We monitor, maintain, and grow what we build — launch is the starting line.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        eyebrow="About us"
        title="Thought,"
        titleOutline="ignited."
        description="Sochark fuses 'soch' (सोच) — Nepali for thought — with 'spark': the instant an idea catches. We named the studio after the part of software that matters most: the thinking that happens before, during, and long after the code."
      />

      {/* story */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-muted">
              The studio
            </p>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight tracking-tight">
              A product team you can
              <span className="text-accent"> rent</span>, with a quality bar
              you can&apos;t.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-col gap-6 text-lg leading-relaxed text-muted lg:pt-2">
              <p>
                Sochark Technologies started with a simple observation: most
                businesses don&apos;t need more software — they need software
                that was thought through. Rushed builds, abandoned codebases,
                and agencies that vanish after the invoice clears are the
                industry default. We built the studio we wished existed.
              </p>
              <p>
                Today we design, build, automate, market, and maintain digital
                products across six service verticals — from a landing page
                that needs to convert, to an AI agent that quietly runs a back
                office, to a growth engine that compounds month after month.
              </p>
              <p>
                We work with clients globally, but we build from Nepal — proof
                that world-class software thinking doesn&apos;t need a famous
                zip code, just a high bar and the discipline to keep it.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* values */}
      <section className="border-t border-line bg-foreground/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <Reveal>
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-muted">
              What we believe
            </p>
            <h2 className="mb-16 font-display text-[clamp(2.2rem,6vw,4.5rem)] font-bold leading-tight tracking-tight">
              Four rules,
              <span className="text-stroke"> zero exceptions.</span>
            </h2>
          </Reveal>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.08} className="h-full">
                <div className="group flex h-full flex-col gap-6 bg-background p-10 transition-colors duration-300 hover:bg-foreground/[0.04]">
                  <span className="text-accent" aria-hidden>
                    ✦
                  </span>
                  <div>
                    <h3 className="mb-3 font-display text-2xl font-semibold transition-colors group-hover:text-accent">
                      {value.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">
                      {value.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      <Process />
      <CTA />
    </main>
  );
}
