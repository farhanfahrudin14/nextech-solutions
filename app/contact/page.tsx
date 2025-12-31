"use client";

import { useState, useRef } from "react";
import {
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";

export default function ContactPage() {
  const [nama, setNama] = useState("");
  const [noWa, setNoWa] = useState("");
  const [pesan, setPesan] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nama || !noWa || !pesan) {
      alert("Harap isi semua data sebelum lanjut ke WhatsApp!");
      return;
    }

    const targetNumber = "6283894301502";
    const message = `
Halo *Admin NexTechSolutions*!  
Saya, ${nama}.  
No HP: ${noWa}
Keperluan:
${pesan}

Terima kasih.`;

    const waLink = `https://wa.me/${targetNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(waLink, "_blank");
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "nextechsolutions.id@gmail.com",
      href: "mailto:halo@webinaja.com",
    },
    {
      icon: <FaWhatsapp />,
      title: "Phone",
      value: "(+62) 838 9430 1502",
      href: "https://wa.me/6283894301502",
    },
    {
      icon: <FaInstagram />,
      title: "Instagram",
      value: "@nextech_solutions.id",
      href: "https://www.instagram.com/nextech_solutions.id?igsh=dTJjc3VoaXMwODBz",
    },
    {
      icon: <FaTwitter />,
      title: "X (Twitter)",
      value: "@nextech_solutions.id",
      href: "https://x.com/webinaja",
    },
    {
      icon: <FaTiktok />,
      title: "TikTok",
      value: "@nextech_solutions.id",
      href: "https://www.tiktok.com/@webinaja",
    },
  ];

  // Refs for animations
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const contactRef = useRef(null);

  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });
  const formInView = useInView(formRef, { once: true, margin: "-100px" });
  const contactInView = useInView(contactRef, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center px-6 pt-32 pb-20">
      {/* 🧭 Section Title */}
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 30 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-2xl text-center mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Mulai Konsultasi
        </h1>
        <p className="text-gray-600 text-base md:text-lg">
          Isi data singkat di bawah ini untuk langsung terhubung dengan{" "}
          <span className="font-semibold text-blue-600">
            Admin NexTechSolutions
          </span>{" "}
          melalui WhatsApp.
        </p>
      </motion.div>

      {/* 💬 Form Section */}
      <motion.div
        ref={formRef}
        initial={{ opacity: 0, y: 30 }}
        animate={formInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md bg-white border border-gray-200 shadow-lg rounded-2xl p-8 mb-16 hover:shadow-2xl transition"
      >
        <h2 className="text-lg font-semibold text-gray-800 mb-6 text-center">
          Silakan isi form di bawah ini:
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Nama Lengkap"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="w-full text-gray-900 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          <input
            type="tel"
            placeholder="Nomor WhatsApp Aktif"
            value={noWa}
            onChange={(e) => setNoWa(e.target.value)}
            className="w-full text-gray-900 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          <textarea
            placeholder="Tuliskan keperluan Anda..."
            rows={4}
            value={pesan}
            onChange={(e) => setPesan(e.target.value)}
            className="w-full text-gray-900 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition"
          >
            <FaWhatsapp className="text-xl" />
            Kirim ke WhatsApp
          </button>
        </form>
      </motion.div>

      <p className="text-gray-500 text-xs -mt-10">
        Fast Response ⏱ • Admin Online Setiap Hari
      </p>

      {/* ✅ Contact Info Section */}
      <motion.div
        ref={contactRef}
        initial={{ opacity: 0, y: 30 }}
        animate={contactInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl mx-auto mt-12 mb-6"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-1">
          Terhubung Dengan Kami
        </h2>
        <p className="text-gray-600 text-sm md:text-base mt-0">
          Terhubung dengan kami melalui kontak dan media sosial berikut:
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={contactInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-5xl mx-auto bg-gray-50 rounded-2xl shadow-md p-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactInfo.map((item, idx) => (
            <motion.a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white rounded-xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-xl text-blue-600 text-xl">
                {item.icon}
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
