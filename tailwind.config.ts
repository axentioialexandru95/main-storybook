import type { Config } from "tailwindcss";
import flowbitePlugin from 'flowbite/plugin';
import animatedPlugin from 'tailwindcss-animated';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/stories/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
    "node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#E6E6FF",
          "100": "#CCCCFF",
          "200": "#9999FF",
          "300": "#6666FF",
          "400": "#3333FF",
          "500": "#1919FE",
          "600": "#0000CC",
          "700": "#000099",
          "800": "#000066",
          "900": "#000033",
          "950": "#000019"
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray: {
          "50": "#F9FAFB",
          "100": "#F3F4F6",
          "200": "#E5E7EB",
          "300": "#D1D5DB",
          "400": "#9CA3AF",
          "500": "#6B7280",
          "600": "#4B5563",
          "700": "#374151",
          "800": "#1F2937",
          "900": "#111928",
        },
        blue: {
          "50": "#EFF6FF",
          "100": "#DBEAFE",
          "200": "#BFDBFE",
          "300": "#93C5FD",
          "400": "#60A5FA",
          "500": "#3B82F6",
          "600": "#2563EB",
          "700": "#1D4ED8",
          "800": "#1E40AF",
          "900": "#1E3A8A"
        },
        yellow: {
          "300": "#FAC515"
        },
        // Custom colors from the image
        custom: {
          gray: {
            "50": "#F9FAFB",
            "100": "#F3F4F6",
            "200": "#E5E7EB",
            "300": "#D1D5DB",
            "400": "#9CA3AF",
            "500": "#6B7280",
            "800": "#1F2A37",
            "900": "#111928"
          },
          blue: {
            "50": "#EFF6FF",
            "100": "#DBEAFE",
            "600": "#2563EB",
            "800": "#1E40AF"
          }
        }
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(to right, #7C3AED 60%, #DC2626 60%)',
        'primary-gradient-dark': 'linear-gradient(to right, #7C3AED 44%, #DC2626 44%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'slide-down': {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'fade-up': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          }
        }
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 40s linear infinite',
        'fade-in': 'fade-in 0.3s ease-out',
        'slide-down': 'slide-down 0.4s ease-out',
        'fade-up': 'fade-up 0.5s ease-out'
      }
    },
    fontFamily: {
      'body': [
        'Urbanist',
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ],
      'sans': [
        'Urbanist',
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ]
    }
  },
  plugins: [
    flowbitePlugin,
    animatedPlugin
  ],
};

export default config;
