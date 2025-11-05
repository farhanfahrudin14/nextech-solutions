import Link from "next/link";
import Image from "next/image";
import { allPosts } from "./data";

export default function BlogPage() {
  return (
    <main className="bg-white min-h-screen">
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Artikel Terbaru
        </h1>

        <div className="space-y-16">
          {allPosts.map((post) => (
            <div
              key={post.slug}
              className="grid md:grid-cols-2 gap-10 items-center border-b border-gray-200 pb-10"
            >
              {/* Gambar */}
              <div className="relative w-full h-64 md:h-72 rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Konten */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm mb-4">{post.date}</p>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 font-medium hover:underline"
                >
                  Lihat selengkapnya →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
