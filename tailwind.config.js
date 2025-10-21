/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.vue',
    './src/**/*.js',
    './src/**/*.ts',
    './src/**/*.jsx',
    './src/**/*.tsx',
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        code: ['"Source Code Pro"', 'monospace'],
      },
    },
  },
  plugins: [],
}
