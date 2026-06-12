import Link from "next/link";

const columns = [
  {
    title: "Studio",
    links: [
      { label: "Services", href: "/services" },
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Brand",
    links: [
      { label: "Brand book", href: "/brand" },
      { label: "Start a project", href: "/contact" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <Link href="/" className="font-display text-3xl font-bold tracking-tight">
            SOCHARK<span className="text-accent">.</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            Sochark Technologies — a software, AI &amp; cloud studio building
            products that think. <span className="text-accent">✦</span>
          </p>
          <a
            href="mailto:hello@sochark.com"
            className="mt-6 inline-block text-sm text-foreground underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
          >
            hello@sochark.com
          </a>
        </div>

        {columns.map((col) => (
          <nav key={col.title}>
            <h3 className="mb-4 text-xs uppercase tracking-[0.25em] text-muted">
              {col.title}
            </h3>
            <ul className="flex flex-col gap-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/80 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} Sochark Technologies. All rights reserved.</span>
          <span>Designed &amp; engineered in-house.</span>
        </div>
      </div>
    </footer>
  );
}
