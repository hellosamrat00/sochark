"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const interests = [
  "Development",
  "AI & Automation",
  "Design",
  "Cloud & DevOps",
  "Digital Marketing",
  "Not sure yet",
];

const inputClass =
  "w-full rounded-xl border border-line bg-foreground/[0.03] px-5 py-4 text-sm text-foreground placeholder:text-muted outline-none transition-colors focus:border-accent";

export default function ContactForm() {
  const [interest, setInterest] = useState<string>("Not sure yet");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(`Project inquiry — ${interest} (${name})`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nInterested in: ${interest}\n\n${message}`
    );
    window.location.href = `mailto:hello@sochark.com?subject=${subject}&body=${body}`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 rounded-2xl border border-line p-8 md:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-[0.25em] text-muted">
            Name
          </label>
          <input id="name" name="name" required placeholder="Your name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-[0.25em] text-muted">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-muted">
          I&apos;m interested in
        </p>
        <div className="flex flex-wrap gap-2">
          {interests.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setInterest(item)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                interest === item
                  ? "border-accent bg-accent font-semibold text-background"
                  : "border-line text-muted hover:border-accent hover:text-foreground"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-[0.25em] text-muted">
          About the project
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="What are you building? What problem should it solve? Rough timeline or budget if you have one."
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="group inline-flex items-center justify-center gap-3 rounded-full bg-accent px-8 py-4 font-display text-base font-semibold text-background transition-transform hover:scale-[1.02] active:scale-[0.99]"
      >
        Send message
        <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
      </button>
      <p className="text-center text-xs text-muted">
        Opens your email client — nothing is stored on this site.
      </p>
    </form>
  );
}
