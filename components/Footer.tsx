"use client";

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaEnvelope } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa6";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#f9fbfd] to-[#eaf2fb] text-gray-700 pt-16 pb-10 px-6 md:px-12 overflow-hidden">
      {/* Accent soft blue blur */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-100/30 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        {/* Brand Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png" // ganti ke logo kamu
              alt="Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <h2 className="text-xl font-bold text-blue-700 tracking-wide">NexTech</h2>
          </div>
          <p className="text-sm leading-relaxed text-gray-600">
            Kami bantu wujudkan kebutuhan digitalmu — dari desain UI/UX, website, hingga sistem manajemen profesional yang efisien.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-blue-800 font-semibold mb-4">Navigasi</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-blue-600 transition-colors">Beranda</a></li>
            <li><a href="#services" className="hover:text-blue-600 transition-colors">Layanan</a></li>
            <li><a href="#process" className="hover:text-blue-600 transition-colors">Proses</a></li>
            <li><a href="#portfolio" className="hover:text-blue-600 transition-colors">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-blue-600 transition-colors">Kontak</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-blue-800 font-semibold mb-4">Layanan Kami</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Website Development</li>
            <li>UI/UX Design</li>
            <li>Flowchart & Wireframe</li>
            <li>System Management</li>
            <li>Branding & Presentation</li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-blue-800 font-semibold mb-4">Hubungi Kami</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2"><FaEnvelope className="text-blue-600" /> support@nextech.com</li>
            <li className="flex items-center gap-2"><FaGlobe className="text-blue-600" /> www.nextech.com</li>
          </ul>

          <div className="flex gap-4 mt-4 text-lg text-gray-600">
            <a href="#" className="hover:text-blue-600 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-pink-500 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-500 transition"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-gray-800 transition"><FaTiktok /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-gray-300 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} <span className="text-blue-700 font-medium">NexTech</span>. Semua hak dilindungi.
      </div>
    </footer>
  );
}
