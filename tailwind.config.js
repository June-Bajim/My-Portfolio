/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",    // Added root pages directory
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Added root components directory
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",      // Added root app directory
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        courier: ['"Courier New"', "Courier", "monospace"],
        patrick: ['"Patrick Hand"', "cursive"],
        laxent: ['"Cursive"', "sans-serif"],
      },
      colors: {
        green: "#00FF00",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "star-pattern": "radial-gradient(white 1px, transparent 1px)",
      },
      animation: {
        "move-stars": "moveStars 20s linear infinite",
      },
      keyframes: {
        moveStars: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
