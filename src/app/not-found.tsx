import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-[#2f2f2f] px-4">
      <div className="text-center">
        <h1 className="text-8xl sm:text-9xl font-bold text-gray-200 dark:text-gray-700">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 rounded-lg font-semibold
              bg-gray-900 text-white hover:bg-gray-800
              dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100
              transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-lg font-semibold
              border-2 border-gray-900 text-gray-900 hover:bg-gray-100
              dark:border-white dark:text-white dark:hover:bg-white/10
              transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
