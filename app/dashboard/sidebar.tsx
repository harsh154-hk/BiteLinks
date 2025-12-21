"use client";

import Link from "next/link";

export default function Sidebar({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <>
      {/* Overlay (mobile only) */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed z-50 inset-y-0 left-0 w-64 bg-gray-50 border-r p-4
          transform transition-transform duration-300
          md:static md:translate-x-0
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <h2 className="text-xl font-bold mb-6">Doupple</h2>

        <nav className="space-y-2">
          <Link
            href="/dashboard"
            className="block rounded px-3 py-2 hover:bg-gray-200"
            onClick={onClose}
          >
            URL Shortener
          </Link>

          <Link
            href="/dashboard/settings"
            className="block rounded px-3 py-2 hover:bg-gray-200"
            onClick={onClose}
          >
            Settings
          </Link>
        </nav>
      </aside>
    </>
  );
}
