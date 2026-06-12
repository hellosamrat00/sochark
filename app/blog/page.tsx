import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { posts } from "@/lib/posts";
import { formatDate } from "@/lib/format";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes on software, AI, automation, cloud, and running a studio — written by the team at Sochark Technologies.",
};

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <main>
      <PageHeader
        eyebrow="Blog"
        title="Thinking,"
        titleOutline="out loud."
        description="Notes from the studio on software, AI, automation, and the unglamorous details that make projects succeed."
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        {/* featured post */}
        <Reveal>
          <Link
            href={`/blog/${featured.slug}`}
            className="group relative mb-px block overflow-hidden rounded-2xl border border-line p-10 transition-colors duration-300 hover:bg-foreground/[0.04] md:p-16"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-10 blur-3xl transition-opacity duration-500 group-hover:opacity-25"
              style={{
                background:
                  "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
              }}
            />
            <div className="relative">
              <div className="mb-8 flex flex-wrap items-center gap-4 text-xs text-muted">
                <span className="rounded-full bg-accent px-3 py-1 font-semibold text-background">
                  Featured
                </span>
                <span className="rounded-full border border-line px-3 py-1">
                  {featured.tag}
                </span>
                <span>{formatDate(featured.date)}</span>
                <span>·</span>
                <span>{featured.readTime}</span>
              </div>
              <h2 className="max-w-3xl font-display text-[clamp(1.8rem,4.5vw,3.2rem)] font-bold leading-tight tracking-tight transition-colors duration-300 group-hover:text-accent">
                {featured.title}
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
                {featured.excerpt}
              </p>
              <span className="mt-8 inline-flex items-center gap-2 font-display font-medium">
                Read article
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </div>
          </Link>
        </Reveal>

        {/* the rest */}
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.06} className="h-full">
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col justify-between gap-16 bg-background p-8 transition-colors duration-300 hover:bg-foreground/[0.04]"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
                  <span className="rounded-full border border-line px-3 py-1 transition-colors group-hover:border-accent group-hover:text-accent">
                    {post.tag}
                  </span>
                  <span>{formatDate(post.date)}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <div>
                  <h3 className="mb-3 font-display text-xl font-semibold leading-snug transition-colors duration-300 group-hover:text-accent">
                    {post.title}
                  </h3>
                  <p className="line-clamp-3 text-sm leading-relaxed text-muted">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </main>
  );
}
