import { processSteps } from "@/lib/data";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section id="process" className="border-t border-line bg-foreground/[0.02]">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <Reveal>
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-muted">
            How we work
          </p>
          <h2 className="mb-16 font-display text-[clamp(2.2rem,6vw,4.5rem)] font-bold leading-tight tracking-tight">
            No black boxes.
            <br />
            <span className="text-stroke">Just a clear path.</span>
          </h2>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal key={step.index} delay={i * 0.08} className="h-full">
              <div className="group flex h-full flex-col gap-10 bg-background p-8 transition-colors duration-300 hover:bg-foreground/[0.04]">
                <span className="font-display text-5xl font-bold text-stroke transition-colors duration-300 group-hover:text-accent group-hover:[-webkit-text-stroke:0px]">
                  {step.index}
                </span>
                <div>
                  <h3 className="mb-3 font-display text-2xl font-semibold">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {step.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
