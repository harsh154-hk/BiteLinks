import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  createShortUrl,
  getUserUrls,
} from "./action";
import DeleteUrlButton from "./DeleteUrlButton";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const urls = await getUserUrls();

  return (
    <div className="max-w-3xl mx-auto space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          URL Shortener
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          Create and manage your short links
        </p>
      </div>

      {/* Create URL Form */}
      <form
        action={async (formData) => {
          "use server";
          const originalUrl = formData.get("url") as string;
          await createShortUrl(originalUrl);
        }}
        className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col sm:flex-row gap-3"
      >
        <Input
          name="url"
          placeholder="Enter long URL"
          required
          className="flex-1"
        />

        <Button type="submit">
          Shorten
        </Button>
      </form>

      {/* URLs List */}
      <div className="space-y-3">
        {urls.map((url) => (
          <div
            key={url.id}
            className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow flex justify-between items-start gap-4"
          >
            <div className="flex-1 min-w-0 space-y-3">
              <p className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                  Short URL:
                </span>

                <a
                  href={`/r/${url.short_code}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-gray-900 hover:text-gray-700 transition-colors"
                >
                  {`/r/${url.short_code}`}
                </a>
              </p>

              <p className="text-sm text-gray-600 break-all pt-2 border-t border-gray-100">
                {url.original_url}
              </p>
            </div>

            <DeleteUrlButton id={url.id} />
          </div>
        ))}
      </div>
    </div>
  );
}
