import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/admin";

export async function GET(
  request: Request,
  context: { params: Promise<{ code: string }> }
) {
  // ✅ THIS IS THE FIX
  const { code } = await context.params;

  const { data, error } = await supabaseAdmin
    .from("short_urls")
    .select("original_url")
    .eq("short_code", code)
    .single();

  if (error || !data) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.redirect(
    new URL(data.original_url, request.url)
  );
}
