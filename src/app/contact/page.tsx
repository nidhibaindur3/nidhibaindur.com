"use client";

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
      <main className="min-h-screen bg-[#F2F1EE] text-[#1a1a1a] selection:bg-black selection:text-white overflow-x-hidden relative flex flex-col justify-center">
        
        {/* Main Content Wrapper */}
        <div className="max-w-[1800px] w-full mx-auto px-[5vw] py-[10vh]">
          
          {/* Dynamic Editorial Layout: Flex-row-reverse allows the right side 
              to remain anchored while the left side expands. */}
          <div className="flex flex-col lg:flex-row gap-y-16 lg:gap-x-12 justify-between items-start">
            
            {/* LEFT COLUMN: The Headline Block */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:max-w-[55%] lg:pt-[5vh]"
            >
              <h1 className="font-serif leading-[0.85] tracking-[-0.05em] flex flex-col"
                  style={{ fontSize: 'clamp(3.5rem, 10vw, 11rem)' }}>
                <span className="block whitespace-nowrap">Want to start</span>
                <span className="italic block">a new project?</span>
              </h1>
              
              <div className="font-serif italic text-[clamp(1.5rem,3vw,2.5rem)] mt-12 opacity-80 flex flex-wrap items-center gap-x-3 gap-y-1 leading-tight">
                <span>Or just say</span>
                <div className="relative inline-flex min-w-[4ch]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={GREETINGS[index]}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="whitespace-nowrap inline-block"
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
              className="w-full lg:max-w-[40%] lg:mt-[32vh] flex flex-col space-y-[12vh]"
            >
              {/* Email / Click to Copy */}
              <div className="group relative">
                <div className="flex justify-between items-end mb-6">
                  <p className="text-[10px] uppercase tracking-[0.4em] opacity-40 font-sans font-bold">
                    Inquiries — Click to copy
                  </p>
                  <AnimatePresence>
                    {copied && (
                      <motion.span 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-[9px] uppercase font-bold tracking-widest bg-black text-white px-2 py-0.5"
                      >
                        Copied
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
                
                <button 
                  onClick={copyToClipboard}
                  className="font-serif block relative pb-3 text-left w-full group outline-none"
                  style={{ 
                    fontSize: 'clamp(1.2rem, 2.8vw, 3.5rem)',
                    lineHeight: '1.1'
                  }}
                >
                  {/* Word-break ensures the long email wraps beautifully on mobile and small laptops */}
                  <span className="relative z-10 break-words block transition-opacity duration-300 group-hover:opacity-40">
                    {CONTACT_DATA.email}
                  </span>
                  
                  {/* Dynamic Underline */}
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-black transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]"></span>
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-black/10"></span>
                </button>
              </div>

              {/* Socials: Larger, clearer spacing */}
              <div className="border-t border-black/10 pt-10">
                 <p className="text-[10px] uppercase tracking-[0.4em] mb-10 opacity-40 font-sans font-bold">Follow</p>
                 <div className="grid grid-cols-2 gap-x-8 gap-y-12">
                  {CONTACT_DATA.socials.map((link) => (
                    <a 
                      key={link.label} 
                      href={link.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-serif text-[clamp(1.5rem,2vw,2.2rem)] italic hover:opacity-40 transition-all duration-300 flex items-center justify-between group/link"
                    >
                      <span>{link.label}</span>
                      <span className="text-xs not-italic opacity-20 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
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