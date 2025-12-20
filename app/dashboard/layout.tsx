import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-gray-50 p-4">
        <h2 className="text-xl font-bold mb-6">Doupple</h2>

        <nav className="space-y-2">
          <Link
            href="/dashboard"
            className="block rounded px-3 py-2 hover:bg-gray-200"
          >
            URL Shortener
          </Link>

          <Link
            href="/dashboard/settings"
            className="block rounded px-3 py-2 hover:bg-gray-200"
          >
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main area */}
      <div className="flex flex-1 flex-col">
        {/* Top navbar */}
        <header className="border-b p-4">
          Dashboard
        </header>

        {/* Page content */}
        <main className="flex-1 p-6 bg-white">
          {children}
        </main>
      </div>
    </div>
  );
}
