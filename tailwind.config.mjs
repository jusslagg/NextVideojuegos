/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    animation: {
      "fade-in": "fadeIn 0.75s ease-out",
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: 0, transform: "translateY(10px)" },
        "100%": { opacity: 1, transform: "translateY(0)" },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: "synthwave",
    themes: ["synthwave", "dark", "emerald", "halloween"],
  },
};
