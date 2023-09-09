/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      fontFamily: {
        satoshi: ["var(--font-satoshi)"],
      },
      fontFamily: {
        cabinet: ["var(--font-cabinet)"],
      },
    },
  },
  plugins: [],
};
