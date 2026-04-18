'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cards as initialCards } from '../../data/aboutData';

export default function CardStack() {
  const [cards, setCards] = useState(initialCards);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prevCards) => {
        const [first, ...rest] = prevCards;
        return [...rest, first];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [cards]);

  return (
    <div className="relative flex h-[450px] w-72 items-center justify-center">
      <ul className="relative m-0 h-full w-full list-none p-0">
        <AnimatePresence initial={false}>
          {cards.map((card, index) => {
            const isTop = index === 0;
            const tilt = isTop ? 0 : index % 2 === 0 ? index * 4 : index * -4;

            return (
              <motion.li
                key={card.id}
                style={{
                  zIndex: cards.length - index,
                  cursor: isTop ? 'grab' : 'auto',
                  transformOrigin: 'bottom center',
                }}
                animate={{
                  top: index * -10,
                  scale: 1 - index * 0.05,
                  opacity: 1 - index * 0.2,
                  rotate: tilt,
                  x: 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: 'easeInOut',
                }}
                className={`absolute h-[500px] w-[300px] rounded-xl border ${card.color} bg-white shadow-lg`}
              >
                <div className="relative h-full w-full overflow-hidden rounded-xl">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-black/80 to-transparent p-4 text-white">
                    <h3 className="text-lg font-bold">{card.title}</h3>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </ul>
    </div>
  );
}