"use client";

import { supabase } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { deleteAccount } from "./action";
import Link from "next/link";

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
    <div className="max-w-2xl mx-auto space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="mt-2 text-sm text-gray-600">Manage your account preferences</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm space-y-6">
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">Account Actions</h2>
          <p className="text-sm text-gray-600">Manage your session and account</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-100">
          <Button 
            variant="outline" 
            onClick={handleLogout}
            className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors"
          >
            Logout
          </Button>

          <Button 
            variant="destructive" 
            onClick={handleDelete}
            className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 transition-colors"
          >
            Delete Account
          </Button>
        </div>
      </div>
    </div>
  );
}
