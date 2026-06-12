import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { posts, getPost } from "@/lib/posts";
import { formatDate } from "@/lib/format";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const index = posts.findIndex((p) => p.slug === slug);
  const next = posts[(index + 1) % posts.length];

  return (
    <main>
      <article className="relative overflow-hidden px-6 pb-24 pt-40">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 right-[-15%] h-[28rem] w-[28rem] rounded-full opacity-10 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="group mb-10 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            All articles
          </Link>

          <div className="mb-8 flex flex-wrap items-center gap-4 text-xs text-muted">
            <span className="rounded-full border border-line px-3 py-1 text-accent">
              {post.tag}
            </span>
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="font-display text-[clamp(2rem,5.5vw,3.8rem)] font-bold leading-[1.05] tracking-tight">
            {post.title}
          </h1>

          <div className="mt-12 flex flex-col gap-7">
            {post.content.map((block, i) => {
              switch (block.type) {
                case "h2":
                  return (
                    <h2
                      key={i}
                      className="mt-6 font-display text-2xl font-semibold tracking-tight"
                    >
                      {block.text}
                    </h2>
                  );
                case "ul":
                  return (
                    <ul key={i} className="flex flex-col gap-3">
                      {block.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 leading-relaxed text-foreground/80"
                        >
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                case "quote":
                  return (
                    <blockquote
                      key={i}
                      className="border-l-2 border-accent pl-6 font-display text-2xl font-medium italic leading-snug"
                    >
                      {block.text}
                    </blockquote>
                  );
                default:
                  return (
                    <p key={i} className="leading-[1.8] text-foreground/80">
                      {block.text}
                    </p>
                  );
              }
            })}
          </div>
        </div>
      </article>

      {/* next article */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <Reveal>
            <Link href={`/blog/${next.slug}`} className="group block">
              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-muted">
                Read next
              </p>
              <span className="flex items-center justify-between gap-6">
                <span className="font-display text-[clamp(1.5rem,4vw,2.8rem)] font-bold leading-tight tracking-tight transition-colors duration-300 group-hover:text-accent">
                  {next.title}
                </span>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-background">
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
                </span>
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      <CTA />
    </main>
  );
}
