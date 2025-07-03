import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-50 text-gray-900">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold">BookProLingo</h1>
        <p className="mt-2 text-lg">Professional Interpreter & Translator – Ra’ad Mahmoud Al-Abbo</p>
        <div className="mt-4 space-x-4">
          <a href="/cv/raad_alabbo_cv.pdf" className="text-blue-600 underline" download>Download CV</a>
          <a href="/cv/raad_alabbo_recommendation.pdf" className="text-blue-600 underline" download>Download Recommendation Letter</a>
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-3 text-center">
        <Link href="/booking">
          <div className="p-6 bg-white shadow rounded-xl cursor-pointer hover:bg-blue-50">
            <h2 className="text-xl font-semibold">Book Interpretation</h2>
            <p className="mt-2">Simultaneous / Consecutive / Zoom</p>
          </div>
        </Link>
        <Link href="/translation">
          <div className="p-6 bg-white shadow rounded-xl cursor-pointer hover:bg-green-50">
            <h2 className="text-xl font-semibold">Written Translation</h2>
            <p className="mt-2">Document translation with pricing</p>
          </div>
        </Link>
        <Link href="/gallery">
          <div className="p-6 bg-white shadow rounded-xl cursor-pointer hover:bg-yellow-50">
            <h2 className="text-xl font-semibold">Gallery</h2>
            <p className="mt-2">Event photos & past work</p>
          </div>
        </Link>
      </section>

      <footer className="mt-12 text-center text-sm text-gray-500">
        © 2025 Ra’ad Mahmoud Al-Abbo. All rights reserved.
      </footer>
    </main>
  );
}
