import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': 'var(--font-poppins)',
      },
      colors: {
        primary: '#000A1D',
        secondary: '#000B26',
        white: '#f2f2f2',
        black: '#000000',
        app_100: '#000A1D',
        app_200: '#000B26',
        app_300: '#292738',
        app_400: '#186EF2',
        app_500: '#6D18EF',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-app': 'linear-gradient(to right, #186EF2, #6D18EF)',
        'gradient-app-hover': 'linear-gradient(to left, #186EF2, #6D18EF)',
        'gradient-app-vertical': 'linear-gradient(to bottom, #186EF2, #6D18EF)',
        'gradient-app-diagonal': 'linear-gradient(135deg, #186EF2, #6D18EF)',
      },
    },
  },
  plugins: [],
};
export default config;
