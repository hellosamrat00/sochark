import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { posts } from "@/lib/posts";
import Reveal from "./Reveal";
import { formatDate } from "@/lib/format";

export default function BlogPreview() {
  const latest = posts.slice(0, 3);

  return (
    <section className="border-t border-line bg-foreground/[0.02]">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <Reveal>
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-muted">
                From the blog
              </p>
              <h2 className="font-display text-[clamp(2.2rem,6vw,4.5rem)] font-bold leading-tight tracking-tight">
                Thinking, <span className="text-stroke">out loud.</span>
              </h2>
            </div>
            <Link
              href="/blog"
              className="group flex items-center gap-2 font-display text-lg font-medium text-foreground transition-colors hover:text-accent"
            >
              All articles
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-3">
          {latest.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08} className="h-full">
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col justify-between gap-16 bg-background p-8 transition-colors duration-300 hover:bg-foreground/[0.04]"
              >
                <div className="flex items-center justify-between text-xs text-muted">
                  <span className="rounded-full border border-line px-3 py-1 transition-colors group-hover:border-accent group-hover:text-accent">
                    {post.tag}
                  </span>
                  <span>{formatDate(post.date)}</span>
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
      </div>
    </section>
  );
}
