// "use client";

// import { useState } from "react";
// import { FaWhatsapp } from "react-icons/fa"; // 🟢 Tambahkan icon dari react-icons

// export default function ContactPage() {
//   const [nama, setNama] = useState("");
//   const [noWa, setNoWa] = useState("");
//   const [pesan, setPesan] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!nama || !noWa || !pesan) {
//       alert("Harap isi semua data sebelum lanjut ke WhatsApp!");
//       return;
//     }

//     const targetNumber = "6283894301502";

//     const message = `
// Halo *Admin WebinAja*!  
// Saya, *${nama}*.  
// No HP: ${noWa}

// Keperluan:
// ${pesan}

// Terima kasih.
// `;

//     const waLink = `https://wa.me/${targetNumber}?text=${encodeURIComponent(
//       message
//     )}`;
//     window.open(waLink, "_blank");
//   };

//   return (
//     <main className="min-h-screen bg-white flex flex-col items-center px-6 pt-32 pb-16">
//       {/* 🧭 Section Title */}
//       <div className="max-w-2xl text-center mb-10">
//         <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//           Mulai Konsultasi
//         </h1>
//         <p className="text-gray-600 text-base md:text-lg">
//           Isi data singkat di bawah ini untuk langsung terhubung dengan{" "}
//           <span className="font-semibold text-blue-600">Admin WebinAja</span>{" "}
//           melalui WhatsApp.
//         </p>
//       </div>

//       {/* 💬 Contact Form */}
//       <div className="w-full max-w-md bg-white border border-gray-200 shadow-lg rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl">
//         <h2 className="text-lg font-semibold text-gray-800 mb-6 text-center">
//           Silakan isi form di bawah ini:
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <input
//             type="text"
//             placeholder="Nama Lengkap"
//             value={nama}
//             onChange={(e) => setNama(e.target.value)}
//             className="w-full text-gray-900 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//           />

//           <input
//             type="tel"
//             placeholder="Nomor WhatsApp Aktif"
//             value={noWa}
//             onChange={(e) => setNoWa(e.target.value)}
//             className="w-full text-gray-900 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//           />

//           <textarea
//             placeholder="Tuliskan keperluan Anda..."
//             value={pesan}
//             onChange={(e) => setPesan(e.target.value)}
//             rows={4}
//             className="w-full text-gray-900 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
//           />

//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300"
//           >
//             <FaWhatsapp className="text-xl" />
//             Kirim ke WhatsApp
//           </button>
//         </form>
//       </div>
//     </main>
//   );
// }
