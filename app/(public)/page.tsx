import Link from "next/link";

export default function HomePage() {
  return(
  <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Shorten URLs.
            <br />
            Track Performance.
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transform long, complex URLs into short, memorable links that are easy to share and track.
          </p>
          <Link
            href="/login"
            className="inline-block px-8 py-3 text-base font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Get Started Free
          </Link>
        </div>

        {/* Visual Demo */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-500">Before:</span>
              <div className="flex-1 bg-white rounded-lg px-4 py-3 text-sm text-gray-400 border border-gray-200 overflow-hidden">
                https://example.com/blog/2024/article-title-with-many-words?utm_source=...
              </div>
            </div>
            <div className="flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-900">After:</span>
              <div className="flex-1 bg-white rounded-lg px-4 py-3 text-sm text-gray-900 font-medium border border-gray-300">
                bitelinks.co/abc123
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
          Why Choose BiteLinks?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Lightning Fast</h3>
            <p className="text-gray-600">
              Create short links in seconds. No complicated setup required.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Track Analytics</h3>
            <p className="text-gray-600">
              Monitor clicks, locations, and devices in real-time.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
            <p className="text-gray-600">
              Your links are protected and always available.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-gray-200">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
          How It Works
        </h2>
        
        <div className="space-y-12">
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold">
              1
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Paste Your URL</h3>
              <p className="text-gray-600">
                Copy any long URL and paste it into BiteLinks. Works with any website.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold">
              2
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Customize (Optional)</h3>
              <p className="text-gray-600">
                Create a custom alias or let us generate a short link automatically.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold">
              3
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Share & Track</h3>
              <p className="text-gray-600">
                Share your short link anywhere and watch the analytics roll in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-gray-900 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Join thousands of users who trust BiteLinks for their URL shortening needs.
          </p>
          <Link
            href="/login"
            className="inline-block px-8 py-3 text-base font-medium text-gray-900 bg-white rounded-lg hover:bg-gray-100 transition-colors"
          >
            Create Your First Link
          </Link>
        </div>
      </section>
    </div>
  );
}