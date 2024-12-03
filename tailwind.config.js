module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // make sure to include your JSX/TSX files
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
