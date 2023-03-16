/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      bold: 700,
    },
    extend: {
      colors: {
        "grey-1": "#F5F5F5",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "heading-xs": ["0.875rem", "1.25rem"],
        "heading-sm": ["1rem", "1.5rem"],
        "heading-md": ["1.5rem", "2.25rem"],
        "heading-lg": ["1.75rem", "2.75rem"],
        "heading-xl": ["3rem", "4.5rem"],
        "heading-2xl": ["3.75rem", "5.75rem"],
        "body-xs": ["0.75rem", "1.125rem"],
        "body-sm": ["0.875rem", "1.25rem"],
        "body-md": ["1rem", "1.5rem"],
        "body-lg": ["1.125rem", "1.75rem"],
        "body-xl": ["1.5rem", "2.25rem"],
      },
    },
  },
  plugins: [],
};
