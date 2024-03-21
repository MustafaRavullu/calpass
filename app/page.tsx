import FAQsSection from "@/components/faqs-section";
import FeatureSection from "@/components/feature-section";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import HowItWorksSection from "@/components/how-it-works-section";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <HeroSection />
        <FeatureSection />
        <HowItWorksSection />
        <FAQsSection />
      </main>
    </>
  );
}
