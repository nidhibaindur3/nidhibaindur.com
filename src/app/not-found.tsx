import { FrownIcon } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="bg-background text-foreground mx-auto flex min-h-screen max-w-screen flex-col items-center justify-center px-4">
      <div className="flex flex-col items-center space-y-2 text-center">
        <div className="flex items-center space-x-2">
          <h1 className="text-6xl font-extrabold sm:text-7xl">404</h1>
        </div>
        <p className="text-secondary-theme flex items-center gap-2 text-xl font-medium">
          Hi, you might have gotten lost <FrownIcon className="text-secondary-theme h-6 w-6" />
        </p>
        <p className="text-md text-muted-foreground">
          If not, please contact us at{' '}
          <a href="mailto:help@nidhibaindur.com" className="hover:text-main-theme underline">
            help@nidhibaindur.com
          </a>
        </p>
      </div>

      <div className="mt-6">
        <Link
          href="/"
          className="bg-main-theme hover:bg-main-theme/70 text-secondary-theme cursor-pointer rounded-md px-4 py-2 font-semibold transition-colors duration-300 ease-in-out"
        >
          Visit our Homepage
        </Link>
      </div>
    </section>
  );
}
