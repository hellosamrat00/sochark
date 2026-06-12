# SOCHARK. — Brand Book v1.0

> Sochark Technologies · Software, AI & Cloud Studio
> Also available as an interactive page at `/brand` on the website.

---

## 1. The idea

**Sochark** fuses **soch (सोच)** — *thought* in Nepali — with **spark**: the
instant an idea catches. The brand is built on one promise: software that was
*thought through* — before, during, and long after the code.

**Tagline:** Digital products that think.

---

## 2. Logo

The wordmark is **SOCHARK.** set in **Space Grotesk Bold**, tight tracking,
always ending with a period — *the spark*, the moment a thought lands.

| Context | Treatment |
| --- | --- |
| On Ink (dark) | Wordmark in Bone, period in Volt |
| On Bone / Volt (light) | Entire wordmark in Ink |

**Rules**

- Clearspace on all sides = height of the "S"
- Minimum size: 24 px tall on screen, 8 mm in print
- Never recolor outside the palette, never add gradients/shadows/outlines,
  never stretch or rotate
- On photography, place over a dark scrim

---

## 3. Color palette

| Name | Hex | RGB | Role |
| --- | --- | --- | --- |
| **Ink** | `#0A0A0A` | 10, 10, 10 | Primary surface. Every Sochark experience starts on Ink. |
| **Bone** | `#F2F0EA` | 242, 240, 234 | Primary type color and inverse surface. Warm, never pure white. |
| **Volt** | `#D6FF3F` | 214, 255, 63 | The spark. Accents, CTAs, highlights. Never body text. |
| **Graphite** | `#8A8A85` | 138, 138, 133 | Secondary text, captions, metadata. |
| Line | `rgba(242,240,234,0.12)` | — | Hairline dividers and borders. |

**Ratio guide:** ~70% Ink · 20% Bone · 7% Graphite · 3% Volt.
Volt is an exclamation point, not a paragraph — one Volt moment per viewport.

---

## 4. Typography

| Use | Typeface | Weights | Notes |
| --- | --- | --- | --- |
| Display & headings | **Space Grotesk** | 500 / 600 / 700 | Tight tracking, leading 0.95–1.1 |
| Body & UI | **Inter** | 400 / 500 / 600 | Leading 1.6–1.8 for paragraphs |

Both are free Google Fonts — no licensing cost, identical on web and print.

**Type scale**

| Level | Spec |
| --- | --- |
| Display / Hero | Space Grotesk Bold · clamp(3rem → 9.5rem) · leading 0.95 |
| Heading 1 | Space Grotesk Bold · clamp(2.2rem → 4.5rem) · leading 1.1 |
| Heading 2 | Space Grotesk SemiBold · clamp(1.6rem → 3.2rem) |
| Body Large | Inter Regular · 1.125rem · leading 1.7 |
| Body | Inter Regular · 0.875–1rem · leading 1.6 |
| Label / Eyebrow | Inter Medium · 0.875rem · UPPERCASE · tracking 0.25em |

---

## 5. Graphic language

- **The Spark ✦** — four-point star used as separator and bullet. Represents
  the idea/thought. Always Volt or Bone.
- **Hairline grid** — 1px lines at 12% Bone opacity. Borders, not boxes.
- **Outline type** — display words as 1px stroked outlines, paired against
  solid type ("the second thought in a pair").
- **Film grain** — 5% noise texture over every surface.
- **Volt glow** — soft radial Volt gradient at 15–20% opacity. Hero and CTA
  only; never more than one per viewport.

---

## 6. Voice & tone

| Trait | In practice |
| --- | --- |
| Confident, not arrogant | State capabilities plainly. Ban "revolutionary", "cutting-edge". |
| Plain-spoken | Short sentences. Concrete nouns. A CFO should understand it. |
| Quietly witty | Light humor welcome; never sarcasm at the client's expense. |
| Transparent | Name real tools, real timelines, real trade-offs. "No black boxes." |

---

## 7. Motion principles

- Entrances: ease `cubic-bezier(0.21, 0.47, 0.32, 0.98)`, 0.6–0.9 s, slight
  upward travel (24–40 px)
- Text reveals: lines slide up from an overflow-hidden mask, staggered ~0.1 s
- Hover: small (scale ≤ 1.05), fast (≤ 0.3 s), color shifts to Volt
- Scrolling: smooth (Lenis, lerp 0.1); marquees drift slowly and infinitely
- Always respect `prefers-reduced-motion`

---

## 8. Implementation tokens (CSS)

```css
:root {
  --background: #0a0a0a;  /* Ink */
  --foreground: #f2f0ea;  /* Bone */
  --accent:     #d6ff3f;  /* Volt */
  --muted:      #8a8a85;  /* Graphite */
  --line: rgba(242, 240, 234, 0.12);
}
```

Fonts loaded via `next/font/google`: `Space_Grotesk` → `--font-grotesk`,
`Inter` → `--font-inter`.
