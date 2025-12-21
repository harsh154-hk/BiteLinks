"use client";

import { Menu } from "lucide-react";

export default function Navbar({
  onMenuClick,
}: {
  onMenuClick: () => void;
}) {
  return (
    <header className="md:hidden flex items-center justify-between border-b px-4 py-3">
      <h1 className="text-lg font-bold">Doupple</h1>

      <button onClick={onMenuClick}>
        <Menu className="h-6 w-6" />
      </button>
    </header>
  );
}
