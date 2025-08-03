/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0A0A23',
        purpleDark: '#1F1235',
        highlight: '#8B5CF6',
      },
    },
  },
  plugins: [],
}
