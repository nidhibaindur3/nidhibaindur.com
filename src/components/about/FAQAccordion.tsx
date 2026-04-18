'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ_DATA } from '../../data/aboutData';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full space-y-4">
      {FAQ_DATA.map((item, i) => (
        <div key={i} className="border-b-[1.5px] border-black">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="group flex w-full items-center justify-between py-6 text-left"
          >
            <span className="text-xl font-black font-serif tracking-tight uppercase transition-colors group-hover:text-neutral-500">
              {item.q}
            </span>
            <motion.span animate={{ rotate: openIndex === i ? 180 : 0 }} className="text-2xl">
              ↓
            </motion.span>
          </button>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <p className="pb-6 text-lg font-serif leading-relaxed font-medium text-[#342620]">
                  {item.a}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
