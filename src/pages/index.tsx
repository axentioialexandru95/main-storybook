import { TimelineDemo } from '@/components/ui/timeline-demo';
import About from '@/stories/components/About';
import BottomNavigation from '@/stories/components/BottomNavigation';
import Features from '@/stories/components/Features';
import Footer from '@/stories/components/Footer';
import Hero from '@/stories/components/Hero';
import Services from '@/stories/components/Services';
import Technologies from '@/stories/components/Technologies';
import USP from '@/stories/components/USP';

export default function Home() {
  return (
    <main className="relative w-full">
      <Hero />
      <Technologies />
      <Features />
      <BottomNavigation />
      <TimelineDemo />
      <Services />
      <About />
      <USP />
      <Footer />
    </main>
  );
}
