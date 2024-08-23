/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./resources/**/*.blade.php",
      "./resources/**/*.jsx",
      "./resources/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'light-green': '#79d800',
        'bright-red': '#ff1e00',
        'dark-cyan': '#00b1a7',
        'light-violet': '#9747ff',
        'orange': '#ff7e00',
      }
    },
  },
  plugins: [],
}
