'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring, AnimatePresence, type Variants } from 'framer-motion';
import Header from '@/components/landing/Header'; // Adjust the import path as needed
import { LEARN_MORE_DATA } from '../../data/aboutData';
import ResourceAccordion from '../../components/about/ResourceAccordion';
import CardStack from '../../components/about/CardStack';
import FAQAccordion from '../../components/about/FAQAccordion';

// --- VARIANTS ---

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { type: 'spring' as const, stiffness: 100, damping: 20 } 
  }
};


// --- MAIN PAGE ---

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 4 Sections: 0% to -300% (Translate whole width)
  const xTranslate = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]);
  const springX = useSpring(xTranslate, { stiffness: 50, damping: 20, restDelta: 0.001 });

  return (
    <>
      {/* Header Navigation */}
      <Header />

      <div ref={containerRef} className="relative h-[500vh] bg-[#FAF9F6]">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <motion.div 
            style={{ x: springX }} 
            className="flex h-full w-[400vw] items-center"
          >
            
            {/* SECTION 1: HERO */}
            <section className="h-screen w-screen shrink-0 flex items-center justify-center px-12 lg:px-24">
              <div className="flex w-full max-w-7xl items-center gap-20">
                <div className="flex-1">
                  <h1 className="text-[clamp(4rem,9vw,9rem)] font-[1000] leading-[0.75] tracking-tighter uppercase text-neutral-900">
                    HI! I’M<br />NIDHI
                  </h1>
                  <p className="mt-10 text-xl text-neutral-800 font-medium leading-relaxed max-w-md">
                    Software engineer who likes calm UI, sharp execution, and building things that feel intentional.
                  </p>
                </div>
                <div className="flex-1 h-[70vh] relative">
                  <div className="relative h-full w-full overflow-hidden rounded-[4rem] border border-black/5 bg-neutral-200">
                    <Image src="/images/aboutnidhi.png" alt="Nidhi" fill className="object-cover" priority />
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 2: BENTO GRID */}
            <section className="h-screen w-screen shrink-0 flex items-center justify-center px-12 lg:px-20">
              <div className="flex w-full max-w-[1440px] items-center gap-16">
                <div className="flex-shrink-0 w-[350px]">
                  <div className="w-5 h-5 bg-[#3333FF] rounded-full mb-8 shadow-sm" />
                  <h1 className="text-[85px] font-[1000] leading-[0.8] tracking-tighter uppercase">
                    Let’s know<br />more about<br />me
                  </h1>
                </div>

                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  className="grid grid-cols-12 gap-5 h-[620px] w-full items-stretch"
                >
                  {LEARN_MORE_DATA.map((section, index) => (
                    <motion.div 
                      key={section.id} 
                      variants={itemVariants} 
                      className={`col-span-4 border-[1.5px] border-black rounded-[3rem] p-10 ${index === 2 ? 'bg-[#E6E2D3]' : 'bg-white'} flex flex-col justify-between overflow-hidden group`}
                    >
                      <h3 className="text-4xl font-[1000] tracking-tighter mb-4">{section.title}</h3>
                      {section.items && Array.isArray(section.items) ? (
                        <div className="relative w-full overflow-hidden -mx-10 pb-4">
                          <motion.div 
                            className="flex gap-4 px-10"
                            animate={{ x: [0, -320] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          >
                            {section.items.map((item, i) => (
                              typeof item === 'string' ? (
                                <span 
                                  key={i} 
                                  className="px-4 py-1.5 border-[1.5px] border-black rounded-full text-[11px] font-[1000] uppercase bg-white shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                                  style={{ transform: `rotate(${i % 2 === 0 ? -3 : 3}deg)` }}
                                >
                                  {item}
                                </span>
                              ) : (
                                <div 
                                  key={item.id} 
                                  className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl font-bold ${item.color} flex-shrink-0`}
                                >
                                  {item.icon}
                                </div>
                              )
                            ))}
                          </motion.div>
                        </div>
                      ) : (
                        <div className="flex flex-col justify-center items-center">
                          <a href="#" className="text-sm font-[1000] underline">{section.link}</a>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* SECTION 3: WHAT DEFINES ME */}
            <section className="h-screen w-screen shrink-0 flex items-center justify-center px-12 lg:px-24">
              <div className="w-full max-w-6xl">
                <h1 className="text-8xl font-[1000] tracking-tighter mb-20 uppercase">What defines me</h1>
                <div className="grid grid-cols-2 gap-x-20 gap-y-16">
                  {[1, 2, 3, 4].map((id) => (
                    <motion.div key={id} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="border-t-[1.5px] border-black pt-8">
                      <span className="text-2xl font-[1000] italic text-neutral-400">0{id}.</span>
                      <h3 className="text-3xl font-[1000] uppercase mt-2">Core Pillar</h3>
                      <p className="mt-4 text-neutral-600 text-xl font-medium leading-snug">Consistency across engineering and design leads to better products.</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* SECTION 4: HOBBIES & CARD STACK (Side-by-Side) */}
            <section className="h-screen w-screen shrink-0 flex items-center justify-center px-12 lg:px-32">
              <div className="flex flex-row items-center justify-between w-full max-w-7xl gap-20">
                
                {/* Left Side: Text Content */}
                <div className="flex-1 text-left">
                  <motion.h1 
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className="text-[clamp(3rem,5vw,5.5rem)] font-[1000] tracking-tighter uppercase mb-8 leading-[0.9]"
                  >
                    When I am not <br /> on my laptop, <br /> I am probably...
                  </motion.h1>
                  
                  <motion.p 
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl text-neutral-700 font-medium max-w-xl leading-relaxed"
                  >
                    Sketching, cooking up new recipes, or dreaming of adopting more cats!!
                  </motion.p>
                  
                  <p className="mt-12 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">
                    Interactive Stack — Swipe cards to explore
                  </p>
                </div>

                {/* Right Side: Tilted Card Stack */}
                <div className="flex-1 flex justify-center items-center">
                  <div className="relative">
                    <CardStack />
                  </div>
                </div>

              </div>
            </section>

            {/* NEW SLIDE 5: RESOURCES FOR ARTISTS */}
          <section className="h-screen w-screen shrink-0 flex flex-col items-center justify-center px-12 lg:px-24">
            <div className="w-full max-w-6xl mb-12 flex items-center gap-4">
              <h1 className="text-5xl font-black uppercase tracking-tighter text-[#E44B2B]">
                Resources for Artists
              </h1>
              <span className="text-4xl">💡</span>
            </div>
            
            <ResourceAccordion />
          </section>


          {/* SLIDE 6: FAQ SECTION */}
<section className="h-screen w-screen shrink-0 flex items-center justify-center px-12 lg:px-24 bg-[#FAF9F6]">
  <div className="flex flex-row items-start justify-between w-full max-w-7xl gap-24">
    
    {/* Left: Illustrative Image */}
    <div className="flex-1 sticky top-24">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="relative aspect-[3/4] w-full rounded-[2rem] border-[1.5px] border-black overflow-hidden shadow-[20px_20px_0px_rgba(0,0,0,0.05)]"
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
        className="text-6xl font-[1000] uppercase tracking-tighter mb-12 text-[#4B6B3F]"
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