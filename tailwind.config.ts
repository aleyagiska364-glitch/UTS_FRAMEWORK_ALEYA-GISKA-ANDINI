import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream-main': '#F3E9DD', // Warna Krem Background
        'teal-accent': '#5B8C96', // Warna Kotak Hijau/Biru (Teal)
        'brown-text': '#5A4D41',  // Warna Teks
      }
    },
  },
  plugins: [],
};
export default config;