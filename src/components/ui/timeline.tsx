'use client';
import { useMotionValueEvent, useScroll, useTransform, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-[#0E0D29] font-sans md:px-10 relative overflow-hidden"
      ref={containerRef}
    >
      {/* Gradient overlay for consistent look */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10 z-0"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-screen-2xl mx-auto py-20 px-4 md:px-8 lg:px-10 relative z-10"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Changelog{' '}
          <span className="bg-primary-500 px-2 py-0.5 drop-shadow-[0_0_15px_rgba(25,25,254,0.5)]">
            Journey
          </span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl">
          We&apos;ve been working on PhantomTech for the past 9 years. Here&apos;s a timeline of our
          journey building exceptional digital solutions.
        </p>
      </motion.div>

      <div ref={ref} className="relative max-w-screen-2xl mx-auto pb-20 z-10">
        {data.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-[#0c0c20] flex items-center justify-center border border-[#201F45]">
                <div className="h-4 w-4 rounded-full bg-primary-500 shadow-[0_0_10px_rgba(25,25,254,0.5)]" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-white">
                <span className="border-b-2 border-primary-500 pb-1">{item.title}</span>
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-white">
                <span className="border-b-2 border-primary-500 pb-1">{item.title}</span>
              </h3>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                className="bg-[#0E0D29]/60 border border-[#201F45] rounded-xl p-6 shadow-lg hover:border-primary-500/30 transition-all duration-300"
                whileHover={{
                  y: -5,
                  boxShadow: '0 10px 30px -15px rgba(70, 70, 255, 0.3)',
                  transition: { duration: 0.2 },
                }}
              >
                {item.content}
              </motion.div>
            </div>
          </motion.div>
        ))}
        <div
          style={{
            height: height + 'px',
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-[#201F45] to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-primary-500 via-[#4646FF] to-transparent from-[0%] via-[10%] rounded-full shadow-[0_0_8px_rgba(25,25,254,0.5)]"
          />
        </div>
      </div>
    </div>
  );
};
