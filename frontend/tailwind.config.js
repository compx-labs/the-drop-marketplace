/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['JetBrains Mono', 'Space Mono', 'Fira Code', 'monospace'],
        mono: ['JetBrains Mono', 'Space Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        neon: {
          magenta: '#FF1ECA',
          cyan: '#00E7FF',
          purple: '#7A2BFF',
          lime: '#C6FF1A',
          coral: '#FF5A5A',
        },
        cosmic: {
          charcoal: '#0B0F17',
          void: '#0E1126',
        },
      },
      backgroundImage: {
        'gradient-neon': 'linear-gradient(135deg, #FF1ECA 0%, #00E7FF 100%)',
        'gradient-neon-reverse': 'linear-gradient(135deg, #00E7FF 0%, #FF1ECA 100%)',
        'gradient-purple-magenta': 'linear-gradient(135deg, #7A2BFF 0%, #FF1ECA 100%)',
      },
    },
  },
  plugins: [],
}

