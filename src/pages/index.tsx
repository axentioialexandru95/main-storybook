import Hero from '../stories/components/Hero';
import Navbar from '../stories/components/Navbar';

export default function Home() {
  return (
    <main className="w-full min-h-screen text-white">
      <Navbar />
      <Hero />
    </main>
  );
}
