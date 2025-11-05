"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Promo {
  title: string;
  desc: string;
  img: string;
  label: string;
  info: string;
}

export default function Home() {
  const [current, setCurrent] = useState<number>(0);
  const [openImage, setOpenImage] = useState<string | null>(null);
  const [direction, setDirection] = useState<number>(0);

  const promos: Promo[] = [
    {
      title: "Promo Pembuatan Landing Page seharga 490k",
      desc: "Buat landing page dengan performa top, design yang cantik, dan proses cepat.",
      img: "/images/coba.jpg",
      label: "Promo",
      info: "Promo aktif bulan ini • Kuota terbatas",
    },
    {
      title: "Gratis Konsultasi Desain Website",
      desc: "Konsultasi kebutuhan websitemu secara gratis dengan tim kami.",
      img: "/images/promo-consult.png",
      label: "Gratis",
      info: "Tersedia untuk pelanggan baru • Berlaku bulan ini",
    },
    {
      title: "Diskon 25% untuk Sistem Informasi Instansi",
      desc: "Bangun sistem informasi kampus atau instansi dengan harga hemat.",
      img: "/images/promo-sistem.png",
      label: "Diskon",
      info: "Berlaku hingga akhir bulan • Kuota terbatas",
    },
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % promos.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + promos.length) % promos.length);
  };

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
     <section className="flex flex-col md:flex-row items-center justify-between min-h-[90vh] px-6 md:px-20 pt-20">

        <div className="text-center md:text-left md:w-1/2 space-y-6">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-blue-600 leading-tight"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Solusi Kebutuhan Digital Terbaik, Bersama {" "}
            <span className="text-gray-900">NexTechSolution</span> 
          </motion.h1>

          <motion.p
            className="text-sm md:text-base text-gray-600 max-w-lg mx-auto md:mx-0"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Kami menyediakan berbagai layanan digital mulai dari pembuatan website, desain UI/UX, dokumentasi digital seperti flowchart & wireframe, dan layanan lainnya — semua dikerjakan secara profesional.
          </motion.p>

          <motion.div
           className="flex flex-col md:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a
              href="/process"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-md transition-all"
            >
              Lihat Proses
            </a>
            <a
              href="/contact"
              className="border border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 px-8 py-3 rounded-full font-semibold transition-all"
            >
              Hubungi Kami
            </a>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 md:mt-0 md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <Image
              src="/images/image.png"
              alt="Ilustrasi Pembuatan Website"
              width={500}
              height={500}
              className="w-[500px] md:w-[500px] object-contain drop-shadow-lg"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Tentang Kami */}
      <section className="py-16 bg-gray-50 text-center px-6">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Tentang NexTechSolution
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
        NexTechSolution adalah penyedia layanan digital yang berfokus pada pembuatan website,
         desain UI/UX, serta pembuatan dokumen visual seperti flowchart dan wireframe. 
         Kami menghadirkan solusi modern yang responsif, mudah digunakan, dan dirancang untuk 
         mendukung perkembangan bisnismu agar semakin relevan dan kompetitif di era digital.
        </p>
      </section>

      {/* Layanan Unggulan */}
      <section className="py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Layanan Unggulan
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
           {
    title: "Pembuatan Website",
    desc: "Website profesional untuk bisnis, portofolio, hingga sistem informasi.",
  },
  {
    title: "UI/UX Design",
    desc: "Desain antarmuka modern dan pengalaman pengguna yang lebih optimal.",
  },
  {
    title: "Dokumentasi Sistem",
    desc: "Pembuatan flowchart, wireframe, dan dokumen visual pendukung proyek.",
  },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-600">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

   <section className="pt-8 pb-14 px-4 md:pt-10 md:pb-18 flex flex-col items-center bg-[#f9fafb] relative overflow-hidden">
  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 text-center">
    Promo Spesial Bulan Ini
  </h2>

  <div className="relative max-w-5xl w-full">
    {/* Wrapper */}
    <div className="relative overflow-hidden rounded-3xl min-h-[470px] md:h-[360px] flex items-center justify-center">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={current}
          initial={{ x: direction === 1 ? 150 : -150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction === 1 ? -150 : 150, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
          className="absolute w-full bg-white border border-gray-100 rounded-3xl shadow-lg
          p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-10
          text-center md:text-left"
        >
          {/* Text */}
          <div className="w-full md:w-1/2">
            <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
              {promos[current].label}
            </span>
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-800">
              {promos[current].title}
            </h3>
            <p className="text-gray-600 mb-5">{promos[current].desc}</p>

            <a
              href="#"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl font-semibold transition-all shadow-sm"
            >
              Lihat Detail Promo
            </a>

            <p className="text-sm text-gray-500 mt-4">
              {promos[current].info}
            </p>
          </div>

          {/* Image */}
          <motion.div
            key={promos[current].img}
            initial={{ opacity: 0.7, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full md:w-1/2 cursor-pointer flex justify-center px-3 md:px-0"
            onClick={() => setOpenImage(promos[current].img)}
          >
            <Image
              src={promos[current].img}
              alt={promos[current].title}
              width={480}
              height={280}
              className="rounded-xl border shadow-sm 
              object-cover 
              w-full h-44 xs:h-52 sm:h-60 
              md:h-auto md:object-contain"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>

    {/* Tombol kiri-kanan (Desktop) */}
    <button
      onClick={prevSlide}
      className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 
      bg-gradient-to-br from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600
      w-12 h-12 items-center justify-center rounded-full text-white text-lg shadow-xl 
      transition-all duration-300 active:scale-90 z-20 pointer-events-auto border border-white/30"
    >
      ❮
    </button>

    <button
      onClick={nextSlide}
      className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 
      bg-gradient-to-br from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600
      w-12 h-12 items-center justify-center rounded-full text-white text-lg shadow-xl 
      transition-all duration-300 active:scale-90 z-20 pointer-events-auto border border-white/30"
    >
      ❯
    </button>

    {/* Tombol bawah (Mobile) */}
    <div className="flex md:hidden justify-center gap-5 mt-6">
      <button
        onClick={prevSlide}
        className="bg-gradient-to-br from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 
        w-12 h-12 flex items-center justify-center rounded-full 
        text-white text-xl shadow-xl border border-white/20
        transition-all duration-300 active:scale-90"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="bg-gradient-to-br from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 
        w-12 h-12 flex items-center justify-center rounded-full 
        text-white text-xl shadow-xl border border-white/20
        transition-all duration-300 active:scale-90"
      >
        ❯
      </button>
    </div>
  </div>

  {/* 🖼️ Modal Gambar */}
  <AnimatePresence>
    {openImage && (
      <motion.div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setOpenImage(null)}
      >
        <motion.div
          className="bg-white/95 p-4 rounded-2xl shadow-2xl max-w-3xl border border-gray-200"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.35 }}
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={openImage}
            alt="Promo Image"
            width={800}
            height={500}
            className="rounded-xl object-contain"
          />
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
</section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Semua Bisa Lebih Mudah dengan Dukungan Kami
        </h2>
        <p className="mb-8 text-blue-100">
          Mulai langkah digitalmu bersama NexTechSolution sekarang juga!
        </p>
        <a
          href="/contact"
          target="_blank"
          className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-50 transition-all"
        >
          Mulai Konsultasi
        </a>
      </section>
    </main>
  );
}
