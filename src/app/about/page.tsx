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
import {pillars, aboutData } from '../../data/aboutData';
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

      <div ref={containerRef} className="relative h-[500vh] bg-main-theme">
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

            {/* --- SECTION 2: BENTO GRID (1:1 MATCH) --- */}
            <section className="flex h-screen w-screen shrink-0 items-center justify-center px-12 lg:px-20">
              <div className="flex w-full max-w-[1440px] items-center gap-16">
                {/* Left Header Column */}
                <div className="w-[350px] flex-shrink-0">
                  <div
                    className={`h-5 w-5 ${aboutData.header.dotColor} mb-8 rounded-full shadow-sm`}
                  />
                  <h1 className="text-[85px] leading-[0.8] font-[1000] tracking-tighter whitespace-pre-line uppercase">
                    {aboutData.header.title}
                  </h1>
                </div>

                {/* Right Bento Grid */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  className="grid h-[620px] w-full grid-cols-12 items-stretch gap-5"
                >
                  {/* Toolkit Box */}
                  <motion.div
                    variants={itemVariants}
                    className="group col-span-4 flex flex-col justify-between overflow-hidden rounded-[3rem] border-[1.5px] border-black bg-main-theme p-10"
                  >
                    <div>
                      <h3 className="mb-2 text-4xl font-[1000] tracking-tighter">
                        {aboutData.toolkit.title}
                      </h3>
                      <p className="mb-6 text-[17px] leading-snug font-bold text-neutral-800">
                        {aboutData.toolkit.description}
                      </p>
                    </div>

                    <div className="-mx-10 flex flex-col gap-4 overflow-hidden">
                      {aboutData.toolkit.categories.map((category, rowIndex) => (
                        <div key={category.name} className="relative w-full">
                          <motion.div
                            className="flex gap-3 px-10"
                            animate={{
                              x: rowIndex % 2 === 0 ? [0, -240] : [-240, 0],
                            }}
                            transition={{
                              duration: 15 + rowIndex * 2,
                              repeat: Infinity,
                              ease: 'linear',
                            }}
                          >
                            {/* Duplicate icons to ensure seamless loop for each row */}
                            {[...category.icons, ...category.icons, ...category.icons].map(
                              (item, i) => (
                                <div
                                  key={i}
                                  className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-xl text-white shadow-sm ${item.color} transition-transform hover:scale-110`}
                                  title={category.name}
                                >
                                  {React.createElement(item.icon)}
                                </div>
                              )
                            )}
                          </motion.div>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Skills Box (Stickers) */}
                  <motion.div
                    variants={itemVariants}
                    className="col-span-4 flex flex-col overflow-hidden rounded-[3rem] border-[1.5px] border-black bg-main-theme p-10"
                  >
                    <h3 className="mb-4 text-4xl font-[1000] tracking-tighter">
                      {aboutData.skills.title}
                    </h3>
                    <p className="mb-8 text-[17px] leading-snug font-bold text-neutral-800">
                      {aboutData.skills.description}
                    </p>

                    {/* Wrap the stickers in a motion div to trigger the stagger */}
                    <motion.div
                      variants={stickerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex flex-wrap gap-2"
                    >
                      {aboutData.skills.items.map((skill, idx) => (
                        <motion.span
                          key={skill}
                          custom={idx}
                          variants={stickerFalling}
                          className="rounded-full border-[1.5px] border-black bg-main-theme px-4 py-1.5 text-[11px] font-[1000] uppercase shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>

                  {/* Map & Portfolio Stack */}
                  <div className="col-span-4 grid grid-rows-2 gap-5">
                    {/* Map Box */}
                    <motion.div
                      variants={itemVariants}
                      className="relative overflow-hidden rounded-[3rem] border-[1.5px] border-black"
                    >
                      <Image
                        src={aboutData.location.city} // Dynamically use the city property for the image
                        alt="Location Map"
                        layout="fill"
                        className="object-cover"
                      />
                    </motion.div>
                    {/* Portfolio Box */}
                    <motion.div
                      variants={itemVariants}
                      className="group relative flex flex-col justify-center overflow-hidden rounded-[3rem] border-[1.5px] border-black bg-main-theme p-10"
                    >
                      <h3 className="z-10 mb-3 text-4xl leading-none font-[1000] tracking-tighter">
                        {aboutData.portfolio.title}
                      </h3>
                      <p className="z-10 mb-2 text-sm font-bold text-neutral-600">
                        {aboutData.portfolio.subtitle}
                      </p>
                      <a
                        href={aboutData.portfolio.url}
                        className="z-10 text-sm font-[1000] break-all underline underline-offset-4"
                      >
                        {aboutData.portfolio.displayLink}
                      </a>
                      <div
                        className={`absolute -right-8 -bottom-8 -z-0 h-32 w-32 rounded-full transition-transform duration-700 ease-in-out group-hover:scale-[4]`}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </section>
            {/* SECTION 3: WHAT DEFINES ME */}
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
            </section> 

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
            <section className="flex h-screen w-screen shrink-0 items-center justify-center bg-main-theme px-12 lg:px-24">
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
