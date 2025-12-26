'use client';

import { animate } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export default function Signature() {
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch('/sig/nidhi.svg')
      .then((res) => res.text())
      .then((svg) => setSvgContent(svg));
  }, []);

  useEffect(() => {
    if (!ref.current) return;

    const paths = ref.current.querySelectorAll('path');

    paths.forEach((p) => {
      // ENSURE NO DOT
      p.setAttribute('pathLength', '1');
    });

    paths.forEach((p, i) => {
      animate(
        p,
        { pathLength: [0, 1], stroke: ['rgba(255,255,255,0)', 'white'] },
        { duration: 1.2, delay: i * 0.3, ease: 'easeInOut' }
      );
    });
  }, [svgContent]);

  return (
    <div
      ref={ref}
      dangerouslySetInnerHTML={{ __html: svgContent ?? '' }}
      className="overflow-hidden stroke-white"
    />
  );
}
