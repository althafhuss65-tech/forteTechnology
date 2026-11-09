import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import FeaturesStrip from "@/components/sections/FeaturesStrip";
import AboutSection from "@/components/sections/AboutSection";
import ServicesOverview from "@/components/sections/ServicesOverview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ProcessBand from "@/components/sections/ProcessBand";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ContactCTA from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturesStrip />
        <AboutSection />
        <ServicesOverview />
        <WhyChooseUs />
        <ProcessBand />
        <FeaturedProjects />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
