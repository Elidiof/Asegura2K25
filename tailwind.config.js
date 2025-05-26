/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      /* Paleta corporativa + acento degradado */
      colors: {
        'brand-blue': '#1e3a8a',   // azul cabecera
        'accent-1'  : '#f97316',   // naranja
        'accent-2'  : '#fb7185',   // rosa
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(90deg,var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
