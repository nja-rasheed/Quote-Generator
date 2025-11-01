'use client';
import { useState, useEffect } from "react";
import QuoteCard from "./components/QuoteCard";

export default function HomePage() {
  const [quotes, setQuotes] = useState<string[]>([""]);
  const [author, setAuthor] = useState<string>("");
  const [fade, setFade] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  async function fetchQuote() {
    setFade(false);
    setLoading(true);
    const res = await fetch('/api');
    const data = await res.json();
    setQuotes(data.message.map((quote: { q: string; a: string }) => quote.q));
    setAuthor(data.message[0].a);
    setTimeout(() => setFade(true), 50);
    setLoading(false);
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100 p-6">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-10 text-pink-400">
        Daily Quote Generator
      </h1>

      {/* Quote Card */}
      {loading ? (
        <p className="text-gray-400 text-lg animate-pulse">Fetching quote...</p>
      ) : (
        <QuoteCard quotes={quotes} fade={fade} />
      )}

      {/* Button */}
      <button
        onClick={fetchQuote}
        className="mt-10 px-6 py-3 bg-pink-500 hover:bg-pink-600 rounded-full text-white font-semibold transition-colors duration-300"
      >
        Fetch New Quote
      </button>
    </div>
  );
}
