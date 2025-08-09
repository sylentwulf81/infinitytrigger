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
      colors: {
        // Brand palette
        // Previous values (backup):
        // brand: {
        //   lavender: "#d9dbf1",    // Soft lavender/periwinkle
        //   gray: "#acb0bd",        // Muted gray-blue
        //   mint: "#b1e69b",        // Soft mint green (Volt-like but distinct)
        //   teal: "#416165",        // Deep teal
        //   dark: "#0b3948",        // Very dark teal/blue
        //   pink: "#FFC2CC",        // Soft pink (user requested)
        // }
        brand: {
          // New logo color
          logo: "#D16666",
          // Accent color provided (not mapped previously)
          accent: "#D4F2DB",
          // Updates per request
          lavender: "#BCB6FF", // updates Brand Lavender
          mint: "#CEF7A0",     // updates Brand Mint
          dark: "#3A7D44",     // updates Brand Dark
          // Unchanged legacy brand colors retained
          teal: "#416165",
          gray: "#acb0bd",
          pink: "#FFC2CC",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // Previous primary (backup):
        // primary: {
        //   DEFAULT: "hsl(350, 100%, 88%)", // Sakura pink
        //   foreground: "hsl(355, 30%, 15%)", // Dark brown for text on pink
        // },
        primary: {
          DEFAULT: "#D16666", // logo color
          foreground: "#0B1C12", // dark text over light red; tweak if needed
        },
        secondary: {
          DEFAULT: "hsl(0, 0%, 100%)", // White
          foreground: "hsl(350, 100%, 88%)", // Sakura pink
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(355, 30%, 15%)", // Dark brown
          foreground: "hsl(0, 0%, 90%)", // Light grey for text on dark brown
        },
        // Previous accent (backup):
        // accent: {
        //   DEFAULT: "hsl(355, 30%, 25%)", // Lighter brown
        //   foreground: "hsl(0, 0%, 98%)", // Off-white
        // },
        accent: {
          DEFAULT: "#D4F2DB", // provided accent
          foreground: "#0B1C12",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

