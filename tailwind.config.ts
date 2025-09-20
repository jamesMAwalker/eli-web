import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '475px',
        lg: '1025px',
        xl: '1200px', // navbar collapses on this breakpoint
        xxxl: '1700px', // navbar collapses on this breakpoint
        '2k': '2200px'
      },
      // backgroundImage: {
      //   'site': "url('/noise-bg.png')",
      // },
      colors: {
        primary: {
          100: 'rgba(var(--color-primary-100) / <alpha-value>)',
          150: 'rgba(var(--color-primary-150) / <alpha-value>)',
          300: 'rgba(var(--color-primary-300) / <alpha-value>)',
          500: 'rgba(var(--color-primary-500) / <alpha-value>)',
          600: 'rgba(var(--color-primary-600) / <alpha-value>)',
          900: 'rgba(var(--color-primary-900) / <alpha-value>)'
        },
        accent: {
          300: 'rgba(var(--color-accent-300) / <alpha-value>)'
        },
        neutral: {
          100: 'rgba(var(--color-neutral-100) / <alpha-value)',
          200: 'rgba(var(--color-neutral-200) / <alpha-value)',
          300: 'rgba(var(--color-neutral-300) / <alpha-value)',
          400: 'rgba(var(--color-neutral-400) / <alpha-value)',
          500: 'rgba(var(--color-neutral-500) / <alpha-value)',
          600: 'rgba(var(--color-neutral-600) / <alpha-value)',
          700: 'rgba(var(--color-neutral-700) / <alpha-value)',
          800: 'rgba(var(--color-neutral-800) / <alpha-value)',
          900: 'rgba(var(--color-neutral-900) / <alpha-value)'
        },
      },
      gap: {
        xs: '5px',
        sm: '10px',
        ms: '15px',
        md: '25px',
        ml: '40px',
        lg: '50px',
        xl: '75px',
        xxl: '100px'
      },
      spacing: {
        xs: '5px',
        sm: '10px',
        ms: '15px',
        md: '25px',
        ml: '40px',
        lg: '50px',
        xl: '75px',
        xxl: '100px'
      }
    },
  },
  plugins: [],
} satisfies Config;
