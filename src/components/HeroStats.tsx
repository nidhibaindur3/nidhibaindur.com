import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animation';

type Stat = { label: string; value: string };

export function HeroStats({ stats }: { stats: Stat[] }) {
  return (
    <motion.dl
      variants={fadeUp(0.6)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid gap-6 rounded-3xl border border-neutral-200/70 bg-white/70 p-6 shadow-sm backdrop-blur-md sm:grid-cols-3"
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          whileHover={{ y: -3 }}
          transition={{ type: 'spring', stiffness: 150 }}
          className="space-y-2 text-center sm:text-left"
        >
          <dd className="text-3xl font-semibold text-neutral-900">{stat.value}</dd>
          <dt className="text-sm text-neutral-500">{stat.label}</dt>
        </motion.div>
      ))}
    </motion.dl>
  );
}
