/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors extracted from pitch deck
        primary: {
          dark: "#1A3647", // Dark blue/navy
          DEFAULT: "#1A3647",
        },
        accent: {
          green: "#2ECC71", // Vibrant green/teal
          light: "#4FD1C7", // Light teal
          DEFAULT: "#2ECC71",
        },
        neutral: {
          dark: "#1F2937", // Dark text
          DEFAULT: "#6B7280", // Medium grey
          light: "#F3F4F6", // Light grey background
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

