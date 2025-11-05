"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const menu = [
    { name: "Home", path: "/" },
    { name: "Process", path: "/process" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/20 backdrop-blur-md border-b border-gray-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center pl-3 pr-6 py-3">
        
        {/* ✅ Logo - sedikit geser ke tengah di desktop */}
        <Link
          href="/"
          className="flex items-center gap-2 md:gap-4 md:ml-15"
        >
          <Image
            src="/images/jasa.png"
            alt="WebinAja Logo"
            width={120}
            height={120}
            className="object-contain hover:scale-110 transition-transform duration-300"
            priority
          />
        </Link>

        {/* Menu Tengah (desktop) */}
        <div className="hidden md:flex gap-6 ml-2">
          {menu.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`transition duration-200 ${
                pathname === item.path
                  ? "text-blue-600 font-semibold"
                  : "text-gray-800 hover:text-blue-600"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Tombol kanan (desktop) */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition duration-300"
          >
            Mulai Konsultasi
          </Link>
        </div>

        {/* ✅ Hamburger Button (mobile) */}
        <button
          className="md:hidden relative w-8 h-8 flex justify-center items-center z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`absolute h-0.5 w-6 bg-gray-800 rounded transition-all duration-300 ${
              isOpen ? "rotate-45" : "-translate-y-2"
            }`}
          ></span>

          <span
            className={`absolute h-0.5 w-6 bg-gray-800 rounded transition-all duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>

          <span
            className={`absolute h-0.5 w-6 bg-gray-800 rounded transition-all duration-300 ${
              isOpen ? "-rotate-45" : "translate-y-2"
            }`}
          ></span>
        </button>
      </div>

      {/* Dropdown Mobile */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen opacity-100 py-6" : "max-h-0 opacity-0"
        } bg-white/30 backdrop-blur-md border-t border-gray-200 shadow-lg`}
      >
        <div className="flex flex-col items-center gap-4">
          {menu.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setIsOpen(false)}
              className={`text-lg transition duration-200 ${
                pathname === item.path
                  ? "text-blue-600 font-semibold"
                  : "text-gray-800 hover:text-blue-600"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/konsultasi"
            onClick={() => setIsOpen(false)}
            className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition duration-300 mt-2"
          >
            Mulai Konsultasi
          </Link>
        </div>
      </div>
    </nav>
  );
}
