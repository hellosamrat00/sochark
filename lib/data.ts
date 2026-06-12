export type Service = {
  id: string;
  index: string;
  title: string;
  tagline: string;
  items: string[];
};

export const services: Service[] = [
  {
    id: "development",
    index: "01",
    title: "Development",
    tagline: "Web, mobile & custom software engineered to scale.",
    items: [
      "Web development — business websites, SaaS, dashboards",
      "Mobile app development — Android, iOS, cross-platform",
      "Custom software — ERP, CRM, internal systems",
      "API development & third-party integrations",
    ],
  },
  {
    id: "ai-automation",
    index: "02",
    title: "AI & Automation",
    tagline: "Systems that think, decide, and work while you sleep.",
    items: [
      "AI chatbot development",
      "GPT / LLM integration",
      "Business workflow automation",
      "AI agents & autonomous systems",
      "Data scraping & automation tools",
      "No-code / low-code automation — Zapier, Make, n8n",
    ],
  },
  {
    id: "design",
    index: "03",
    title: "Design",
    tagline: "Interfaces people remember. Brands people trust.",
    items: [
      "UI/UX design — web & mobile apps",
      "Wireframing & prototyping",
      "Product design systems",
      "Branding & visual identity",
    ],
  },
  {
    id: "cloud-devops",
    index: "04",
    title: "Cloud & DevOps",
    tagline: "Infrastructure that never becomes the bottleneck.",
    items: [
      "Cloud setup & deployment — AWS, Azure, GCP",
      "CI/CD pipelines",
      "Server & database management",
      "Performance optimization & scaling",
    ],
  },
  {
    id: "marketing",
    index: "05",
    title: "Digital Marketing & Growth",
    tagline: "Products are built. Growth is engineered.",
    items: [
      "SEO & technical SEO audits",
      "Performance marketing — Google & Meta ads",
      "Content & social media marketing",
      "Email marketing & funnel automation",
      "Analytics & conversion rate optimization",
      "Go-to-market & growth strategy",
    ],
  },
  {
    id: "support",
    index: "06",
    title: "Maintenance & Support",
    tagline: "We stay after the launch confetti settles.",
    items: [
      "Website & app maintenance",
      "Bug fixing & updates",
      "Security & monitoring",
      "Long-term technical support",
    ],
  },
];

export const marqueeItems = [
  "Web Development",
  "AI Agents",
  "Mobile Apps",
  "UI/UX Design",
  "Cloud & DevOps",
  "LLM Integration",
  "SaaS Platforms",
  "Automation",
  "SEO & Growth",
  "Performance Marketing",
];

export const manifesto =
  "Sochark begins with soch — thought. Every pixel, every endpoint, every campaign: thought through before it ships. We are the studio ambitious teams call when good enough isn't.";

export const trustPoints = [
  {
    index: "01",
    title: "Your IP, fully yours",
    body: "Code lives in your repos, infrastructure in your cloud accounts, and the contract says so — from day one, not at final payment.",
  },
  {
    index: "02",
    title: "NDA before hello",
    body: "We sign first, talk second. Your idea, your data, and your roadmap stay yours.",
  },
  {
    index: "03",
    title: "Weekly working demos",
    body: "Not status decks. A URL you can click, every Friday, from the first week of the engagement.",
  },
  {
    index: "04",
    title: "Fixed quotes, no meter",
    body: "Scoped milestones with prices attached before we start. Surprises belong in products, not invoices.",
  },
  {
    index: "05",
    title: "30-day handover guarantee",
    body: "Documentation and walkthroughs good enough that you could take everything in-house within a month — most clients never want to.",
  },
  {
    index: "06",
    title: "Support that answers",
    body: "Under-24-hour response, monitored uptime, and a human engineer on the other end — long after launch.",
  },
];

export const stats = [
  { value: 6, suffix: "", label: "Service verticals" },
  { value: 50, suffix: "+", label: "Technologies mastered" },
  { value: 24, suffix: "/7", label: "Support coverage" },
  { value: 100, suffix: "%", label: "In-house team" },
];

export const testimonials = [
  {
    company: "Homii App",
    country: "United Kingdom",
    type: "Mobile App",
    body: "Sochark built Homii exactly the way we imagined it — a mobile app that helps students settle smoothly in the US with the right support, resources, and guidance. Weekly demos, clear communication, zero surprises.",
    name: "Luke Domingo",
    role: "Owner, Homii App",
  },
  {
    company: "EvoPoint",
    country: "United Kingdom",
    type: "SaaS Platform",
    body: "The team turned EvoPoint into a SaaS platform our customers genuinely enjoy using. Event planning, coordination, and execution finally live in one place — and they kept shipping improvements long after launch.",
    name: "Benjamin D. Roberts",
    role: "Client, EvoPoint",
  },
  {
    company: "Speedy Scrubbers",
    country: "Australia",
    type: "Web Application",
    body: "Our whole cleaning business now runs on the web app Sochark built — operations, bookings, and customer interactions handled in one efficient system. It just works, and when we call, a real engineer answers.",
    name: "Prayag Joshi",
    role: "Client, Speedy Scrubbers",
  },
];

export const processSteps = [
  {
    index: "01",
    title: "Discover",
    body: "We dig into your business, users, and goals before a single line of code. Strategy first, always.",
  },
  {
    index: "02",
    title: "Design",
    body: "Wireframes to polished prototypes. You see and approve exactly what gets built — no surprises.",
  },
  {
    index: "03",
    title: "Build",
    body: "Agile sprints, weekly demos, clean code. AI-accelerated where it helps, human-reviewed everywhere.",
  },
  {
    index: "04",
    title: "Scale",
    body: "Launch is the starting line. We monitor, optimize, market, and grow the product with your business.",
  },
];
