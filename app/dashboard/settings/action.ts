"use server";

import { supabaseAdmin } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function deleteAccount() {
  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Not authenticated");
  }

  // Delete user from Supabase Auth
  const { error } = await supabaseAdmin.auth.admin.deleteUser(
    user.id
  );

  if (error) {
    throw new Error("Failed to delete account");
  }

  return { success: true };
}
