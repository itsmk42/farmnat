import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors for South Indian Wellness Brand
        primary: {
          50: '#f0fdfc',
          100: '#ccfbf1',
          500: '#22A699', // Primary brand color - natural teal
          600: '#1e9488',
          700: '#1a7a70',
          900: '#134e4a',
        },
        secondary: {
          50: '#fef7ed',
          100: '#feebc8',
          500: '#C06014', // Secondary accent - warm terracotta
          600: '#a85012',
          700: '#8b4513',
          900: '#5a2d0c',
        },
        tertiary: {
          50: '#fefce8',
          100: '#fef3c7',
          500: '#F2BE22', // Tertiary accent - golden yellow
          600: '#d69e2e',
          700: '#b7791f',
          900: '#744210',
        },
        neutral: {
          50: '#FDFBF8', // Warm off-white background
          100: '#f7f5f2',
          200: '#e8e5e0',
          300: '#d6d1c9',
          400: '#b8b0a3',
          500: '#9a8f7e',
          600: '#7c6f5e',
          700: '#5f5448',
          800: '#434242', // Primary text color
          900: '#2d2a28',
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
