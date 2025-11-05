/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'it-red': '#C70039',
        'it-blue': '#007BFF',
        'it-silver': '#E0E0E0',
        'it-dark': '#1A1A1A',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'normal': '0',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em',
      },
    },
  },
  plugins: [],
};
