'use client';

import React, { useRef, useState } from 'react';

import Image from 'next/image';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
  type Variants,
} from 'framer-motion';
import Header from '@/components/landing/Header'; // Adjust the import path as needed
import {pillars } from '../../data/aboutData';
import ResourceAccordion from '../../components/about/ResourceAccordion';
import CardStack from '../../components/about/CardStack';
import FAQAccordion from '../../components/about/FAQAccordion';

// --- VARIANTS ---

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring' as const, stiffness: 100, damping: 20 },
  },
};

const stickerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // The speed at which they fall one after another
      delayChildren: 0.2,
    },
  },
};

const stickerFalling: Variants = {
  hidden: {
    y: -300,
    opacity: 0,
    rotate: -15,
  },
  visible: {
    y: 0,
    opacity: 1,
    rotate: [-3, 3], // Alternates between -3 and 3 for the tilted look
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 12,
    },
  },
};

// --- MAIN PAGE ---

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // 4 Sections: 0% to -300% (Translate whole width)
  const xTranslate = useTransform(scrollYProgress, [0, 1], ['0%', '-300%']);
  const springX = useSpring(xTranslate, { stiffness: 50, damping: 20, restDelta: 0.001 });

  return (
    <>
      {/* Header Navigation */}
      <Header />

      <div ref={containerRef} className="relative h-[500vh] bg-[#FAF9F6]">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <motion.div style={{ x: springX }} className="flex h-full w-[400vw] items-center">
            {/* SECTION 1: HERO */}
            <section className="flex h-screen w-screen shrink-0 items-center justify-center px-12 lg:px-24">
              <div className="flex w-full max-w-7xl items-center gap-20">
                <div className="flex-1">
                  <h1 className="text-[clamp(4rem,9vw,9rem)] leading-[0.75] font-[1000] tracking-tighter text-neutral-900 uppercase">
                    HI! IM
                    <br />
                    NIDHI
                  </h1>
                  <p className="mt-10 max-w-md text-xl leading-relaxed font-medium text-neutral-800">
                    Software engineer who likes calm UI, sharp execution, and building things that
                    feel intentional.
                  </p>
                </div>
                <div className="relative h-[70vh] flex-1">
                  <div className="relative h-full w-full overflow-hidden rounded-[4rem] border border-black/5 bg-neutral-200">
                    <Image
                      src="/images/About/aboutnidhi.png"
                      alt="Nidhi"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 3: WHAT DEFINES ME
            <section className="flex h-screen w-screen shrink-0 items-center justify-center px-12 lg:px-24">
              <div className="w-full max-w-6xl">
                <h1 className="mb-20 text-8xl font-[1000] tracking-tighter uppercase">
                  What defines me
                </h1>
                <div className="grid grid-cols-2 gap-x-20 gap-y-16">
                  {pillars.map((pillar) => (
                    <motion.div
                      key={pillar.id}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="border-t-[1.5px] border-black pt-8"
                    >
                      <span className="text-2xl font-[1000] text-neutral-400 italic">
                        0{pillar.id}.
                      </span>
                      <h3 className="mt-2 text-3xl font-[1000] uppercase">{pillar.title}</h3>
                      <p className="mt-4 text-xl leading-snug font-medium text-neutral-600">
                        {pillar.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section> */}

            {/* NEW SLIDE 5: RESOURCES FOR ARTISTS */}
            <section className="flex h-screen w-screen shrink-0 flex-col items-center justify-center px-12 lg:px-24">
              <div className="mb-12 flex w-full max-w-6xl items-center gap-4">
                <h1 className="text-5xl font-black tracking-tighter text-[#E44B2B] uppercase">
                  More about me
                </h1>
                <span className="text-4xl"></span>
              </div>

              <ResourceAccordion />
            </section>

            {/* SECTION 4: HOBBIES & CARD STACK (Side-by-Side) */}
            <section className="flex h-screen w-screen shrink-0 items-center justify-center px-12 lg:px-32">
              <div className="flex w-full max-w-7xl flex-row items-center justify-between gap-20">
                {/* Left Side: Text Content */}
                <div className="flex-1 text-left">
                  <motion.h1
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className="mb-8 text-[clamp(3rem,5vw,5.5rem)] leading-[0.9] font-[1000] tracking-tighter uppercase"
                  >
                    When I am not <br /> on my laptop, <br /> I am probably...
                  </motion.h1>

                </div>

                {/* Right Side: Tilted Card Stack */}
                <div className="flex flex-1 items-center justify-center ">
                  <div className="relative">
                    <CardStack />
                  </div>
                </div>
              </div>
            </section>

            {/* SLIDE 6: FAQ SECTION */}
            <section className="flex h-screen w-screen shrink-0 items-center justify-center bg-[#FAF9F6] px-12 lg:px-24">
              <div className="flex w-full max-w-7xl flex-row items-start justify-between gap-24">
                {/* Left: Illustrative Image */}
                <div className="sticky top-24 flex-1">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] border-[1.5px] border-black shadow-[20px_20px_0px_rgba(0,0,0,0.05)]"
                  >
                    <Image
                      src="/images/hero.jpeg"
                      alt="Illustration"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>

                {/* Right: FAQ Content */}
                <div className="flex-[1.2] py-12">
                  <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="mb-12 text-6xl font-[1000] tracking-tighter text-[#4B6B3F] uppercase"
                  >
                    Frequently Asked Questions
                  </motion.h1>

                  <FAQAccordion />
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </div>
    </>
  );
}
