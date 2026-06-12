"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function ColorSwatch({
  name,
  hex,
  rgb,
  role,
  text,
}: {
  name: string;
  hex: string;
  rgb: string;
  role: string;
  text: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard unavailable — ignore
    }
  };

  return (
    <button
      onClick={copy}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line text-left transition-transform hover:scale-[1.01]"
      title={`Copy ${hex}`}
    >
      <div
        className="flex h-44 items-end justify-between p-5"
        style={{ backgroundColor: hex, color: text }}
      >
        <span className="font-display text-2xl font-bold">{name}</span>
        <span className="flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium opacity-0 transition-opacity group-hover:opacity-100"
          style={{ backgroundColor: text, color: hex }}
        >
          {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
          {copied ? "Copied" : "Copy hex"}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 bg-background p-5">
        <div className="flex gap-4 font-mono text-xs text-foreground/80">
          <span>{hex}</span>
          <span className="text-muted">rgb({rgb})</span>
        </div>
        <p className="text-sm leading-relaxed text-muted">{role}</p>
      </div>
    </button>
  );
}
