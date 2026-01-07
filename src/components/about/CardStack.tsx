'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CAT_CARDS } from '../../data/aboutData';

export default function CardStack() {
  const [cards, setCards] = useState(CAT_CARDS);

  const moveToEnd = (from: number) => {
    const newCards = [...cards];
    const item = newCards.splice(from, 1)[0];
    newCards.push(item);
    setCards(newCards);
  };

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
                  type: 'spring',
                  stiffness: 260,
                  damping: 25,
                }}
                whileTap={isTop ? { scale: 1.05 } : {}}
                drag={isTop ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_, info) => {
                  if (Math.abs(info.offset.x) > 60) {
                    moveToEnd(index);
                  }
                }}
                className={`absolute inset-0 h-full w-full rounded-[2.5rem] border-[1.5px] border-black ${card.color} flex flex-col items-center justify-center shadow-2xl`}
              >
                <div className="mb-4 h-16 w-16 rounded-full bg-white/20" />
                <span className="px-6 text-center text-lg font-[1000] tracking-tighter text-white uppercase">
                  {card.title}
                </span>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </ul>
    </div>
  );
}
