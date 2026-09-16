/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#030712",
          900: "#060d1f",
          850: "#09142b",
          800: "#0d1b3e",
          750: "#122452",
          700: "#182e66",
        },
        gold: {
          50: "#fdfbf2",
          100: "#f9f4dd",
          200: "#f3e7b8",
          300: "#ebd487",
          400: "#e2bf57",
          500: "#d4af37", // Primary luxury gold
          600: "#b58e26",
          700: "#8f6c1c",
          800: "#6e5218",
          900: "#543e15",
        },
        charcoal: {
          950: "#0c0e14",
          900: "#12151f",
          800: "#1c202e",
          700: "#2a3044",
        }
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "Cambria", "'Times New Roman'", "serif"],
        sans: ["'Inter'", "'Plus Jakarta Sans'", "system-ui", "-apple-system", "sans-serif"],
        bengali: ["'Hind Siliguri'", "'Noto Serif Bengali'", "'Kalpurush'", "sans-serif"],
      },
      boxShadow: {
        'gold-sm': '0 2px 8px -1px rgba(212, 175, 55, 0.15)',
        'gold-md': '0 4px 20px -2px rgba(212, 175, 55, 0.22)',
        'gold-lg': '0 10px 30px -5px rgba(212, 175, 55, 0.3)',
        'navy-lg': '0 20px 40px -15px rgba(2, 6, 23, 0.7)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
