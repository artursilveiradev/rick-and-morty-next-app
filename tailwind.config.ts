import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "neon-green": "var(--neon-green)",
        gray: "var(--gray)",
      },
      fontFamily: {
        bungee: "var(--font-bungee)",
        orbitron: "var(--font-orbitron)",
        roboto: "var(--font-roboto)",
        vt323: "var(--font-vt323)",
      },
    },
  },
  plugins: [],
} satisfies Config;
