import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { createShortUrl } from "./action";
import { getUserUrls } from "./action";

export default async function DashboardPage() {
  const urls = await getUserUrls();

  return (
    <div className="max-w-xl space-y-6">
      <h1 className="text-2xl font-bold">URL Shortener</h1>

      <form
        action={async (formData) => {
          "use server";
          const originalUrl = formData.get(
            "url"
          ) as string;
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
    className="rounded border p-2 text-sm space-y-1"
  >
    <p>
      <strong>Short URL:</strong>{" "}
      <a
        href={`/r/${url.short_code}`}
        target="_blank"
        className="text-blue-600 underline"
      >
        {`http://localhost:3000/r/${url.short_code}`}
      </a>
    </p>

    <p className="text-gray-500 break-all">
      {url.original_url}
    </p>
  </div>
))}
      </div>
    </div>
  );
}
