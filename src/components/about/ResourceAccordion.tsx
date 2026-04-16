'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RESOURCES, awards, Work_Experience } from '../../data/aboutData';

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
                  {/* Render content based on the active tab */}
                  {res.id === '01' && (

                    <><div className="flex h-90 w-60 items-center justify-center rounded-2xl border border-black/5 bg-neutral-100 shadow-inner">
                      <img src="/images/About/awards/nidhi_grad.jpeg" alt="Awards" className="h-full w-full object-cover rounded-2xl" />
                    </div><div className="flex-1 text-left overflow-y-scroll max-h-[400px]">
                        <h2 className="mb-6 font-serif text-5xl font-medium">Awards</h2>
                        <ul className="mb-8 max-w-md text-lg leading-relaxed text-neutral-600">
                          {awards.map((award, index) => (
                            <li key={index} className="mb-2">
                              <span className="font-bold">{award.year}:</span> {award.title}
                            </li>
                          ))}
                        </ul>
                      </div></>
                  )}

                  {res.id === '02' && (
                    <div className="flex-1 text-left overflow-y-scroll max-h-[400px]">
                      <h2 className="mb-6 font-serif text-5xl font-medium">Work Experience</h2>
                      <ul className="mb-8 max-w-md text-lg leading-relaxed text-neutral-600">
                        {Work_Experience.map((item, index) => (
                          <li key={index} className="mb-4">
                            <div className="font-bold">{item.title}</div>
                            <div className="text-sm text-neutral-500">
                              {item.startDate} - {item.endDate}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {res.id === '03' && (
                    <div className="flex-1 text-left overflow-y-scroll max-h-[400px]">
                      <h2 className="mb-6 font-serif text-5xl font-medium">Hobbies</h2>
                      <p className="text-lg leading-relaxed text-neutral-600">
                        {/* Add hobbies content here */}
                        I enjoy painting, hiking, and playing the piano during my free time.
                      </p>
                    </div>
                  )}

                  {res.id === '04' && (
                    <div className="flex-1 text-left overflow-y-scroll max-h-[400px]">
                      <h2 className="mb-6 font-serif text-5xl font-medium">Hobbies</h2>
                      <p className="text-lg leading-relaxed text-neutral-600">
                        {/* Add hobbies content here */}
                        I enjoy painting, hiking, and playing the piano during my free time.
                      </p>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}

