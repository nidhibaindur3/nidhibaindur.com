'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RESOURCES } from '../../data/aboutData';

export default function ResourceAccordion() {
  const [activeTab, setActiveTab] = useState('01');

  return (
    <div className="flex h-[500px] w-full max-w-6xl overflow-hidden border-[1.5px] border-black bg-white">
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
            className={`relative flex h-full border-r-[1.5px] border-black last:border-r-0 ${res.color} overflow-hidden`}
          >
            <button
              onClick={() => setActiveTab(res.id)}
              className={`absolute top-0 bottom-0 left-0 flex w-[60px] items-center justify-center border-r-[1.5px] border-black ${res.tabColor} z-20`}
            >
              <span className="rotate-[-90deg] text-xs font-black tracking-widest whitespace-nowrap uppercase">
                {res.label}
              </span>
            </button>

            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  className="ml-[60px] flex h-full w-full flex-row items-center justify-center gap-12 px-16"
                >
                  <div className="flex h-48 w-48 items-center justify-center rounded-2xl border border-black/5 bg-neutral-100 shadow-inner">
                    <span className="text-4xl">🎨</span>
                  </div>

                  <div className="flex-1 text-left">
                    <span className="mb-2 block text-lg font-bold text-orange-500">{res.id}</span>
                    <h2 className="mb-6 font-serif text-5xl font-medium">{res.title}</h2>
                    <p className="mb-8 max-w-md text-lg leading-relaxed text-neutral-600">
                      {res.description}
                    </p>
                    <a
                      href="#"
                      className="inline-block border-b-2 border-orange-500 pb-1 text-sm font-bold tracking-tighter transition-colors hover:text-orange-500"
                    >
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
