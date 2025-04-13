import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import Security from "@/components/sections/Security";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function Home() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Security />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
