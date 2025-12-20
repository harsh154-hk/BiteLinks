"use client";

import { supabase } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { deleteAccount } from "./action";

export default function SettingsPage() {
  const router = useRouter();

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/login");
  }

  async function handleDelete() {
    const confirmed = confirm(
      "This will permanently delete your account. Continue?"
    );

    if (!confirmed) return;

    await deleteAccount();
    router.push("/login");
  }

  return (
    <div className="max-w-lg space-y-6">
      <h1 className="text-2xl font-bold">Settings</h1>

      <Button variant="outline" onClick={handleLogout}>
        Logout
      </Button>

      <Button variant="destructive" onClick={handleDelete}>Delete Account</Button>
    </div>
  );
}
