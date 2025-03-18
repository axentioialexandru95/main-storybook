/** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin';

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/stories/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Brooklyn', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          light: '#3B82F6',
          dark: '#1D4ED8',
          glow: 'rgba(37, 99, 235, 0.5)',
        },
        secondary: {
          DEFAULT: '#E5E7EB',
          light: '#F3F4F6',
          dark: '#D1D5DB',
        },
        phantom: {
          white: '#FFFCF0',
          blue: '#2563EB',
          black: '#0A101F',
          gray: {
            900: '#111827',
            800: '#1E293B',
            700: '#2E3A52',
            600: '#3D4A66',
            500: '#5D6B8A',
            400: '#8896B9',
            300: '#9CA3AF',
            200: '#D1D8EB',
            100: '#E8ECF5',
          },
        },
        surface: {
          DEFAULT: '#111827',
          light: '#1E293B',
          hover: '#2E3A52',
        },
        text: {
          DEFAULT: '#FFFCF0',
          muted: '#9CA3AF',
        },
        border: {
          DEFAULT: '#1E293B',
          light: '#2E3A52',
        },
        background: {
          DEFAULT: '#0A101F',
        },
        glass: {
          light: 'rgba(255, 252, 240, 0.7)',
          dark: 'rgba(17, 24, 39, 0.7)',
        },
      },
      spacing: {
        'xs': '0.25rem',
        'sm': '0.5rem',
        'md': '1rem',
        'lg': '1.5rem',
        'xl': '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'md': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
      borderRadius: {
        'sm': '0.25rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'glass-light': '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(135deg, #0A101F 0%, #111827 100%)",
        "grid": "linear-gradient(to right, rgba(37, 99, 235, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(37, 99, 235, 0.05) 1px, transparent 1px)",
        "dots": "radial-gradient(rgba(37, 99, 235, 0.1) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': '20px 20px',
        'dots': '20px 20px',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'fade-in': 'fadeIn 250ms ease',
        'slide-up': 'slideUp 250ms ease',
        'slide-right': 'slideRight 250ms ease',
        'slide-left': 'slideLeft 250ms ease',
        'scale-up': 'scaleUp 250ms ease',
        'pulse': 'pulse 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'rotate': 'rotate 10s linear infinite',
        'glow': 'glow 2s infinite',
        'text-glow': 'textGlow 2s infinite',
        'infinite-scroll': 'infiniteScroll 25s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        infiniteScroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        slideUp: {
          'from': { transform: 'translateY(20px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
        slideRight: {
          'from': { transform: 'translateX(-20px)', opacity: '0' },
          'to': { transform: 'translateX(0)', opacity: '1' },
        },
        slideLeft: {
          'from': { transform: 'translateX(20px)', opacity: '0' },
          'to': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleUp: {
          'from': { transform: 'scale(0.8)', opacity: '0' },
          'to': { transform: 'scale(1)', opacity: '1' },
        },
        pulse: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        rotate: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(37, 99, 235, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(37, 99, 235, 0.7)' },
          '100%': { boxShadow: '0 0 5px rgba(37, 99, 235, 0.5)' },
        },
        textGlow: {
          '0%': { textShadow: '0 0 5px rgba(37, 99, 235, 0.5)' },
          '50%': { textShadow: '0 0 10px rgba(37, 99, 235, 0.7)' },
          '100%': { textShadow: '0 0 5px rgba(37, 99, 235, 0.5)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
      },
    },
  },
  plugins: [
    flowbitePlugin
  ],
}; 