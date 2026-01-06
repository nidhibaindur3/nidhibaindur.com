'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring, type Variants } from 'framer-motion';

// --- TS Fix: Variants with 'as const' ---
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

const toolkitIcons = [
  { id: 1, color: 'bg-[#FFD900]', icon: 'M' }, 
  { id: 2, color: 'bg-[#4353FF]', icon: 'W' },
  { id: 3, color: 'bg-[#000000]', icon: '●' },
  { id: 4, color: 'bg-[#F24E1E]', icon: 'F' },
  { id: 5, color: 'bg-[#FF3366]', icon: 'A' },
];

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // offset: ["start start", "end end"] is crucial for horizontal sync
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // map exactly to the number of sections (3 sections = 0% to -200%)
  const xTranslate = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);
  const springX = useSpring(xTranslate, { stiffness: 60, damping: 25, restDelta: 0.001 });

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-[#FAF9F6]">
      {/* Sticky wrapper prevents vertical movement of content */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div 
          style={{ x: springX }} 
          className="flex h-full w-[300vw] items-center"
        >
          
          {/* --- SECTION 1: HERO --- */}
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

          {/* --- SECTION 2: BENTO GRID (1:1 MATCH) --- */}
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
                {/* Toolkit Box */}
                <motion.div variants={itemVariants} className="col-span-4 border-[1.5px] border-black rounded-[3rem] p-10 flex flex-col justify-between bg-white overflow-hidden group">
                  <div>
                    <h3 className="text-4xl font-[1000] tracking-tighter mb-4">Toolkit</h3>
                    <p className="text-[17px] font-bold text-neutral-800 leading-snug">This is my collection of tools that help me transform ideas into amazing designs.</p>
                  </div>
                  <div className="relative w-full overflow-hidden -mx-10 pb-4">
                    <motion.div 
                      className="flex gap-4 px-10"
                      animate={{ x: [0, -320] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      {[...toolkitIcons, ...toolkitIcons].map((item, i) => (
                        <div key={i} className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-sm flex-shrink-0 ${item.color} group-hover:scale-105 transition-transform`}>
                          {item.icon}
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>

                {/* Skills Box (Stickers) */}
                <motion.div variants={itemVariants} className="col-span-4 border-[1.5px] border-black rounded-[3rem] p-10 bg-white flex flex-col">
                  <h3 className="text-4xl font-[1000] tracking-tighter mb-4">Skills</h3>
                  <p className="text-[17px] font-bold text-neutral-800 leading-snug mb-8">Methods and strengths I bring to every project.</p>
                  <div className="flex flex-wrap gap-2">
                    {['Branding', 'UI/UX', 'Figma', 'Next.js', 'React', 'Tailwind', 'Motion', 'Python'].map((skill, idx) => (
                      <span 
                        key={skill}
                        className="px-4 py-1.5 border-[1.5px] border-black rounded-full text-[11px] font-[1000] uppercase bg-white shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                        style={{ transform: `rotate(${idx % 2 === 0 ? -3 : 3}deg)` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Map & Portfolio Stack */}
                <div className="col-span-4 grid grid-rows-2 gap-5">
                  <motion.div variants={itemVariants} className="border-[1.5px] border-black rounded-[3rem] overflow-hidden relative bg-[#E6E2D3]">
                    <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="w-8 h-8 bg-red-600 rounded-full border-[3px] border-white shadow-xl animate-bounce" />
                      <span className="mt-2 bg-white px-2 py-0.5 rounded border border-black text-[10px] font-black uppercase">London, UK</span>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="border-[1.5px] border-black rounded-[3rem] p-10 bg-white flex flex-col justify-center overflow-hidden group relative">
                    <h3 className="text-4xl font-[1000] tracking-tighter leading-none mb-3 z-10">Portfolio</h3>
                    <p className="text-sm font-bold text-neutral-600 mb-2 z-10">Check my work here:</p>
                    <a href="#" className="text-sm font-[1000] underline underline-offset-4 z-10 break-all">view-work.com/portfolio</a>
                    <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-blue-50 rounded-full group-hover:scale-[4] transition-transform duration-700 ease-in-out -z-0" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* --- SECTION 3: DEFINITIONS --- */}
          <section className="h-screen w-screen shrink-0 flex items-center justify-center px-12 lg:px-24">
            <div className="w-full max-w-6xl">
              <h1 className="text-8xl font-[1000] tracking-tighter mb-20 uppercase">What defines me</h1>
              <div className="grid grid-cols-2 gap-x-20 gap-y-16">
                {[1, 2, 3, 4].map((id) => (
                  <motion.div 
                    key={id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="border-t-[1.5px] border-black pt-8 group"
                  >
                    <span className="text-2xl font-[1000] italic text-neutral-400 group-hover:text-black transition-colors">0{id}.</span>
                    <h3 className="text-3xl font-[1000] uppercase mt-2">Personal Philosophy</h3>
                    <p className="mt-4 text-neutral-600 text-xl font-medium leading-snug">Matching the 1:1 design layout with consistent spacing and typography weight.</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

        </motion.div>
      </div>
    </div>
  );
}