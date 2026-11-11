import animate from "tailwindcss-animate";
import { setupInspiraUI } from "@inspira-ui/plugins";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  safelist: ["dark"],
  prefix: "",
  content: [
    // Example content paths...
    './components/**/*.{vue,js}', 
    './layouts/**/*.vue', 
    './pages/**/*.vue'
  ],
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Safiro2', 'system-ui'],
        safiro: ['Safiro', 'system-ui'],
        bulevar: ['Bulevar', 'sans-serif'],
        caveat: ['Caveat', 'cursive'],
        roboto: ['Roboto', 'roboto'],
        // Portfolio v2: display + body pair
        display: ['Safiro Display', 'Safiro', 'system-ui', 'sans-serif'],
        body: ['system-ui', '-apple-system', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      colors: {
        // Portfolio v2 tokens (see DESIGN.md)
        pf: {
          bg: 'rgb(var(--pf-bg) / <alpha-value>)',
          surface: 'rgb(var(--pf-surface) / <alpha-value>)',
          raised: 'rgb(var(--pf-raised) / <alpha-value>)',
          line: 'rgb(var(--pf-line) / <alpha-value>)',
          text: 'rgb(var(--pf-text) / <alpha-value>)',
          muted: 'rgb(var(--pf-muted) / <alpha-value>)',
          accent: 'rgb(var(--pf-accent) / <alpha-value>)',
          cta: 'rgb(var(--pf-cta) / <alpha-value>)',
          'on-cta': 'rgb(var(--pf-on-cta) / <alpha-value>)',
          hero: 'rgb(var(--pf-hero) / <alpha-value>)',
          'hero-text': 'rgb(var(--pf-hero-text) / <alpha-value>)',
          'hero-muted': 'rgb(var(--pf-hero-muted) / <alpha-value>)',
          'hero-line': 'rgb(var(--pf-hero-line) / <alpha-value>)',
          'hero-accent': 'rgb(var(--pf-hero-accent) / <alpha-value>)',
          live: 'rgb(var(--pf-live) / <alpha-value>)',
        },
        // shadcn tokens
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))", // Default ring color
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        card: '1.75rem',
        tile: '1.125rem',
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "collapsible-down": {
          from: { height: 0 },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        "collapsible-up": {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 },
        },
        pulse: {
          '0%, 100%': { 
            opacity: '0.6',
            transform: 'scale(0.98)'
          },
          '50%': { 
            opacity: '1',
            transform: 'scale(1)'
          },
        },
        loadingProgress: {
          '0%': {
            transform: 'translateX(-100%)'
          },
          '100%': {
            transform: 'translateX(0)'
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-in-out",
        "collapsible-up": "collapsible-up 0.2s ease-in-out",
        "pulse": 'pulse 1.5s infinite',
        "loadingProgress": 'loadingProgress 2s ease-in-out',
      },
    },
  },
  plugins: [animate, setupInspiraUI],
  corePlugins: {
    // Disable the default ring utilities
    ringColor: false,
    ringWidth: false,
    ringOffsetColor: false,
    ringOffsetWidth: false,
  },
};