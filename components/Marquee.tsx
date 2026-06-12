import { marqueeItems } from "@/lib/data";

export default function Marquee({ reverse = false }: { reverse?: boolean }) {
  const row = [...marqueeItems, ...marqueeItems];

  return (
    <div className="overflow-hidden border-y border-line py-5">
      <div
        className={`flex w-max items-center gap-10 whitespace-nowrap ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-display text-2xl font-medium uppercase tracking-wide"
          >
            <span className={i % 2 === 0 ? "text-foreground" : "text-stroke"}>
              {item}
            </span>
            <span className="text-accent" aria-hidden>
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
