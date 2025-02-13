export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3A3335', // Jet
          light: '#C6D8D3',  // Ash Gray
          dark: '#2A2527',   // Darker Jet
        },
        accent: {
          raspberry: '#D81E5B',
          vermilion: '#F0544F',
          papaya: '#FDF0D5',
        },
        neutral: {
          light: '#F8F9FA',
          DEFAULT: '#9E9E9E',
          dark: '#3A3335',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}