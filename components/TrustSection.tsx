import { ShieldCheck } from "lucide-react";
import { trustPoints } from "@/lib/data";
import Reveal from "./Reveal";

export default function TrustSection() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr]">
          {/* sticky intro */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <p className="mb-4 flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-muted">
                <ShieldCheck className="h-4 w-4 text-accent" />
                Why teams trust us
              </p>
              <h2 className="font-display text-[clamp(2.2rem,6vw,4.5rem)] font-bold leading-tight tracking-tight">
                Trust is
                <br />
                <span className="text-stroke">engineered too.</span>
              </h2>
              <p className="mt-6 max-w-sm text-lg leading-relaxed text-muted">
                Anyone can promise quality. We put our promises in the
                contract — six commitments every client gets in writing,
                before any work begins.
              </p>
              <p className="mt-8 rounded-2xl border border-line bg-foreground/[0.03] p-6 text-sm leading-relaxed text-muted">
                <span className="font-display text-base font-semibold text-foreground">
                  Still weighing it?
                </span>
                <br />
                Start with a one-week paid discovery sprint. If we waste your
                time, you get a full refund — that&apos;s in writing too.
              </p>
            </Reveal>
          </div>

          {/* commitment rows */}
          <div className="flex flex-col">
            {trustPoints.map((point, i) => (
              <Reveal key={point.index} delay={i * 0.06}>
                <div className="group border-b border-line py-8 transition-colors duration-300 first:border-t hover:bg-foreground/[0.02]">
                  <div className="flex items-start gap-6 md:gap-10">
                    <span className="font-display text-4xl font-bold text-stroke transition-all duration-300 group-hover:text-accent group-hover:[-webkit-text-stroke:0px] md:text-5xl">
                      {point.index}
                    </span>
                    <div>
                      <h3 className="mb-2 font-display text-xl font-semibold transition-colors duration-300 group-hover:text-accent md:text-2xl">
                        {point.title}
                      </h3>
                      <p className="max-w-lg text-sm leading-relaxed text-muted md:text-base">
                        {point.body}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
