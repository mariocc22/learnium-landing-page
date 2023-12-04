/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "20px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      mdx: "900px",
      lg: "1024px",
      xl: "1300px",
    },

    extend: {
      fontFamily: {
        sans: ["var(--font-gabarito)"],
        serif: ["var(--font-nunito)"],
      },
      colors: {
        primary: "#7000FF",
        secondary: "#262626",
        tertiary: {
          DEFAULT: "#F5f5f5",
          hover: "#E6E6E6",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
