/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'soft-cream': '#f5f5f5',
        'charcoal': '#1f1f1f',
        'warm-coral': '#e76f51',
        'deep-blue': '#264653',
        'soft-gold': '#f4a261',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      animation: {
        'brush-stroke': 'brushStroke 2s ease-in-out infinite',
      },
      keyframes: {
        brushStroke: {
          '0%': { transform: 'scaleX(0)', opacity: '0' },
          '50%': { transform: 'scaleX(1)', opacity: '1' },
          '100%': { transform: 'scaleX(0)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
} 