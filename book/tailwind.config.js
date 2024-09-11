
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#3b82f6",
          "secondary": "#fbbf24",
          "accent": "#d1d5db",
          "neutral": "#ffffff", // Ensure background is white
          "base-100": "#ffffff", // Ensure the base-100 background is white
        },
      },
      'light', // Include other themes if necessary
    ],
  },
};
