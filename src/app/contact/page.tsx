'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTACT_DATA, GREETINGS } from '@/data/contact';
import Header from '@/components/landing/Header';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [index, setIndex] = useState(0);

  // Dynamic language cycling
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % GREETINGS.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_DATA.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy');
    }
  };

  return (
    <>
      <Header />
      <main className="relative flex min-h-screen flex-col justify-center overflow-x-hidden bg-main-theme text-[#1a1a1a] selection:bg-black selection:text-white">
        {/* Main Content Wrapper */}
        <div className="mx-auto w-full max-w-[1800px] px-[5vw] py-[10vh]">
          {/* Dynamic Editorial Layout: Flex-row-reverse allows the right side 
              to remain anchored while the left side expands. */}
          <div className="flex flex-col items-start justify-between gap-y-16 lg:flex-row lg:gap-x-12">
            {/* LEFT COLUMN: The Headline Block */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:max-w-[55%] lg:pt-[5vh]"
            >
              <h1
                className="flex flex-col font-serif leading-[0.85] tracking-[-0.05em]"
                style={{ fontSize: 'clamp(3.5rem, 10vw, 11rem)' }}
              >
                <span className="block whitespace-nowrap  text-[#342620]">Want to start</span>
                <span className="block italic  text-[#342620]">a new project?</span>
              </h1>

              <div className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-1 font-serif text-[clamp(1.5rem,3vw,2.5rem)]  text-[#342620]leading-tight italic opacity-80">
                <span>Or just say</span>
                <div className="relative inline-flex min-w-[4ch]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={GREETINGS[index]}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="inline-block whitespace-nowrap  text-[#342620]"
                    >
                      {GREETINGS[index]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: The Interactive Block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="flex w-full flex-col space-y-[12vh] lg:mt-[32vh] lg:max-w-[40%]"
            >
              {/* Email / Click to Copy */}
              <div className="group relative">
                <div className="mb-6 flex items-end justify-between">
                  <p className="font-sans text-[10px] font-bold tracking-[0.4em] uppercase opacity-40 ">
                    Inquiries — Click to copy
                  </p>
                  <AnimatePresence>
                    {copied && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="bg-black px-2 py-0.5 text-[9px] font-bold tracking-widest text-white uppercase"
                      >
                        Copied
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>

                <button
                  onClick={copyToClipboard}
                  className="group relative block w-full pb-3 text-left font-serif outline-none"
                  style={{
                    fontSize: 'clamp(1.2rem, 2.8vw, 3.5rem)',
                    lineHeight: '1.1',
                  }}
                >
                  {/* Word-break ensures the long email wraps beautifully on mobile and small laptops */}
                  <span className="relative z-10 block break-words transition-opacity duration-300 group-hover:opacity-40 ">
                    {CONTACT_DATA.email}
                  </span>

                  {/* Dynamic Underline */}
                  <span className="ease-[0.16, 1, 0.3, 1] absolute bottom-0 left-0 h-[1.5px] w-full origin-left scale-x-0 transform bg-black transition-transform duration-700 group-hover:scale-x-100"></span>
                  <span className="absolute bottom-0 left-0 h-[1px] w-full bg-black/10"></span>
                </button>
              </div>

              {/* Socials: Larger, clearer spacing */}
              <div className="border-t border-black/10 pt-10">
                <p className="mb-10 font-sans text-[10px] font-bold tracking-[0.4em] uppercase opacity-40 ">
                  Follow
                </p>
                <div className="grid grid-cols-2 gap-x-8 gap-y-12">
                  {CONTACT_DATA.socials.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center justify-between font-serif text-[clamp(1.5rem,2vw,2.2rem)] italic transition-all duration-300 hover:opacity-40"
                    >
                      <span>{link.label}</span>
                      <span className="text-xs not-italic opacity-20 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100">
                        ↗
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
}
