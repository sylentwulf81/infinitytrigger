import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "var(--font-jp)", "sans-serif"],
        sans: ["var(--font-sans)", "var(--font-jp)", "sans-serif"],
        jp: ["var(--font-jp)", "sans-serif"],
      },
      colors: {
        platinum: {
          DEFAULT: "#d9d9d9",
          100: "#2b2b2b",
          200: "#575757",
          300: "#828282",
          400: "#adadad",
          500: "#d9d9d9",
          600: "#e0e0e0",
          700: "#e8e8e8",
          800: "#f0f0f0",
          900: "#f7f7f7",
        },
        white_smoke: {
          DEFAULT: "#eff2ef",
          100: "#2b352b",
          200: "#566956",
          300: "#859b85",
          400: "#b9c6b9",
          500: "#eff2ef",
          600: "#f2f4f2",
          700: "#f5f7f5",
          800: "#f8f9f8",
          900: "#fcfcfc",
        },
        indian_red: {
          DEFAULT: "#d16666",
          100: "#300e0e",
          200: "#601d1d",
          300: "#902b2b",
          400: "#c03939",
          500: "#d16666",
          600: "#da8484",
          700: "#e4a3a3",
          800: "#edc2c2",
          900: "#f6e0e0",
        },
        chocolate_cosmos: {
          DEFAULT: "#461220",
          100: "#0e0406",
          200: "#1c070d",
          300: "#290b13",
          400: "#370e19",
          500: "#461220",
          600: "#88233e",
          700: "#cb355d",
          800: "#dc7893",
          900: "#eebcc9",
        },
        cerulean: {
          DEFAULT: "#007ea7",
          100: "#001922",
          200: "#003243",
          300: "#004c65",
          400: "#006587",
          500: "#007ea7",
          600: "#00b1ed",
          700: "#32ccff",
          800: "#76ddff",
          900: "#bbeeff",
        },
        brand: {
          logo: "#d16666",
          accent: "#eff2ef",
          lavender: "#d9d9d9",
          mint: "#007ea7",
          dark: "#461220",
          teal: "#007ea7",
          gray: "#d9d9d9",
          pink: "#d16666",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#d16666",
          foreground: "#eff2ef",
        },
        secondary: {
          DEFAULT: "#d9d9d9",
          foreground: "#461220",
        },
        destructive: {
          DEFAULT: "#d16666",
          foreground: "#eff2ef",
        },
        muted: {
          DEFAULT: "#461220",
          foreground: "#d9d9d9",
        },
        accent: {
          DEFAULT: "#007ea7",
          foreground: "#eff2ef",
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
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(1.25rem)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slow-zoom": {
          from: { transform: "scale(1)" },
          to: { transform: "scale(1.06)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.9s ease-out both",
        "fade-in": "fade-in 1.1s ease-out both",
        "slow-zoom": "slow-zoom 28s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
