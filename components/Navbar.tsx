"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // close menu on navigation and lock body scroll while open
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="relative z-[60] border-b border-line bg-background/70 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="font-display text-xl font-bold tracking-tight">
            SOCHARK<span className="text-accent">.</span>
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <li key={link.href} className="relative">
                <Link
                  href={link.href}
                  className={`text-sm transition-colors hover:text-foreground ${
                    isActive(link.href) ? "text-foreground" : "text-muted"
                  }`}
                >
                  {link.label}
                </Link>
                {isActive(link.href) && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-[21px] left-0 right-0 h-px bg-accent"
                  />
                )}
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="hidden rounded-full bg-accent px-5 py-2 text-sm font-semibold text-background transition-transform hover:scale-105 md:block"
          >
            Start a project
          </Link>

          {/* mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span
              className={`block h-px w-6 bg-foreground transition-transform duration-300 ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-foreground transition-transform duration-300 ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </div>

      {/* full-screen mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease }}
            className="fixed inset-0 z-[55] flex h-dvh flex-col bg-background md:hidden"
          >
            {/* glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 right-[-20%] h-80 w-80 rounded-full opacity-15 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
              }}
            />

            <nav className="flex flex-1 flex-col justify-center px-6 pt-16">
              <ul className="flex flex-col gap-2">
                {links.map((link, i) => (
                  <li key={link.href} className="overflow-hidden">
                    <motion.div
                      initial={{ y: "110%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "110%" }}
                      transition={{ duration: 0.7, delay: 0.15 + i * 0.08, ease }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`flex items-baseline gap-4 font-display text-5xl font-bold tracking-tight transition-colors ${
                          isActive(link.href)
                            ? "text-accent"
                            : "text-foreground active:text-accent"
                        }`}
                      >
                        <span className="font-display text-sm text-muted">
                          0{i + 1}
                        </span>
                        {link.label}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease }}
              className="border-t border-line px-6 py-8"
            >
              <p className="max-w-xs text-sm leading-relaxed text-muted">
                Sochark Technologies, a software, AI &amp; cloud studio
                building products that think. <span className="text-accent">✦</span>
              </p>
              <a
                href="mailto:hello@sochark.com"
                className="mt-4 inline-block font-display text-lg font-medium text-foreground underline decoration-line underline-offset-4"
              >
                hello@sochark.com
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
