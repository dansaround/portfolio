/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      sm: '600px',
      md: '1024px',
    },
    extend: {
      colors: {
        bg: 'rgb(31 31 56 / <alpha-value>)',
        'bg-variant': 'rgb(44 44 108 / <alpha-value>)',
        primary: 'rgb(77 181 255 / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
      },
      backgroundImage: {
        texture: "url('/assets/bg-texture.png')",
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
};
