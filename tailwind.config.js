/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './lib/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF8F3',
        ink: '#1A2E22',
        pine: '#0E1F16',
        moss: '#5C6B62',
        brand: '#14532D',
        brand2: '#1B7A43',
        accent: '#D97706',
        accentsoft: '#FEF3C7',
        line: '#E7E0D2',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
