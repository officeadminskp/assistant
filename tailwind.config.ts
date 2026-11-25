import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: { colors: { navy: "#0B2545", sky: "#DCEBFA", slate2: "#5B6770" } } },
  plugins: [],
} satisfies Config;
