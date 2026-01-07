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
            className="w-full py-6 flex justify-between items-center text-left group"
          >
            <span className="text-xl font-black uppercase tracking-tight group-hover:text-neutral-500 transition-colors">
              {item.q}
            </span>
            <motion.span
              animate={{ rotate: openIndex === i ? 180 : 0 }}
              className="text-2xl"
            >
              ↓
            </motion.span>
          </button>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <p className="pb-6 text-lg font-medium text-neutral-600 leading-relaxed">
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