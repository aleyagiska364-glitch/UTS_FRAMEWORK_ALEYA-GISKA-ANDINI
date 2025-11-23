import type { Metadata } from "next";
import { Inter } from "next/font/google"; 
import "./globals.css";
import Link from "next/link";
import { db } from "@/lib/db";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CV Aleya",
  description: "Creative Portfolio",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${inter.className} bg-cream-main text-brown-text min-h-screen flex`}>
        
        {/* --- SIDEBAR KIRI (VERTIKAL) --- */}
        <aside className="fixed left-0 top-0 h-screen w-16 md:w-20 flex flex-col justify-center items-center py-10 border-r border-brown-text/10 z-50 bg-cream-main">
          
          {/* MENU NAVIGASI (Diputar Vertikal) */}
          {/* Kita atur urutannya di sini: Dari Atas ke Bawah */}
          <nav className="flex flex-col items-center gap-16">
            
            {/* 1. BIODATA (Paling Atas) */}
            <Link href="/" className="rotate-180 [writing-mode:vertical-lr] text-xs font-bold text-teal-accent tracking-widest uppercase hover:text-brown-text transition">
              Biodata
            </Link>

            {/* 2. KEAHLIAN */}
            <Link href="/keahlian" className="rotate-180 [writing-mode:vertical-lr] text-xs font-medium hover:text-teal-accent transition tracking-widest uppercase">
              Keahlian
            </Link>

            {/* 3. PENDIDIKAN */}
            <Link href="/pendidikan" className="rotate-180 [writing-mode:vertical-lr] text-xs font-medium hover:text-teal-accent transition tracking-widest uppercase">
              Pendidikan
            </Link>

            {/* 4. PENGALAMAN (Paling Bawah) */}
            <Link href="/pengalaman" className="rotate-180 [writing-mode:vertical-lr] text-xs font-medium hover:text-teal-accent transition tracking-widest uppercase">
              Pengalaman
            </Link>
            
          </nav>
        </aside>

        {/* --- KONTEN UTAMA --- */}
        <main className="flex-1 ml-16 md:ml-20">
          {children}
        </main>

      </body>
    </html>
  );
}