import { siNextdotjs, siTailwindcss, siCloudflare, siSupabase, siFigma } from 'simple-icons';

type Props = {
  name: string;
  className?: string;
};

const ICONS: Record<string, { svg: string; hex: string }> = {
  'Next.js': siNextdotjs,
  'Tailwind CSS': siTailwindcss,
  Cloudflare: siCloudflare,
  Supabase: siSupabase,
  Figma: siFigma,
};

export default function BrandIcon({ name, className }: Props) {
  const icon = ICONS[name];
  if (!icon) return null;

  return (
    <span
      className={`inline-flex items-center justify-center ${className}`}
      dangerouslySetInnerHTML={{
        __html: icon.svg.replace(/fill="[^"]*"/g, 'fill="currentColor"'),
      }}
      style={{ color: `#${icon.hex}` }}
    />
  );
}
