/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        safety: {
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          accent: '#FFB703',
        },
        blueprint: {
          950: '#070D1E',
          900: '#0B1528',
          850: '#0F1D38',
          800: '#152646',
          700: '#1E355B',
          cyan: '#00F0FF',
          blue: '#2563EB',
          grid: '#1E293B',
        },
        steel: {
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        heading: ['Outfit', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'blueprint-grid': "radial-gradient(circle, rgba(14, 165, 233, 0.15) 1px, transparent 1px)",
        'cad-grid': "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
        'cad-grid-accent': "linear-gradient(to right, rgba(245, 158, 11, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(245, 158, 11, 0.08) 1px, transparent 1px)",
      },
      animation: {
        'grid-slide': 'gridMove 20s linear infinite',
        'scanline': 'scan 4s ease-in-out infinite alternate',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'laser-sweep': 'laserSweep 6s linear infinite',
        'tape-measure': 'tape 2s ease-out forwards',
      },
      keyframes: {
        gridMove: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(40px, 40px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.98)' },
        },
        laserSweep: {
          '0%': { left: '0%' },
          '50%': { left: '100%' },
          '100%': { left: '0%' },
        }
      }
    },
  },
  plugins: [],
}

