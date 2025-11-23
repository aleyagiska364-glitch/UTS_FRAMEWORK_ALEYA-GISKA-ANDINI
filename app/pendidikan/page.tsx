import { db } from "@/lib/db";

export const revalidate = 0;

export default async function Pendidikan() {
  const [pendidikan]: any = await db.query('SELECT * FROM pendidikan');

  return (
    <div className="flex flex-col md:flex-row min-h-screen animate-fade-in">
      
      {/* --- BAGIAN KIRI (JUDUL) --- */}
      {/* Warna Teal Accent agar konsisten dengan kotak 'About' di halaman depan */}
      <div className="w-full md:w-1/3 bg-teal-accent p-10 flex items-center justify-center md:sticky md:top-0 md:h-screen">
        <h1 className="text-5xl md:text-6xl text-white font-serif italic tracking-wide rotate-0 md:-rotate-90 md:[writing-mode:vertical-rl]">
          Education
        </h1>
      </div>

      {/* --- BAGIAN KANAN (DAFTAR) --- */}
      <div className="w-full md:w-2/3 bg-white p-10 md:p-24 flex flex-col justify-center">
        <div className="space-y-12">
          {pendidikan.map((item: any) => (
            <div key={item.id} className="relative pl-8 border-l border-cream-main">
              {/* Tahun */}
              <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cream-main border-2 border-teal-accent"></span>
              <p className="text-teal-accent font-bold tracking-widest text-sm mb-2 uppercase">
                {item.tahun}
              </p>
              
              {/* Institusi */}
              <h2 className="text-3xl font-light text-brown-text mb-1">
                {item.institusi}
              </h2>
              
              {/* Gelar */}
              <p className="text-lg text-gray-400 font-serif italic">
                {item.gelar}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}