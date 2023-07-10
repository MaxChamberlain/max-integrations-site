/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/_components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/_assets/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        spinToLeft: {
          '0%': { transform: 'rotateY(90deg)', opacity: 0 },
          '100%': { transform: 'rotateY(0)', opacity: 1 },
        },
        spinToRight: {
          '0%': { transform: 'rotateY(-90deg)', opacity: 0 },
          '100%': { transform: 'rotateY(0)', opacity: 1 },
        },
        blink: {
          '0%': { opacity: 0 },
          '49%': { opacity: 0 },
          '50%': { opacity: 1 },
          '99%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        listGrow: {
          '0%': { transform: 'scale(0.95)', opacity: 0.8 },
          '49%': { transform: 'scale(0.95)', opacity: 0.8 },
          '50%': { transform: 'scale(1)', opacity: 1 },
          '99%': { transform: 'scale(1)', opacity: 1 },
          '100%': { transform: 'scale(0.95)', opacity: 0.8 },
        }
      },
      animation: {
        spinToLeft: 'spinToLeft 2s ease-in',
        spinToRight: 'spinToRight 2s ease-in',
        blink: 'blink 1s ease-in-out infinite',
        listGrow: 'listGrow 15s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
