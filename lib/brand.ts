export const brandColors = [
  {
    name: "Ink",
    hex: "#0A0A0A",
    rgb: "10, 10, 10",
    role: "Primary surface. Every Sochark experience starts on Ink.",
    text: "#F2F0EA",
  },
  {
    name: "Bone",
    hex: "#F2F0EA",
    rgb: "242, 240, 234",
    role: "Primary type color and inverse surface. Warm, never pure white.",
    text: "#0A0A0A",
  },
  {
    name: "Volt",
    hex: "#D6FF3F",
    rgb: "214, 255, 63",
    role: "The spark. Accents, CTAs, highlights — used sparingly, never for body text.",
    text: "#0A0A0A",
  },
  {
    name: "Graphite",
    hex: "#8A8A85",
    rgb: "138, 138, 133",
    role: "Secondary text, captions, and metadata.",
    text: "#F2F0EA",
  },
];

export const typeScale = [
  { label: "Display / Hero", spec: "Space Grotesk Bold · clamp(3rem → 9.5rem) · leading 0.95", sample: "Think." },
  { label: "Heading 1", spec: "Space Grotesk Bold · clamp(2.2rem → 4.5rem) · leading 1.1", sample: "Products that think" },
  { label: "Heading 2", spec: "Space Grotesk SemiBold · clamp(1.6rem → 3.2rem)", sample: "Full-stack capability" },
  { label: "Body Large", spec: "Inter Regular · 1.125rem · leading 1.7", sample: "We turn ambitious ideas into software that ships, scales, and earns." },
  { label: "Body", spec: "Inter Regular · 0.875–1rem · leading 1.6", sample: "Agile sprints, weekly demos, clean code." },
  { label: "Label / Eyebrow", spec: "Inter Medium · 0.875rem · uppercase · tracking 0.25em", sample: "WHAT WE DO" },
];

export const logoRules = {
  dos: [
    "Use the wordmark in Bone on Ink, or Ink on Bone / Volt",
    "Always end the wordmark with the Volt period — it is the spark",
    "Keep clearspace equal to the height of the 'S' on all sides",
    "Minimum size: 24px tall on screen, 8mm in print",
  ],
  donts: [
    "Don't recolor the wordmark outside the palette",
    "Don't apply gradients, shadows, or outlines to the logo",
    "Don't stretch, condense, or rotate the wordmark",
    "Don't set the wordmark on busy photography without a scrim",
  ],
};

export const voice = [
  {
    trait: "Confident, not arrogant",
    detail: "We state what we can do plainly. No hedging, no hype words like 'revolutionary' or 'cutting-edge'.",
  },
  {
    trait: "Plain-spoken",
    detail: "Short sentences. Concrete nouns. If a client's CFO can't understand it, rewrite it.",
  },
  {
    trait: "Quietly witty",
    detail: "A light touch of humor is welcome — 'we stay after the launch confetti settles' — never sarcasm at the client's expense.",
  },
  {
    trait: "Transparent",
    detail: "'No black boxes' applies to our writing too. Name real tools, real timelines, real trade-offs.",
  },
];

export const graphicLanguage = [
  {
    name: "The Spark ✦",
    detail: "A four-point star used as a separator and bullet. It represents the idea — 'soch' means thought. Always Volt or Bone.",
  },
  {
    name: "Hairline grid",
    detail: "1px lines at 12% Bone opacity divide content. Borders, not boxes — the layout breathes through hairlines.",
  },
  {
    name: "Outline type",
    detail: "Display words rendered as 1px stroked outlines create rhythm against solid type. Use for the second thought in a pair.",
  },
  {
    name: "Film grain",
    detail: "A 5% noise texture overlays every surface, keeping large dark areas alive and tactile.",
  },
  {
    name: "Volt glow",
    detail: "Soft radial Volt gradients at 15–20% opacity light key moments — hero and CTA only, never more than one per viewport.",
  },
];
