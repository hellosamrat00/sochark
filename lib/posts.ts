export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  readTime: string;
  content: PostBlock[];
};

export const posts: Post[] = [
  {
    slug: "ai-agents-for-business",
    title: "AI agents are the new hires your business didn't know it needed",
    excerpt:
      "Chatbots answer questions. Agents finish work. Here's how autonomous systems are quietly replacing entire workflows, and where to start.",
    date: "2026-05-28",
    tag: "AI & Automation",
    readTime: "6 min read",
    content: [
      {
        type: "p",
        text: "Most businesses think of AI as a smarter search box: ask a question, get an answer. That framing misses the bigger shift. The systems we deploy for clients today don't just answer. They act. They read the invoice, match it to the purchase order, flag the discrepancy, and draft the email to the vendor. The human approves instead of executes.",
      },
      { type: "h2", text: "Chatbots answer. Agents finish." },
      {
        type: "p",
        text: "An AI agent is a system that can plan a multi-step task, use tools (your CRM, your inbox, your database) and keep working until the job is done or a human needs to decide. The difference sounds subtle. In practice it's the difference between a FAQ widget and a junior employee who never sleeps.",
      },
      {
        type: "ul",
        items: [
          "Lead qualification: an agent enriches every inbound lead, scores it, and books the call",
          "Order operations: agents reconcile orders, inventory, and shipping updates across systems",
          "Reporting: agents pull from five dashboards and write the Monday summary your team actually reads",
          "Support triage: agents resolve the repetitive 60% and route the hard 40% with full context",
        ],
      },
      { type: "h2", text: "Where to start (and where not to)" },
      {
        type: "p",
        text: "Start with a process that is high-volume, rule-heavy, and annoying, not with your most sensitive customer touchpoint. The best first agent is one whose mistakes are cheap and visible. Once trust is established, expand its autonomy gradually.",
      },
      {
        type: "quote",
        text: "The goal isn't replacing people. It's deleting the part of their job they'd pay to get rid of.",
      },
      {
        type: "p",
        text: "We build agents on top of your existing stack, no rip-and-replace. If you're curious what's automatable in your business, send us one workflow that annoys you. We'll tell you honestly whether an agent fits.",
      },
    ],
  },
  {
    slug: "saas-mvp-in-six-weeks",
    title: "How we ship a SaaS MVP in six weeks without cutting corners",
    excerpt:
      "Speed doesn't come from working nights. It comes from deciding what not to build. Our exact playbook for getting a sellable product live fast.",
    date: "2026-05-12",
    tag: "Development",
    readTime: "8 min read",
    content: [
      {
        type: "p",
        text: "Every founder we meet wants the same two things: launch fast, and don't build junk we'll have to throw away. These goals aren't in conflict, but only if you're ruthless about scope in week one.",
      },
      { type: "h2", text: "Week 0: kill features before they're born" },
      {
        type: "p",
        text: "Our discovery sprint produces one artifact that matters: a one-page spec where every feature is labeled 'launch', 'later', or 'never'. The MVP that ships in six weeks is the one where 'launch' fits on half a page. Auth, billing, and one core loop done extremely well beats nine half-features every time.",
      },
      { type: "h2", text: "Weeks 1–2: walking skeleton" },
      {
        type: "p",
        text: "We stand up the entire pipeline first (repo, CI/CD, staging, production, auth, payments in test mode) before building features. From day ten onward, every merge is deployable. There is no 'integration phase' at the end, because integration happens every day.",
      },
      { type: "h2", text: "Weeks 3–5: the core loop, demoed weekly" },
      {
        type: "p",
        text: "You see the product every Friday. Not screenshots. A URL. Weekly demos surface wrong assumptions while they're still cheap to fix. Most of our best product decisions came from a client saying 'huh, that's not what I imagined' in week three instead of month three.",
      },
      { type: "h2", text: "Week 6: launch is a checklist, not a ceremony" },
      {
        type: "ul",
        items: [
          "Error monitoring and alerting wired to a channel someone actually reads",
          "Analytics on the three actions that define activation",
          "Backups tested by restoring, not by hoping",
          "A rollback path that takes minutes, not meetings",
        ],
      },
      {
        type: "p",
        text: "Six weeks later you have less software than you imagined and more product than you expected. That's the point.",
      },
    ],
  },
  {
    slug: "automation-zapier-vs-custom",
    title: "Zapier, Make, n8n, or custom code? An honest decision guide",
    excerpt:
      "No-code automation is brilliant until it isn't. When to glue, when to build, and the hybrid approach we recommend to most clients.",
    date: "2026-04-22",
    tag: "AI & Automation",
    readTime: "5 min read",
    content: [
      {
        type: "p",
        text: "We sell custom software, so you'd expect us to tell you no-code tools are toys. They're not. For a huge class of business automation, Zapier, Make, or n8n is the correct answer, and recommending anything else would be billing you for our ego.",
      },
      { type: "h2", text: "When no-code wins" },
      {
        type: "ul",
        items: [
          "Connecting two SaaS tools that both have official integrations",
          "Volumes under a few thousand runs a month",
          "Workflows your ops team should be able to read and tweak",
          "Anything you might delete in three months: prototypes, experiments",
        ],
      },
      { type: "h2", text: "When custom code wins" },
      {
        type: "ul",
        items: [
          "High volume: per-task pricing gets ugly past tens of thousands of runs",
          "Complex branching, retries, or error handling beyond simple paths",
          "Sensitive data with compliance requirements you must control",
          "Logic that is your competitive advantage, not plumbing",
        ],
      },
      { type: "h2", text: "The hybrid most clients actually need" },
      {
        type: "p",
        text: "Our default recommendation: n8n self-hosted for the glue, plus small custom services for the steps that are genuinely yours. You get visual workflows your team can maintain, no per-run pricing surprises, and proper engineering exactly where it pays for itself.",
      },
      {
        type: "quote",
        text: "Buy the plumbing. Build the moat.",
      },
    ],
  },
  {
    slug: "cloud-bills-out-of-control",
    title: "Your cloud bill is a design flaw, not a cost of doing business",
    excerpt:
      "Most teams overpay for cloud by 40–60%, not because cloud is expensive, but because nobody owns the bill. Five fixes ranked by effort.",
    date: "2026-04-03",
    tag: "Cloud & DevOps",
    readTime: "7 min read",
    content: [
      {
        type: "p",
        text: "When we audit a client's AWS or Azure account, we almost always find the same thing: the bill grew 5% a month for two years and nobody noticed, because it was nobody's job to notice. Cloud waste isn't a billing problem. It's an ownership problem.",
      },
      { type: "h2", text: "Five fixes, ranked by effort" },
      {
        type: "ul",
        items: [
          "Delete the zombies (1 day): unattached volumes, idle load balancers, forgotten staging environments running 24/7",
          "Right-size compute (1 week): most instances run under 20% utilization, so drop a size or two and nothing changes but the invoice",
          "Schedule non-production (1 week): dev and staging don't need to run nights and weekends, which is 65% of the hours in a week",
          "Reserved capacity (2 weeks of analysis): commit to your stable baseline for 30–60% savings on it",
          "Re-architect the hot path (1–2 months): the one service generating half your bill usually has a cheaper shape: queues, caching, or serverless",
        ],
      },
      { type: "h2", text: "Make it stay fixed" },
      {
        type: "p",
        text: "One-off cleanups decay. The durable fix is a monthly cost review with a named owner, budget alerts that page someone, and cost as a line item in every architecture decision. We set this up as part of every DevOps engagement. Boring, and worth more than most features.",
      },
    ],
  },
  {
    slug: "growth-is-an-engineering-problem",
    title: "Growth is an engineering problem (your marketing team agrees)",
    excerpt:
      "The best-performing marketing we've seen isn't louder ads. It's faster pages, cleaner funnels, and analytics someone actually trusts. A builder's guide to growth.",
    date: "2026-03-15",
    tag: "Marketing",
    readTime: "6 min read",
    content: [
      {
        type: "p",
        text: "Most companies treat marketing and engineering as different planets. The ad team buys traffic; the dev team ships features; nobody owns the messy middle where money is actually won or lost. That middle (page speed, funnels, tracking, SEO infrastructure) is engineering. And it's usually the highest-ROI work available.",
      },
      { type: "h2", text: "Speed is a ranking factor and a conversion factor" },
      {
        type: "p",
        text: "Every second of load time costs conversions, on mobile dramatically so. Before spending another dollar on ads, make the landing page load in under two seconds on a mid-range phone. It's the cheapest CPA improvement you will ever buy.",
      },
      { type: "h2", text: "Technical SEO compounds. Ads don't." },
      {
        type: "ul",
        items: [
          "Clean semantic markup and metadata on every page, generated, not hand-maintained",
          "Core Web Vitals in the green, monitored like uptime",
          "A content structure search engines (and now LLMs) can actually parse",
          "Structured data so your pages show up as rich results, not blue links",
        ],
      },
      { type: "h2", text: "Trustworthy analytics beat more dashboards" },
      {
        type: "p",
        text: "Half the marketing decisions we see are made on broken data: double-counted conversions, untagged campaigns, bot traffic. One clean events pipeline with three numbers everyone trusts beats five dashboards nobody believes.",
      },
      {
        type: "quote",
        text: "Loud marketing gets attention. Engineered marketing gets customers.",
      },
      {
        type: "p",
        text: "This is why our marketing vertical sits inside an engineering studio: the campaign, the landing page, the funnel, and the analytics get built by the same accountable team.",
      },
    ],
  },
  {
    slug: "design-systems-that-survive",
    title: "Design systems that survive contact with real developers",
    excerpt:
      "Most design systems die in a Figma file. The ones that live are built like products: versioned, documented, and owned. Here's the difference.",
    date: "2026-02-26",
    tag: "Design",
    readTime: "5 min read",
    content: [
      {
        type: "p",
        text: "Every company above twenty people eventually says 'we need a design system'. Six months later they have 400 Figma components, three of which made it into code. The gap isn't talent. It's treating the system as an art project instead of a product.",
      },
      { type: "h2", text: "Tokens first, components second" },
      {
        type: "p",
        text: "Color, type, spacing, radius: named tokens that exist in both Figma and code, generated from one source. When the brand shifts, you change one file. If your 'system' starts with a button library instead of tokens, it's a sticker pack.",
      },
      { type: "h2", text: "Every component earns its place" },
      {
        type: "p",
        text: "A component enters the system when it appears in three places, not when someone imagines it might. Speculative components rot. Real ones get maintained because real screens break when they don't.",
      },
      { type: "h2", text: "Documentation people actually read" },
      {
        type: "ul",
        items: [
          "Live, rendered examples, not screenshots of Figma",
          "Do/don't pairs for each component, two lines each",
          "Copy-paste code for the 90% use case at the top",
          "A changelog, because a system that never changes is dead",
        ],
      },
      {
        type: "p",
        text: "We build design systems alongside the first product that uses them, never in a vacuum. The product keeps the system honest; the system keeps the product consistent.",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
