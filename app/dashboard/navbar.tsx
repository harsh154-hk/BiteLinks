"use client";

import { Menu } from "lucide-react";

export default function Navbar({
  onMenuClick,
}: {
  onMenuClick: () => void;
}) {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
      {/* Left side */}
      <h1 className="text-lg font-bold text-gray-900 tracking-tight">Dashboard</h1>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* Hamburger — mobile only */}
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5 text-gray-700" />
        </button>
      </div>
    </header>
  );
}
