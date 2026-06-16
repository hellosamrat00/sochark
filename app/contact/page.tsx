import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us what you're building. We reply within one business day with honest next steps. No sales script.",
};

const details = [
  {
    label: "Email",
    value: "hello@sochark.com",
    href: "mailto:hello@sochark.com",
  },
  {
    label: "Response time",
    value: "Within one business day",
  },
  {
    label: "Engagements",
    value: "Projects · Dedicated teams · Training",
  },
];

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Contact"
        title="Tell us what"
        titleOutline="you're building."
        description="One short form. A real reply from an engineer, not a sales sequence."
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr]">
          <Reveal>
            <div className="flex flex-col gap-10">
              {details.map((item) => (
                <div key={item.label} className="border-l border-line pl-6">
                  <p className="mb-2 text-xs uppercase tracking-[0.25em] text-muted">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-display text-lg font-medium transition-colors hover:text-accent"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-display text-lg font-medium">
                      {item.value}
                    </p>
                  )}
                </div>
              ))}
              <p className="max-w-xs text-sm leading-relaxed text-muted">
                Not sure what you need yet? That&apos;s fine. Describe the
                problem in plain words and we&apos;ll map the options with you.
                <span className="text-accent"> ✦</span>
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
