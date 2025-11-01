export default function QuoteCard({quotes,
  fade,
}: {
  quotes: string[];
  fade: boolean;
}) {
  return (
    <div className="flex flex-col items-center space-y-6">
      {quotes.map((quote, index) => (
        <div
          key={index}
          className={`bg-gray-800 shadow-lg rounded-2xl p-6 max-w-md text-center transition-all duration-700 ${
            fade ? 'animate-fadeIn' : ''
          }`}
        >
          <p className="text-gray-300 italic">
            “{quote || "Click below to fetch a quote"}”
          </p>
        </div>
      ))}
    </div>
  );
}
