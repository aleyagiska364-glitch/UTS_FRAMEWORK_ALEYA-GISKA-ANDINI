import { db } from "@/lib/db";

export const revalidate = 0;

export default async function Keahlian() {
  const [skills]: any = await db.query('SELECT * FROM keahlian');

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      
      {/* --- BAGIAN KIRI (JUDUL) --- */}
      <div className="w-full md:w-1/3 bg-teal-accent p-10 flex items-center justify-center md:sticky md:top-0 md:h-screen">
        <h1 className="text-5xl md:text-6xl text-white font-serif italic tracking-wide rotate-0 md:-rotate-90 md:[writing-mode:vertical-rl]">
          Skills
        </h1>
      </div>

      {/* --- BAGIAN KANAN (GRID SKILL) --- */}
      <div className="w-full md:w-2/3 bg-white p-10 md:p-24 flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((item: any) => (
            <div key={item.id} className="bg-cream-main p-6 flex items-center justify-between group hover:bg-brown-text transition-colors duration-300 cursor-default">
              
              {/* Nama Skill */}
              <span className="text-xl font-light text-brown-text group-hover:text-cream-main transition-colors">
                {item.skill_nama}
              </span>

              {/* Icon Panah Kecil */}
              <svg className="w-5 h-5 text-teal-accent group-hover:text-cream-main opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}