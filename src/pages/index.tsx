import { useEffect, ReactNode } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Hero from "@/stories/components/Hero";
import Technologies from "@/stories/components/Technologies";
import Features from "@/stories/components/Features";
import Pricing from "@/stories/components/Pricing";
import Solutions from "@/stories/components/Solutions";
import Founder from "@/stories/components/Founder";
import Footer from "@/stories/components/Footer";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

// Simple section component without animations
const Section = ({ children, className = "", id = "" }: SectionProps) => {
  return (
    <section
      id={id}
      className={`py-24 ${className}`}
    >
      {children}
    </section>
  );
};

export default function Home() {
  return (
    <main className="w-full dark:bg-background bg-phantom-white dark:text-text text-gray-800">
      <div>
        <Hero />
      </div>
      
      <Section id="features">
        <Features />
      </Section>
      
      <Section className="dark:bg-surface-light bg-gray-100">
        <Technologies className="py-8" />
      </Section>
      
      <Section id="pricing">
        <Pricing />
      </Section>
      
      <Section id="solutions" className="dark:bg-surface bg-white">
        <Solutions />
      </Section>
      
      <Section id="founder">
        <Founder />
      </Section>
      
      <Footer />
    </main>
  );
}
