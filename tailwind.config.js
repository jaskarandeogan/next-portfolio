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
      semibold: 600,
      bold: 700,
    },
    extend: {
      colors: {
        'grey-1': '#0B0E0E',
        'grey-2': '#0D1010',
        'grey-3': '#101313',
        'grey-4': '#191F1F',
        'grey-5-32': '#60676352',
        'grey-5': '#606763',
        'grey-6/15': '#7E898326',
        'grey-6-32': '#7E898352',
        'grey-6': '#7E8983',
        'grey-7-32': '#A1AAA552',
        'grey-7': '#A1AAA5',
        'grey-8-32': '#FFFFFF52',
        'grey-8': '#FFFFFF',
        'primary-0': '#97F36B',
        'primary-0/15': '#97F36B26',
        'primary-1': '#4FB02C',
        'primary-2': '#35751D',
        'primary-3': '#1A3B0F',
        'primary-4': '#90DD74',
        'primary-5': '#C7EEB9',
        'primary-6': '#E0F8D8',
        'secondary-0': '#39B5DC',
        'secondary-0/15': '#39B5DC26',
        'secondary-1': '#1F8EB1',
        'secondary-2': '#155F76',
        'secondary-3': '#0A2F3B',
        'secondary-4': '#7BCEE8',
        'secondary-5': '#AADFF0',
        'secondary-6': '#D8F3FC',
        'error-0': '#E4364B',
        'error-0/15': '#E4364B26',
        'error-1': '#BA192D',
        'error-2': '#7C111E',
        'error-3': '#3E080F',
        'error-4': '#EB6878',
        'error-5': '#F19BA5',
        'error-6': '#F8CDD2',
        'splink-primary': '#7575EA',
        'splink-secondary': '#45D8BC',
        'felix-primary': '#D91B5C',
        'felix-secondary': '#1A99D6',
        'felix-tertiary': '#00558F',
        'felix-bold-text': '#000000',
        'felix-light-text': '#515151',
      },
      fontFamily: {
        heading: ["Inter"],
        body: ["Inter"],
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
      animation: {
        "show-chat-up": "show-chat 0.5s ease-in-out",
        "show-chat-down": "show-chat 0.5s ease-in-out reverse",
      },
      keyframes: {
        "show-chat": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "hide-chat": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
    },
  },
  plugins: [],
};
