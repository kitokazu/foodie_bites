/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    // fontFamily: {
    //   sans: ['Helvetica Neue', 'sans-serif'],
    // },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--gradient-color-stops))',
      },
      colors: {
        'custom-gray': '#AAA8A8',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
