import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/Components/**/*.{ts,tsx}", "./src/app/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
