import { breakpoints, colors } from "./src/app/theme";
import tailwindPresetMantine from "tailwind-preset-mantine";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [
    tailwindPresetMantine({
      mantineBreakpoints: breakpoints,
      mantineColors: colors,
    }),
  ],
  plugins: [],
  theme: {
    extend: {
      animation: {
        grid: "grid 15s linear infinite",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      colors: {
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        "color-1": "hsl(var(--color-1))",
        "color-2": "hsl(var(--color-2))",
        "color-3": "hsl(var(--color-3))",
        "color-4": "hsl(var(--color-4))",
        "color-5": "hsl(var(--color-5))",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        grid: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
        "aurora-border": {
          "0%, 100%": {
            borderRadius: "37% 29% 27% 27% / 28% 25% 41% 37%",
          },
          "25%": {
            borderRadius: "47% 29% 39% 49% / 61% 19% 66% 26%",
          },
          "50%": {
            borderRadius: "57% 23% 47% 72% / 63% 17% 66% 33%",
          },
          "75%": {
            borderRadius: "28% 49% 29% 100% / 93% 20% 64% 25%",
          },
        },
        "aurora-1": {
          "0%, 100%": {
            top: "0",
            right: "0",
          },
          "50%": {
            top: "50%",
            right: "25%",
          },
          "75%": {
            top: "25%",
            right: "50%",
          },
        },
        "aurora-2": {
          "0%, 100%": {
            top: "0",
            left: "0",
          },
          "60%": {
            top: "75%",
            left: "25%",
          },
          "85%": {
            top: "50%",
            left: "50%",
          },
        },
        "aurora-3": {
          "0%, 100%": {
            bottom: "0",
            left: "0",
          },
          "40%": {
            bottom: "50%",
            left: "25%",
          },
          "65%": {
            bottom: "25%",
            left: "50%",
          },
        },
        "aurora-4": {
          "0%, 100%": {
            bottom: "0",
            right: "0",
          },
          "50%": {
            bottom: "25%",
            right: "40%",
          },
          "90%": {
            bottom: "50%",
            right: "25%",
          },
        },
      },
    },
  },
};
export default config;
