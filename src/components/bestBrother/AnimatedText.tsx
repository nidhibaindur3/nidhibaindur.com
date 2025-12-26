'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AnimatedText({ text }: { text: string }) {
  const [path, setPath] = useState('');

  useEffect(() => {
    fetch(`/api/textpath?text=${encodeURIComponent(text)}`)
      .then((res) => res.json())
      .then((data) => setPath(data.path));
  }, [text]);

  if (!path) return null;

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <svg className="w-[90%] max-w-5xl" viewBox="0 0 1000 300" preserveAspectRatio="xMidYMid meet">
        {/* Animate stroke drawing */}
        <motion.path
          d={path}
          fill="transparent"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: 'easeInOut' }}
        />

        {/* Animate fill fade-in */}
        <motion.path
          d={path}
          fill="black"
          stroke="none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        />
      </svg>
    </div>
  );
}
