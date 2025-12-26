import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="bg-background text-foreground mx-auto flex min-h-screen max-w-screen-lg flex-col items-center justify-center px-4">
      <div className="mb-2 flex items-center space-x-4">
        <h1 className="mb-1 text-center text-5xl font-extrabold sm:text-6xl md:text-7xl">404</h1>
        <p className="text-secondary text-left text-xl font-medium tracking-tighter">
          We&apos;re still building most of Servera&apos;s platform.
          <br />
          Some features may not be implemented yet!
        </p>
      </div>
      <div className="flex space-x-4">
        <Link
          href="/"
          className="bg-company hover:bg-company/70 text-background cursor-pointer rounded-md px-4 py-2 font-semibold transition-colors duration-300 ease-in-out"
        >
          Visit our Homepage
        </Link>
      </div>
    </section>
  );
}
