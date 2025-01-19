/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#1a202c", // Fondo oscuro
        electric: "#00ffff", // Azul eléctrico
      },
      fontFamily: {
        sans: ['"Press Start 2P"', "cursive"], // Fuente retro de videojuegos
      },
      boxShadow: {
        neon: "0 0 10px 2px rgba(0, 255, 255, 0.7)", // Efecto de sombra neón
        glow: "0 0 20px 5px rgba(255, 0, 255, 0.6)", // Efecto glow para botones
      },
    },
  },
  plugins: [require("daisyui")],
};
