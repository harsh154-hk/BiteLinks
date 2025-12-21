import Link from "next/link";

export default function HomePage() {
  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold">
        Welcome to Doupple
      </h1>

      <p className="mt-4 text-gray-600">
        Build your own AI chatbot for your website.
      </p>
      <Link href="/login"> <button>Try Now</button></Link>
    </section>
  );
}
