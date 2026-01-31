'use client';

import Link from 'next/link';
import headerData from '@/data/HeaderData.json';

export default function Header() {
  return (
    <div className="fixed top-6 left-1/2 z-50 flex -translate-x-1/2 items-center space-x-4">
      {/* Logo */}
      <Link href="/" aria-label="Homepage">
        <img
          src="/images/mainLogo.svg"
          alt="Nidhi Baindur Logo"
          className="h-56 w-56 object-contain cursor-pointer"
        />
      </Link>

      {/* Navigation */}
      <nav className="flex h-14 items-center justify-center space-x-2 rounded-2xl border border-white/30 bg-white/20 px-4 shadow-lg ring-1 ring-white/20 backdrop-blur-xl transition-all duration-300 sm:space-x-6 sm:px-8 dark:border-white/10 dark:bg-neutral-900/20">
        {headerData.map(({ href, label }) => {
          const isExternal = href.startsWith('http');

          return (
            <Link
              key={href}
              href={href}
              target={isExternal ? '_blank' : '_self'}
              rel={isExternal ? 'noopener noreferrer' : undefined}
            >
              <button className="flex h-10 items-center justify-center rounded-xl px-4 text-sm font-medium text-neutral-900 transition-all duration-200 hover:scale-[1.10] hover:bg-white/50 dark:text-neutral-100 dark:hover:bg-white/10">
                {label}
              </button>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
