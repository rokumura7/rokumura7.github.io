module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './components/**/*.{js,ts,jsx,tsx,stories.tsx}',
    './pages/**/*.{js,ts,jsx,tsx,stories.tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'accent-1': '#333',
      },
      minWidth: {
        420: '420px',
      },
    },
  },
  variants: {},
  plugins: [],
}
