"use client";

import { deleteShortUrl } from "./action";

export default function DeleteUrlButton({ id }: { id: string }) {
  async function handleDelete() {
    const confirmed = confirm("Delete this short URL?");
    if (!confirmed) return;

    await deleteShortUrl(id);
  }

  return (
    <button
      onClick={handleDelete}
      className="text-red-600 hover:underline text-sm"
    >
      Delete
    </button>
  );
}
