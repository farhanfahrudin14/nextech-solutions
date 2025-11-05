"use client";

import { motion } from "framer-motion";

const steps = [
  {
  title: "Analisis & Riset Kebutuhan",
  desc: "Memahami tujuan proyek, target pengguna, dan masalah yang ingin diselesaikan untuk menentukan arah solusi yang tepat.",
},
{
  title: "Perancangan Konsep & Alur",
  desc: "Menyusun ide, strategi, serta flowchart atau struktur awal sebagai dasar pengembangan desain dan sistem.",
},
{
  title: "Desain & Prototyping",
  desc: "Membuat wireframe, desain UI/UX, atau rancangan visual interaktif sebagai bentuk representasi awal hasil akhir.",
},
{
  title: "Pengembangan & Implementasi",
  desc: "Mewujudkan konsep dan desain menjadi produk digital nyata — baik website, sistem, maupun elemen visual lainnya.",
},
{
  title: "Uji Kualitas & Validasi",
  desc: "Melakukan pengujian fungsi, tampilan, dan pengalaman pengguna untuk memastikan hasil sesuai standar profesional.",
},
{
  title: "Review, Revisi, & Finalisasi",
  desc: "Menyesuaikan hasil berdasarkan feedback klien dan memastikan semua detail terselesaikan dengan sempurna.",
},
{
  title: "Peluncuran & Pemeliharaan",
  desc: "Meluncurkan hasil akhir serta menyediakan dukungan dan pembaruan agar performa tetap optimal.",
},
];

export default function Process() {
  return (
    <main className="bg-gray-50 pt-[100px] pb-[100px] px-6 md:px-20">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Proses Alur Kerja
      </motion.h1>
      <p className="text-gray-600 max-w-2xl mx-auto text-center mb-12">
        Alur kerja kami yang transparan, terukur, dan memastikan hasil sesuai ekspektasi.
      </p>

      <div className="flex flex-col md:grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-2xl p-6 shadow-md border-l-4 border-blue-600 cursor-pointer will-change-transform"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05, y: -5 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.4, type: "spring", stiffness: 120 }}
          >
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold mr-4">
                {i + 1}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
            </div>
            <p className="text-gray-600">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
