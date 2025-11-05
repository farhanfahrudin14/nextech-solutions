import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { allPosts } from "../data";

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = allPosts.find((item) => item.slug === slug);

  if (!post) return notFound();

  return (
    <main className="bg-white min-h-screen">
      <section className="py-20 px-6 max-w-4xl mx-auto text-gray-800">
        {/* Judul */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          {post.title}
        </h1>

        {/* Tanggal */}
        <p className="text-gray-500 mb-10">{post.date}</p>

        {/* Gambar utama */}
        <div className="w-full h-80 md:h-[500px] mb-10 relative rounded-2xl overflow-hidden shadow-sm">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Konten artikel */}
        <article
          className="prose prose-blue max-w-none text-gray-700 leading-relaxed mb-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Link balik ke daftar blog */}
        <div className="text-center">
          <Link
            href="/blog"
            className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            ← Kembali ke Daftar Blog
          </Link>
        </div>
      </section>
    </main>
  );
}
