"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server";
import { generateShortCode } from "@/lib/utils/generateShortCode";
import { revalidatePath } from "next/cache";

export async function createShortUrl(originalUrl: string) {
  // ✅ Normalize URL (real SaaS behavior)
  if (!originalUrl.startsWith("http")) {
    originalUrl = "https://" + originalUrl;
  }

  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Not authenticated");
  }

  const shortCode = generateShortCode();

  const { error } = await supabase.from("short_urls").insert({
    user_id: user.id,
    original_url: originalUrl,
    short_code: shortCode,
  });

  if (error) {
    throw new Error("Failed to create short URL");
  }

  // 🔥 THIS MAKES THE UI UPDATE AUTOMATICALLY
  revalidatePath("/dashboard");
}

export async function getUserUrls() {
  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Not authenticated");
  }

  const { data, error } = await supabase
    .from("short_urls")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error("Failed to fetch URLs");
  }

  return data;
}

export async function deleteShortUrl(id: string) {
  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Not authenticated");
  }

  const { error } = await supabase
    .from("short_urls")
    .delete()
    .eq("id", id);

  if (error) {
    throw new Error("Failed to delete URL");
  }

  // 🔥 Refresh dashboard automatically
  revalidatePath("/dashboard");
}
