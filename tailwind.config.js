/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0f0f19',
          muted: '#14141e',
          card: '#181822',
        },
        heading: '#f8fafc',
        body: '#94a3b8',
        accent: {
          amber: '#f59e0b',
          orange: '#ef4444',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(to right, #f59e0b, #ef4444)',
      },
    },
  },
  plugins: [],
}
