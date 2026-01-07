'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RESOURCES } from '../../data/aboutData';

export default function ResourceAccordion() {
  const [activeTab, setActiveTab] = useState('01');

  return (
    <div className="flex w-full max-w-6xl h-[500px] border-[1.5px] border-black overflow-hidden bg-white">
      {RESOURCES.map((res) => {
        const isActive = activeTab === res.id;

        return (
          <motion.div
            key={res.id}
            initial={false}
            animate={{ 
              width: isActive ? '100%' : '60px',
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={`relative flex h-full border-r-[1.5px] last:border-r-0 border-black ${res.color} overflow-hidden`}
          >
            <button
              onClick={() => setActiveTab(res.id)}
              className={`absolute left-0 top-0 bottom-0 w-[60px] flex items-center justify-center border-r-[1.5px] border-black ${res.tabColor} z-20`}
            >
              <span className="rotate-[-90deg] whitespace-nowrap font-black text-xs tracking-widest uppercase">
                {res.label}
              </span>
            </button>

            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  className="ml-[60px] flex flex-row items-center justify-center gap-12 px-16 w-full h-full"
                >
                  <div className="w-48 h-48 bg-neutral-100 rounded-2xl flex items-center justify-center border border-black/5 shadow-inner">
                    <span className="text-4xl">🎨</span>
                  </div>
                  
                  <div className="flex-1 text-left">
                    <span className="text-orange-500 font-bold text-lg mb-2 block">{res.id}</span>
                    <h2 className="text-5xl font-serif font-medium mb-6">{res.title}</h2>
                    <p className="text-lg text-neutral-600 max-w-md leading-relaxed mb-8">
                      {res.description}
                    </p>
                    <a href="#" className="inline-block border-b-2 border-orange-500 pb-1 font-bold text-sm tracking-tighter hover:text-orange-500 transition-colors">
                      {res.linkText}
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}