'use client';

import { useEffect, useState } from 'react';
import { getNormalizedThemeColor } from '@/utils/color';

export function useNormalizedThemeColor() {
  const [color, setColor] = useState<[number, number, number] | null>(null);

  useEffect(() => {
    const result = getNormalizedThemeColor();
    queueMicrotask(() => setColor(result));
  }, []);

  return color;
}
