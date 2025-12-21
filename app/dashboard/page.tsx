import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { createShortUrl } from "./action";
import { getUserUrls } from "./action";
import { deleteShortUrl } from "./action";
import DeleteUrlButton from "./DeleteUrlButton";
import { cookies } from "next/headers";


export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  cookies();
  const urls = await getUserUrls();

  return (
    <div className="max-w-xl space-y-6">
      <h1 className="text-2xl font-bold">URL Shortener</h1>

      <form
        action={async (formData) => {
          "use server";
          const originalUrl = formData.get("url") as string;
          await createShortUrl(originalUrl);
        }}
        className="flex gap-2"
      >
        <Input name="url" placeholder="Enter long URL" />
        <Button type="submit">Shorten</Button>
      </form>

      <div className="space-y-2">
        {urls.map((url) => (
          <div
            key={url.id}
            className="rounded border p-3 text-sm space-y-2 flex justify-between items-start"
          >
            <div>
              <p>
                <strong>Short URL:</strong>{" "}
                <a
                  href={`/r/${url.short_code}`}
                  target="_blank"
                  className="text-blue-600 underline"
                >
                  {`/r/${url.short_code}`}
                </a>
              </p>

              <p className="text-gray-500 break-all">{url.original_url}</p>
            </div>

            <DeleteUrlButton id={url.id} />

          </div>
        ))}
      </div>
    </div>
  );
}
