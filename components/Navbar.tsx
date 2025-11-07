"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false); // 🔹 dropdown desktop
  const [isPriceOpenMobile, setIsPriceOpenMobile] = useState(false); // 🔹 dropdown mobile

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
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 md:gap-4 md:ml-15">
          <Image
            src="/images/logo.png"
            alt="nexttech-solutions"
            width={120}
            height={120}
            className="object-contain hover:scale-110 transition-transform duration-300"
            priority
          />
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex gap-6 ml-2 items-center">
          {menu.map((item) => {
            const isActive = pathname === item.path;

            // 🔹 Setelah "Services", tampilkan dropdown Price
            if (item.name === "Services") {
              return (
                <div key={item.path} className="flex items-center gap-6">
                  <Link
                    href={item.path}
                    className="relative text-gray-800 hover:text-blue-600 transition-colors font-medium"
                  >
                    {item.name}
                    <span
                      className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </Link>

                  {/* 🔹 Dropdown Price (Setelah Services – Smooth Underline Animation) */}
                  <div
                    className="relative group"
                    onMouseEnter={() => setIsPriceOpen(true)}
                    onMouseLeave={() => setIsPriceOpen(false)}
                  >
                    <button
                      className={`relative flex items-center gap-1 font-medium transition-all duration-300 ${
                        pathname.startsWith("/price")
                          ? "text-blue-600"
                          : "text-gray-800 hover:text-blue-600"
                      }`}
                    >
                      Price
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isPriceOpen ? "rotate-180 text-blue-600" : "rotate-0"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                      {/* 🔹 Garis bawah aktif – dengan animasi smooth */}
                      <span
                        className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 origin-left transform transition-transform duration-300 ease-in-out ${
                          pathname.startsWith("/price")
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      ></span>
                    </button>

                    {/* 🔹 Dropdown Menu */}
                    <div
                      className={`absolute left-0 top-full mt-2 bg-white/90 backdrop-blur-md shadow-lg rounded-md py-2 w-52 border border-gray-200 transform transition-all duration-300 ${
                        isPriceOpen
                          ? "opacity-100 translate-y-0 visible"
                          : "opacity-0 -translate-y-2 invisible"
                      }`}
                    >
                      <Link
                        href="/price/package"
                        className={`block px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors relative ${
                          pathname === "/price/package" ? "!text-blue-600" : ""
                        }`}
                      >
                        Package Price
                        <span
                          className={`absolute left-4 right-4 bottom-1 h-0.5 bg-blue-600 rounded origin-left transform transition-transform duration-300 ease-in-out ${
                            pathname === "/price/package"
                              ? "scale-x-100"
                              : "scale-x-0"
                          }`}
                        ></span>
                      </Link>

                      <Link
                        href="/price/promo"
                        className={`block px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors relative ${
                          pathname === "/price/promo" ? "!text-blue-600" : ""
                        }`}
                      >
                        Promotional Package
                        <span
                          className={`absolute left-4 right-4 bottom-1 h-0.5 bg-blue-600 rounded origin-left transform transition-transform duration-300 ease-in-out ${
                            pathname === "/price/promo"
                              ? "scale-x-100"
                              : "scale-x-0"
                          }`}
                        ></span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }

            // 🔹 Untuk item lain tetap sama
            return (
              <Link
                key={item.path}
                href={item.path}
                className="relative text-gray-800 hover:text-blue-600 transition-colors font-medium"
              >
                {item.name}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            );
          })}
        </div>

        {/* Tombol kanan Desktop */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition duration-300"
          >
            Mulai Konsultasi
          </Link>
        </div>

        {/* Hamburger Mobile */}
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
          {menu.map((item) => {
            const isActive = pathname === item.path;

            // 🔹 Setelah "Services" tambahkan dropdown Price
            if (item.name === "Services") {
              return (
                <div
                  key={item.path}
                  className="flex flex-col items-center gap-2 w-full"
                >
                  <Link
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`relative text-lg font-medium ${
                      isActive
                        ? "text-blue-600"
                        : "text-gray-800 hover:text-blue-600"
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    ></span>
                  </Link>

                  {/* 🔹 Dropdown Price (mobile – animasi garis sama kayak desktop) */}
                  <div className="flex flex-col items-center w-full">
                    <button
                      onClick={() => setIsPriceOpenMobile(!isPriceOpenMobile)}
                      className={`relative text-lg font-medium flex items-center gap-1 transition-all duration-300 ${
                        pathname.startsWith("/price")
                          ? "text-blue-600"
                          : "text-gray-800 hover:text-blue-600"
                      }`}
                    >
                      Price
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isPriceOpenMobile
                            ? "rotate-180 text-blue-600"
                            : "rotate-0"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                      {/* 🔹 Garis bawah aktif (animasi halus) */}
                      {/* <span
                        className={`absolute left-0 -bottom-1 h-0.5 w-full bg-blue-600 origin-left transform transition-transform duration-300 ease-in-out ${
                          pathname.startsWith("/price")
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      ></span> */}
                    </button>

                    {/* 🔹 Dropdown Menu */}
                    <div
                      className={`flex flex-col items-center w-full overflow-hidden transition-all duration-500 ease-in-out ${
                        isPriceOpenMobile
                          ? "opacity-100 max-h-40 translate-y-0"
                          : "opacity-0 max-h-0 -translate-y-2"
                      }`}
                    >
                      {/* 🔹 Link 1 */}
                      <div className="relative w-full flex justify-center">
                        <Link
                          href="/price/package"
                          onClick={() => setIsOpen(false)}
                          className={`relative inline-block text-base py-2 transition-all duration-300 ${
                            pathname === "/price/package"
                              ? "text-blue-600"
                              : "text-gray-700 hover:text-blue-600"
                          }`}
                        >
                          Package Price
                          <span
                            className={`absolute left-0 bottom-0 h-0.5 bg-blue-600 origin-left transform transition-transform duration-300 ease-in-out ${
                              pathname === "/price/package"
                                ? "scale-x-100 w-full"
                                : "scale-x-0 w-full"
                            }`}
                          ></span>
                        </Link>
                      </div>

                      {/* 🔹 Link 2 */}
                      <div className="relative w-full flex justify-center">
                        <Link
                          href="/price/promo"
                          onClick={() => setIsOpen(false)}
                          className={`relative inline-block text-base py-2 transition-all duration-300 ${
                            pathname === "/price/promo"
                              ? "text-blue-600"
                              : "text-gray-700 hover:text-blue-600"
                          }`}
                        >
                          Promotional Package
                          <span
                            className={`absolute left-0 bottom-0 h-0.5 bg-blue-600 origin-left transform transition-transform duration-300 ease-in-out ${
                              pathname === "/price/promo"
                                ? "scale-x-100 w-full"
                                : "scale-x-0 w-full"
                            }`}
                          ></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            // 🔹 Item lain tetap sama
            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`relative text-lg font-medium ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-800 hover:text-blue-600"
                }`}
              >
                {item.name}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                ></span>
              </Link>
            );
          })}

          <Link
            href="/contact"
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
