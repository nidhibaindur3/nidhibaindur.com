'use client';

import Link from 'next/link';
import * as Icons from 'lucide-react';
import headerData from '@/data/HeaderData.json';

export default function Header() {
  return (
    <nav className="fixed top-6 left-1/2 z-50 flex h-14 -translate-x-1/2 items-center justify-center space-x-2 rounded-2xl border border-white/30 bg-white/20 px-4 shadow-lg ring-1 ring-white/20 backdrop-blur-xl transition-all duration-300 sm:space-x-6 sm:px-8 dark:border-white/10 dark:bg-neutral-900/20">
      {headerData.map(({ href, label, icon }) => {
        const isExternal = href.startsWith('http');

        // Resolve icon dynamically from lucide-react
        const Icon =
          (Icons as unknown as Record<string, React.ElementType>)[icon] ?? Icons.HelpCircle;

        return (
          <Link
            key={href}
            href={href}
            target={isExternal ? '_blank' : '_self'}
            rel={isExternal ? 'noopener noreferrer' : undefined}
          >
            <button className="flex h-10 items-center justify-center gap-2 rounded-xl px-4 text-sm font-medium text-neutral-900 transition-all duration-200 hover:scale-[1.10] hover:bg-white/50 dark:text-neutral-100 dark:hover:bg-white/10">
              <span className="hidden md:inline">{label}</span>
              <Icon className="h-4 w-4" />
            </button>
          </Link>
        );
      })}
    </nav>
  );
}
