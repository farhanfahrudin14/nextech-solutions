"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

const services = [
  {
    id: 1,
    title: "Product Design",
    tags: ["SaaS Platform", "Web Platform", "Mobile App"],
    description:
      "Kami membantu mengubah ide Anda menjadi produk nyata yang siap dipasarkan. Dengan fokus pada kebutuhan unik dan tampilan yang estetik serta mudah digunakan.",
  },
  {
    id: 2,
    title: "UX Design",
    tags: ["UX Audit", "Analysis", "Research"],
    description:
      "Kami menganalisis dan meningkatkan pengalaman pengguna melalui riset mendalam dan desain berbasis data untuk memastikan produk Anda nyaman digunakan.",
  },
  {
    id: 3,
    title: "Development",
    tags: ["Next.js", "React", "Node.js", "Laravel"],
    description:
      "Tim kami mengembangkan website dan aplikasi menggunakan teknologi modern yang cepat, aman, dan mudah dikembangkan sesuai kebutuhan bisnis Anda.",
  },
  {
    id: 4,
    title: "Quality Assurance",
    tags: ["Testing", "Planning", "KPI Monitoring", "Documentation"],
    description:
      "Kami memastikan setiap proyek berjalan lancar melalui pengujian menyeluruh, perencanaan detail, dan dokumentasi yang jelas.",
  },
];

export default function ServicesPage() {
  const [active, setActive] = useState(1);
  const router = useRouter();

  const handleDiscussClick = () => {
    router.push("/contact"); // 🔹 arahkan ke halaman kontak
  };

  return (
    <main className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Layanan Kami
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Kami menyediakan berbagai layanan digital untuk membantu bisnis Anda
          berkembang di era modern.
        </p>
      </div>

      <div className="space-y-4 max-w-3xl mx-auto">
        {services.map((service) => (
          <div
            key={service.id}
            className={`rounded-2xl overflow-hidden transition-all duration-300 border ${
              active === service.id
                ? "bg-blue-50 border-blue-200 shadow-md"
                : "bg-white border-gray-200"
            }`}
          >
            {/* Header */}
            <button
              onClick={() => setActive(service.id)}
              className="w-full flex items-center justify-between p-6 text-left group"
            >
              <div className="flex items-center gap-6">
                <span className="text-gray-400 font-medium text-sm w-6">
                  {String(service.id).padStart(2, "0")}
                </span>
                <h2
                  className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${
                    active === service.id
                      ? "text-blue-700"
                      : "text-gray-800 group-hover:text-blue-600"
                  }`}
                >
                  {service.title}
                </h2>
              </div>
              <ChevronRight
                className={`w-5 h-5 transition-transform duration-500 ${
                  active === service.id
                    ? "rotate-90 text-blue-600"
                    : "rotate-0 text-gray-400 group-hover:text-blue-500"
                }`}
              />
            </button>

            {/* Expanded Content */}
            {active === service.id && (
              <div className="px-12 pb-8 text-left animate-fadeIn">
                <div className="flex flex-wrap gap-2 mb-3">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-white text-gray-600 border border-gray-200 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-5 text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>
                <button
                  onClick={handleDiscussClick}
                  className="border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white transition-all px-4 py-2 rounded-lg text-sm font-medium"
                >
                  Discuss Project
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
