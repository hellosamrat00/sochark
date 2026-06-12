import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Manifesto from "@/components/Manifesto";
import ServicesPreview from "@/components/ServicesPreview";
import Process from "@/components/Process";
import TrustSection from "@/components/TrustSection";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import BlogPreview from "@/components/BlogPreview";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Manifesto />
      <ServicesPreview />
      <Process />
      <TrustSection />
      <Testimonials />
      <Stats />
      <Marquee reverse />
      <BlogPreview />
      <CTA />
    </main>
  );
}
