import { db } from "@/lib/db";

export const revalidate = 0;

export default async function Home() {
  const [rows]: any = await db.query('SELECT * FROM biodata LIMIT 1');
  const user = rows[0];

  // Pecah nama untuk efek visual (Kata pertama Bold, sisanya biasa)
  const namaDepan = user?.nama?.split(' ')[0] || "Aleya";
  const namaBelakang = user?.nama?.split(' ').slice(1).join(' ') || "Giska";

  return (
    <div className="min-h-screen flex flex-col">
      
      {/* --- BAGIAN ATAS (SPLIT FOTO & JUDUL) --- */}
      <div className="flex flex-col md:flex-row h-auto md:h-[70vh]">
        
        {/* KIRI: FOTO (45% Lebar) */}
        <div className="w-full md:w-[45%] h-[50vh] md:h-full relative overflow-hidden bg-gray-200">
          <img
            src={user?.foto_url || "/foto1.jpg"}
            alt="Profile"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700 ease-in-out"
          />
        </div>

        {/* KANAN: TEXT INTRO (55% Lebar) */}
        <div className="w-full md:w-[55%] bg-cream-main p-10 md:p-20 flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl font-light text-brown-text mb-4">Hello</h2>
          <h1 className="text-6xl md:text-8xl font-thin tracking-tighter text-brown-text leading-[0.9]">
            I'm <br />
            <span className="font-bold">{namaDepan}</span> <br />
            {namaBelakang}
          </h1>

          {/* Dekorasi Garis Zigzag (Visual Element) */}
          <div className="mt-12 opacity-50">
             <svg width="60" height="20" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M2 18L12 2L22 18L32 2L42 18L52 2" stroke="#5A4D41" strokeWidth="3"/>
             </svg>
          </div>
        </div>
      </div>

      {/* --- BAGIAN BAWAH (SPLIT ABOUT & DESKRIPSI) --- */}
      <div className="flex flex-col md:flex-row flex-1">
        
        {/* KIRI: KOTAK TEAL (Label About) */}
        <div className="w-full md:w-[45%] bg-teal-accent p-10 flex items-center justify-center md:justify-end md:pr-20">
          <h3 className="text-4xl text-white font-serif italic tracking-wider">About</h3>
        </div>

        {/* KANAN: DESKRIPSI (Putih) */}
        <div className="w-full md:w-[55%] bg-white p-10 md:p-16 flex items-center">
          <div className="space-y-6 max-w-lg">
             <p className="text-brown-text text-lg leading-relaxed font-light">
               {user?.deskripsi || "Deskripsi belum diisi."}
             </p>

             {/* Contact Mini Grid */}
             <div className="pt-6 border-t border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                     <span className="block text-gray-400 text-xs font-bold tracking-widest uppercase mb-1">Email</span>
                     <span className="text-teal-accent font-medium">{user?.email}</span>
                 </div>
                 <div>
                     <span className="block text-gray-400 text-xs font-bold tracking-widest uppercase mb-1">Phone</span>
                     <span className="text-teal-accent font-medium">{user?.no_hp}</span>
                 </div>
             </div>
          </div>
        </div>
      </div>

    </div>
  );
}