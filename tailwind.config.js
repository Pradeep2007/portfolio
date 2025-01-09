import defaultTheme from 'tailwindcss/defaultTheme';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        libre: ['"Playwrite AU SA"', ...defaultTheme.fontFamily.serif]
      }
    },
  },
  plugins: [],
}