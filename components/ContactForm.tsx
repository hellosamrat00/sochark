"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Loader2 } from "lucide-react";

const interests = [
  "Development",
  "AI & Automation",
  "Design",
  "Cloud & DevOps",
  "Digital Marketing",
  "Not sure yet",
];

const inputClass =
  "w-full rounded-xl border border-line bg-foreground/[0.03] px-5 py-4 text-sm text-foreground placeholder:text-muted outline-none transition-colors focus:border-accent disabled:opacity-50";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [interest, setInterest] = useState<string>("Not sure yet");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const data = new FormData(e.currentTarget);
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      interest,
      message: String(data.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Could not send your message.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Could not send your message.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-5 rounded-2xl border border-line p-12 text-center md:p-16">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-background">
          <Check className="h-8 w-8" />
        </span>
        <h3 className="font-display text-3xl font-bold tracking-tight">
          Message sent<span className="text-accent">.</span>
        </h3>
        <p className="max-w-sm text-muted">
          Thanks for reaching out. We&apos;ve got it and will reply within one
          business day. <span className="text-accent">✦</span>
        </p>
      </div>
    );
  }

  const sending = status === "sending";

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
          <input id="name" name="name" required disabled={sending} placeholder="Your name" className={inputClass} />
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
            disabled={sending}
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
              disabled={sending}
              onClick={() => setInterest(item)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors disabled:opacity-50 ${
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
          disabled={sending}
          rows={6}
          placeholder="What are you building? What problem should it solve? Rough timeline or budget if you have one."
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "error" && (
        <p className="rounded-xl border border-red-500/40 bg-red-500/5 px-5 py-3 text-sm text-red-400">
          {error} You can also email us at{" "}
          <a href="mailto:hello@sochark.com" className="underline">
            hello@sochark.com
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="group inline-flex items-center justify-center gap-3 rounded-full bg-accent px-8 py-4 font-display text-base font-semibold text-background transition-transform hover:scale-[1.02] active:scale-[0.99] disabled:opacity-70 disabled:hover:scale-100"
      >
        {sending ? (
          <>
            Sending
            <Loader2 className="h-5 w-5 animate-spin" />
          </>
        ) : (
          <>
            Send message
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
          </>
        )}
      </button>
      <p className="text-center text-xs text-muted">
        We&apos;ll reply within one business day. Nothing is shared with third
        parties.
      </p>
    </form>
  );
}
