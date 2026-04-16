'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { cards as initialCards } from '../../data/aboutData';

export default function CardStack() {
  const [cards, setCards] = useState(initialCards);

  const moveToEnd = (from: number) => {
    const newCards = [...cards];
    const item = newCards.splice(from, 1)[0];
    newCards.push(item);
    setCards(newCards);
  };

  // Auto-animate cards every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      moveToEnd(0); 
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
                className={`absolute inset-0 h-full w-full rounded-[2.5rem] border-[1.5px] border-black bg-white flex flex-col items-center justify-center shadow-2xl`}
              >
                {/* Add the image for the card */}
                <div className="relative h-[500px] w-full overflow-hidden rounded-t-[2.5rem]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    layout="fill"
                    objectFit="cover" // Ensures the image fits and crops if necessary
                  />
                </div>
                {/* Card title */}
                <div className="p-4 bg-white text-center opacity-100">
                  <h2 className="text-lg font-bold">{card.title}</h2>
                </div>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </ul>
    </div>
  );
}