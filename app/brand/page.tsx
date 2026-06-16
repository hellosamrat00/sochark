import type { Metadata } from "next";
import { Check, X } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import ColorSwatch from "@/components/ColorSwatch";
import {
  brandColors,
  typeScale,
  logoRules,
  voice,
  graphicLanguage,
} from "@/lib/brand";

export const metadata: Metadata = {
  title: "Brand book",
  description:
    "The Sochark Technologies brand system: logo, color palette, typography, graphic language, and voice.",
};

function SectionTitle({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <Reveal>
      <div className="mb-12 flex items-baseline gap-6 border-b border-line pb-6">
        <span className="font-display text-sm text-accent">{index}</span>
        <h2 className="font-display text-[clamp(1.8rem,4.5vw,3rem)] font-bold tracking-tight">
          {title}
        </h2>
      </div>
    </Reveal>
  );
}

export default function BrandPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Brand book · v1.0"
        title="The Sochark"
        titleOutline="brand system."
        description="Everything needed to represent Sochark Technologies consistently: logo, color, type, graphic language, and voice. One source of truth."
      />

      {/* 01 — Logo */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionTitle index="01" title="Logo" />
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="flex h-full min-h-72 items-center justify-center bg-background p-10">
              <span className="font-display text-7xl font-bold tracking-tight">
                SOCHARK<span className="text-accent">.</span>
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="h-full">
            <div className="flex h-full min-h-72 items-center justify-center bg-[#F2F0EA] p-10">
              <span className="font-display text-7xl font-bold tracking-tight text-[#0A0A0A]">
                SOCHARK<span className="text-[#0A0A0A]">.</span>
              </span>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <p className="mt-8 max-w-2xl leading-relaxed text-muted">
            The wordmark is set in Space Grotesk Bold with tight tracking and
            always ends with a period, <em className="text-foreground">the spark</em>.
            On Ink, the period is Volt. On light surfaces, the whole mark
            switches to Ink. &ldquo;Sochark&rdquo; fuses &ldquo;soch&rdquo; (सोच), Nepali for{" "}
            <em className="text-foreground">thought</em>, with &ldquo;spark&rdquo;;
            the period marks the moment a thought catches.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
          <Reveal className="h-full">
            <div className="h-full bg-background p-8">
              <h3 className="mb-6 flex items-center gap-2 font-display text-lg font-semibold text-accent">
                <Check className="h-5 w-5" /> Do
              </h3>
              <ul className="flex flex-col gap-3">
                {logoRules.dos.map((rule) => (
                  <li key={rule} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/80">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="h-full">
            <div className="h-full bg-background p-8">
              <h3 className="mb-6 flex items-center gap-2 font-display text-lg font-semibold text-muted">
                <X className="h-5 w-5" /> Don&apos;t
              </h3>
              <ul className="flex flex-col gap-3">
                {logoRules.donts.map((rule) => (
                  <li key={rule} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 02 — Color */}
      <section className="border-t border-line bg-foreground/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionTitle index="02" title="Color palette" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {brandColors.map((color, i) => (
              <Reveal key={color.name} delay={i * 0.08} className="h-full">
                <ColorSwatch {...color} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted">
              Ratio guide: roughly 70% Ink, 20% Bone, 7% Graphite, 3% Volt.
              Volt is an exclamation point, not a paragraph. One Volt moment
              per viewport. Hairlines use Bone at 12% opacity.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 03 — Typography */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionTitle index="03" title="Typography" />
        <div className="mb-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
          <Reveal className="h-full">
            <div className="h-full bg-background p-10">
              <p className="mb-4 text-xs uppercase tracking-[0.25em] text-muted">
                Display · Space Grotesk
              </p>
              <p className="font-display text-6xl font-bold tracking-tight">
                Aa Bb Cc
              </p>
              <p className="mt-4 font-display text-xl text-foreground/80">
                0123456789 · ?!&amp;✦
              </p>
              <p className="mt-6 text-sm leading-relaxed text-muted">
                Headlines, numbers, buttons, and the wordmark. Weights 500–700.
                Tight tracking, leading 0.95–1.1.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="h-full">
            <div className="h-full bg-background p-10">
              <p className="mb-4 text-xs uppercase tracking-[0.25em] text-muted">
                Body · Inter
              </p>
              <p className="text-6xl font-medium tracking-tight">Aa Bb Cc</p>
              <p className="mt-4 text-xl text-foreground/80">
                0123456789 · ?!&amp;
              </p>
              <p className="mt-6 text-sm leading-relaxed text-muted">
                Body copy, UI labels, captions, and forms. Weights 400–600.
                Generous leading: 1.6–1.8 for paragraphs.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="overflow-hidden rounded-2xl border border-line">
          {typeScale.map((row, i) => (
            <Reveal key={row.label} delay={i * 0.05}>
              <div
                className={`grid items-center gap-4 p-6 md:grid-cols-[200px_1fr] md:gap-10 ${
                  i > 0 ? "border-t border-line" : ""
                }`}
              >
                <div>
                  <p className="font-display text-sm font-semibold">{row.label}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{row.spec}</p>
                </div>
                <p
                  className={
                    row.label.startsWith("Display")
                      ? "font-display text-6xl font-bold tracking-tight md:text-7xl"
                      : row.label === "Heading 1"
                        ? "font-display text-4xl font-bold tracking-tight md:text-5xl"
                        : row.label === "Heading 2"
                          ? "font-display text-3xl font-semibold tracking-tight"
                          : row.label === "Body Large"
                            ? "text-lg leading-relaxed text-foreground/80"
                            : row.label === "Body"
                              ? "text-sm leading-relaxed text-foreground/80"
                              : "text-sm uppercase tracking-[0.25em] text-muted"
                  }
                >
                  {row.sample}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 04 — Graphic language */}
      <section className="border-t border-line bg-foreground/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionTitle index="04" title="Graphic language" />
          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {graphicLanguage.map((element, i) => (
              <Reveal key={element.name} delay={i * 0.06} className="h-full">
                <div className="flex h-full flex-col gap-4 bg-background p-8">
                  <h3 className="font-display text-xl font-semibold">
                    {element.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {element.detail}
                  </p>
                </div>
              </Reveal>
            ))}
            {/* live specimen */}
            <Reveal delay={0.3} className="h-full">
              <div className="relative flex h-full min-h-48 flex-col items-center justify-center gap-3 overflow-hidden bg-background p-8">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -bottom-10 left-1/2 h-40 w-64 -translate-x-1/2 rounded-full opacity-20 blur-2xl"
                  style={{
                    background:
                      "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
                  }}
                />
                <p className="font-display text-3xl font-bold">
                  Solid <span className="text-stroke">outline</span>
                </p>
                <p className="text-accent">✦ ✦ ✦</p>
                <p className="text-xs uppercase tracking-[0.25em] text-muted">
                  Live specimen
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 05 — Voice */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionTitle index="05" title="Voice & tone" />
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {voice.map((item, i) => (
            <Reveal key={item.trait} delay={i * 0.08} className="h-full">
              <div className="flex h-full flex-col gap-4 bg-background p-10">
                <span className="text-accent" aria-hidden>✦</span>
                <h3 className="font-display text-xl font-semibold">{item.trait}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <blockquote className="mt-12 border-l-2 border-accent pl-6 font-display text-2xl font-medium italic leading-snug md:text-3xl">
            Tagline: &ldquo;Digital products that think.&rdquo;
          </blockquote>
        </Reveal>
      </section>
    </main>
  );
}
