import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom1: ["Capriola"],
        custom: ["Outfit"],
        body: ["Outfit"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#f00",
        secondary: "#111",
        accent: "#fff",
        accentVariant:"#f9f9f9"
      },
      backgroundImage: {
        herosection: "url('/herosectionImg.jpg')",
        aboutsection: "url('/aboutus.jpg')",
        nature: "url('/nature.jpg')",
        womenclass: "url('/women1.jpg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
