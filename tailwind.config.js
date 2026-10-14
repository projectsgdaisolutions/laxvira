/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#101E36',
          navyLight: '#1A2E4F', // For hover states on the sidebar/buttons
          gold: '#C69C55',
          goldLight: '#D6B072', // For hover states on accent buttons
        }
      }
    },
  },
  plugins: [],
}