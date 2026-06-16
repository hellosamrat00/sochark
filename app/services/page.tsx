import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ServiceSections from "@/components/ServiceSections";
import Process from "@/components/Process";
import Marquee from "@/components/Marquee";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development, mobile apps, AI & automation, design, cloud & DevOps, digital marketing, and long-term support. Full-stack capability under one roof.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Services"
        title="Everything it takes"
        titleOutline="to ship."
        description="Six verticals, one accountable team. Scan the index, dive into any service. No mystery line items."
      />
      <ServiceSections />
      <Marquee />
      <Process />
      <CTA />
    </main>
  );
}
