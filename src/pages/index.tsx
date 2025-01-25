import Image from 'next/image';
import localFont from 'next/font/local';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { Navbar } from '@/stories/components/Navbar';
import { Hero } from '@/stories/components/Hero';

// Dynamically import below-the-fold components
const ProductsList = dynamic(
  () => import('@/stories/components/ProductsList').then((mod) => mod.ProductsList),
  { ssr: true }
);
const Brands = dynamic(() => import('@/stories/components/Brands').then((mod) => mod.Brands), {
  ssr: true,
});
const LatestProducts = dynamic(
  () => import('@/stories/components/Hero/LatestProducts').then((mod) => mod.LatestProducts),
  { ssr: true }
);
const Testimonials = dynamic(
  () => import('@/stories/components/Testimonials').then((mod) => mod.Testimonials),
  { ssr: true }
);
const FAQ = dynamic(() => import('@/stories/components/FAQ').then((mod) => mod.FAQ), { ssr: true });
const Newsletter = dynamic(
  () => import('@/stories/components/Newsletter').then((mod) => mod.Newsletter),
  { ssr: true }
);
const Footer = dynamic(() => import('@/stories/components/Footer').then((mod) => mod.Footer), {
  ssr: true,
});

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="w-full h-96 animate-pulse bg-gray-100" />}>
        <ProductsList />
      </Suspense>
      <Suspense fallback={<div className="w-full h-48 animate-pulse bg-gray-100" />}>
        <Brands />
      </Suspense>
      <Suspense fallback={<div className="w-full h-96 animate-pulse bg-gray-100" />}>
        <LatestProducts />
      </Suspense>
      <Suspense fallback={<div className="w-full h-72 animate-pulse bg-gray-100" />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<div className="w-full h-72 animate-pulse bg-gray-100" />}>
        <FAQ />
      </Suspense>
      <Suspense fallback={<div className="w-full h-48 animate-pulse bg-gray-100" />}>
        <Newsletter />
      </Suspense>
      <Suspense fallback={<div className="w-full h-96 animate-pulse bg-gray-100" />}>
        <Footer />
      </Suspense>
    </main>
  );
}
