import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch('https://zenquotes.io/api/quotes', {
    cache: "no-store", // optional, ensures a new quote every time
  });
  
  if (!res.ok) {
    return NextResponse.json({ error: "Failed to fetch quote" }, { status: 500 });
  }

  const data = await res.json();
  const tenQuotes = data.slice(0, 10);
  console.log(data[0].q);

  return NextResponse.json({ message: tenQuotes });
}
