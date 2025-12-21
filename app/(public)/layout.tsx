import Link from "next/link";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                <Link href="/">BiteLinks</Link>
              </h2>
            </div>

            {/* Navigation Actions */}
            <div className="flex items-center gap-3">
              <Link
                href="/login"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                Login
              </Link>
              <Link
                href="/login"
                className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="min-h-screen">{children}</main>

      <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 text-center">
          <p className="text-sm text-gray-400">
            © 2025 BiteLinks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    </>
  );
}
