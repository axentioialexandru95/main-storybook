import { TimelineDemo } from '@/components/ui/timeline-demo';
import BottomNavigation from '@/stories/components/BottomNavigation';
import Features from '@/stories/components/Features';
import Hero from '@/stories/components/Hero';
import Navbar from '@/stories/components/Navbar';
import Technologies from '@/stories/components/Technologies';

export default function Home() {
  return (
    <main className="relative w-full">
      <Navbar />
      <Hero />
      <Technologies />
      <Features />
      <BottomNavigation />
      <TimelineDemo />
    </main>
  );
}
