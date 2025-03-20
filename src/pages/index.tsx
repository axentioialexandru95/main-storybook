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
      <section id="home">
        <Hero />
      </section>
      <section id="technologies">
        <Technologies />
      </section>
      <section id="features">
        <Features />
      </section>
      <BottomNavigation />
      <section id="work">
        <TimelineDemo />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="usp">
        <USP />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </main>
  );
}
