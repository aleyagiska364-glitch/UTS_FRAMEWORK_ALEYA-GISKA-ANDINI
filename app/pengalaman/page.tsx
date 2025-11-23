import { db } from "@/lib/db";

export const revalidate = 0;

export default async function Pengalaman() {
  const [pengalaman]: any = await db.query('SELECT * FROM pengalaman ORDER BY id DESC');

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      
      {/* --- BAGIAN KIRI (JUDUL) --- */}
      <div className="w-full md:w-1/3 bg-teal-accent p-10 flex items-center justify-center md:sticky md:top-0 md:h-screen">
        <h1 className="text-5xl md:text-6xl text-white font-serif italic tracking-wide rotate-0 md:-rotate-90 md:[writing-mode:vertical-rl]">
          Experience
        </h1>
      </div>

      {/* --- BAGIAN KANAN (KONTEN) --- */}
      <div className="w-full md:w-2/3 bg-white p-10 md:p-24 flex flex-col justify-center">
        <div className="space-y-16">
          {pengalaman.map((item: any) => (
            <div key={item.id} className="group">
              {/* Header Pekerjaan */}
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 border-b border-cream-main pb-2">
                <h3 className="text-2xl font-bold text-brown-text group-hover:text-teal-accent transition-colors">
                  {item.posisi}
                </h3>
                <span className="text-sm font-mono text-gray-400 mt-1 md:mt-0">
                  {item.durasi}
                </span>
              </div>

              {/* Nama Perusahaan */}
              <p className="text-lg text-teal-accent font-serif italic mb-4">
                @ {item.perusahaan}
              </p>

              {/* Deskripsi */}
              <p className="text-gray-600 leading-relaxed font-light text-justify">
                {item.deskripsi}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}