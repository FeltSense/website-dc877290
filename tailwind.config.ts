import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF5F0',
          100: '#FFE8DC',
          200: '#FFD0BA',
          300: '#FFB088',
          400: '#FF8A54',
          500: '#FF6B2B',
          600: '#F05316',
          700: '#C73E0F',
          800: '#A43514',
          900: '#872F14',
        },
        secondary: {
          50: '#F8F9FA',
          100: '#EBEEF1',
          200: '#D3DAE1',
          300: '#ADB9C7',
          400: '#8092A8',
          500: '#5F748D',
          600: '#4A5C75',
          700: '#3D4B5F',
          800: '#354050',
          900: '#2F3844',
        },
        accent: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
      },
    },
  },
  plugins: [],
};

export default config;
