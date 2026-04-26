'use client';

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

function Media({ className, imgClassName }: { className?: string; imgClassName?: string }) {
  return (
    <div
      className={cn(
        'absolute top-6 right-6 h-[160px] w-[220px] overflow-hidden rounded-3xl bg-main-theme/70 shadow-md ring-1 ring-black/5',
        className
      )}
    >
      <div className="relative h-full w-full">
        <Image
          src="/images/hero.jpeg"
          alt=""
          fill
          className={cn('object-cover', imgClassName)}
          sizes="240px"
          priority
        />
      </div>
    </div>
  );
}

function Tile({
  title,
  description,
  className,
  surface,
  children,
}: {
  title: string;
  description: string;
  className: string;
  surface: string;
  children?: React.ReactNode;
}) {
  return (
    <Card
      className={cn(
        'relative overflow-hidden rounded-[28px] border-0 shadow-sm',
        surface,
        className
      )}
    >
      <div className="p-7">
        <h3 className="text-2xl font-semibold tracking-tight text-black/90">{title}</h3>
        <p className="mt-2 max-w-[34ch] text-sm leading-relaxed text-black/60">{description}</p>
      </div>

      {children}
    </Card>
  );
}

export default function BentoGrid() {
  return (
    <section className="w-full py-14">
      {/* width matches a normal marketing site container */}
      <div className="mx-auto w-full max-w-6xl px-6">
        <div
          className={cn(
            'grid gap-6',
            'grid-cols-1',
            // desktop blueprint
            'lg:[grid-auto-rows:230px] lg:grid-cols-12'
          )}
        >
          {/* 1) Left tall (spans 2 rows) */}
          <Tile
            title="Ecolab"
            description="Prep N Print"
            surface="bg-[#AADCF2]"
            className="lg:col-span-5 lg:row-span-2"
          >
          </Tile>

          {/* 2) Top-right horizontal */}
          <Tile
            title="SMS Study"
            description="Part of the School Action Team (SAT) within the RIT School of Mathematical Sciences and working to address gaps in graduation rates in Math between students who identify as ALANA and their non-ALANA counterparts."
            surface="bg-[#F9BDB0]"
            className="lg:col-span-7 lg:row-span-1"
          >
          </Tile>

          {/* 3) Middle-right: Wallet (square-ish) */}
          <Tile
            title="Cryptocurrencies like Bitcoin and Ethereum and forward inflation expectation rates"
            description="Access all your gifts and save up your Givingli Cash."
            surface="bg-[#F09367]"
            className="lg:col-span-4 lg:row-span-1"
          >
          </Tile>

          {/* 3) Middle-right: Inbox (square) */}
          <Tile
            title="Add Project"
            description="Track your gifts, group chats, and sent cards."
            surface="bg-[#D1D48B]"
            className="lg:col-span-3 lg:row-span-1"
          >
          </Tile>

          {/* 4) Bottom: wide rectangle (Send Gifts) — spans left + wallet width */}
          <Tile
            title="Integrating climate network analysis with machine learning in ENSO forecasting"
            description="Send as a group with friends or individually."
            surface="bg-[#FEC67C]"
            className="lg:col-span-9 lg:row-span-1"
          >
          </Tile>

          {/* 4) Bottom: narrow rectangle (Reminders) — same width as Inbox */}
          <Tile
            title="Computational Modelling of Plant Hormone Biosynthesis"
            description="Never miss a birthday or special occasion again."
            surface="bg-[#B99ABB]"
            className="lg:col-span-3 lg:row-span-1"
          >
          </Tile>
        </div>
      </div>
    </section>
  );
}
