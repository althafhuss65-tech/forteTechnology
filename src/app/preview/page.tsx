export const dynamic = "force-dynamic";
import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";

export async function generateMetadata(): Promise<Metadata> {
  const page = await prisma.page.findUnique({ where: { slug: "home" } }).catch(() => null);
  return {
    title: page?.metaTitle || "Forte Technologies — Protective & Industrial Coating Specialists",
    description: page?.metaDesc || "Forte Technologies provides protective coatings, anticorrosive coatings, industrial floor coatings and refurbishment services across South India.",
  };
}
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import FeaturesStrip from "@/components/sections/FeaturesStrip";
import AboutSection from "@/components/sections/AboutSection";
import ServicesOverview from "@/components/sections/ServicesOverview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CoatingSystemApproach from "@/components/sections/CoatingSystemApproach";
import ProcessBand from "@/components/sections/ProcessBand";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ContactCTA from "@/components/sections/ContactCTA";

const dbReady = () => {
  const url = process.env.DATABASE_URL ?? "";
  return url.length > 0 && !url.includes("username") && !url.includes("xxx");
};

export default async function HomePage() {
  let sc: Record<string, unknown> = {};
  if (dbReady()) {
    try {
      const rows = await prisma.pageSection.findMany({ where: { pageSlug: "home" } });
      for (const r of rows) sc[r.sectionType] = r.content;
    } catch {
      // fall through to static defaults in each component
    }
  }

  return (
    <>
      <Header />
      <main>
        <Hero               content={sc["hero"] as never} />
        <FeaturesStrip      content={sc["features-strip"] as never} />
        <AboutSection       content={sc["about"] as never} />
        <ServicesOverview   content={sc["services-overview"] as never} />
        <WhyChooseUs        content={sc["why-choose-us"] as never} />
        <CoatingSystemApproach content={sc["coating-approach"] as never} />
        <ProcessBand        content={sc["process"] as never} />
        <FeaturedProjects />
        <ContactCTA         content={sc["contact-cta"] as never} />
      </main>
      <Footer />
    </>
  );
}
