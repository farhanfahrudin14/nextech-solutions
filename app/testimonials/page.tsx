"use client";

import Image from "next/image";

interface Testimonial {
  image: string;
  caption: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    image: "/images/testi/1.jpeg",
    caption: "Testimoni WA",
    date: "2 November 2025",
  },
  {
    image: "/images/testi/testi-wa2.png",
    caption: "Testimoni WA",
    date: "28 Oktober 2025",
  },
  {
    image: "/images/testi/testi-wa3.png",
    caption: "Testimoni WA",
    date: "15 Oktober 2025",
  },
];

export default function Testimonials() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f0fdf4] to-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
          Testimoni Lewat WhatsApp
        </h1>
        <p className="text-gray-600 mb-12">
          Bukti nyata kepuasan klien yang telah mempercayakan project mereka.
        </p>

        {/* Gambar Testimoni */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 border border-gray-100"
            >
              {/* Gambar */}
              <div className="relative w-full h-80">
                <Image
                  src={t.image}
                  alt={t.caption}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Caption dan tanggal */}
              <div className="p-4 text-center bg-gray-50">
                <p className="text-gray-700 text-sm font-medium mb-1">
                  {t.caption}
                </p>
                <p className="text-gray-400 text-xs">{t.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
