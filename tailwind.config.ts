/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
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
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        progress: {
          DEFAULT: "hsl(var(--progress))",
          foreground: "hsl(var(--progress-foreground))",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      typography: () => ({
        DEFAULT: {
          css: {
            "--tw-prose-headings": "hsl(var(--foreground))",
            "--tw-prose-invert-headings": "hsl(var(--foreground))",

            "--tw-prose-links": "hsl(var(--foreground))",
            "--tw-prose-invert-links": "hsl(var(--foreground))",

            "--tw-prose-bold": "hsl(var(--foreground))",
            "--tw-prose-invert-bold": "hsl(var(--foreground))",

            "--tw-prose-counters": "hsl(var(--foreground))",
            "--tw-prose-invert-counters": "hsl(var(--foreground))",

            "--tw-prose-bullets": "hsl(var(--foreground))",
            "--tw-prose-invert-bullets": "hsl(var(--foreground))",

            "--tw-prose-quotes": "hsl(var(--foreground))",
            "--tw-prose-invert-quotes": "hsl(var(--foreground))",
            "--tw-prose-quote-borders": "hsl(var(--foreground))",
            "--tw-prose-invert-quote-borders": "hsl(var(--foreground))",

            "--tw-prose-code": "hsl(var(--foreground))",
            "--tw-prose-invert-code": "hsl(var(--foreground))",
          },
        },
      }),
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}
