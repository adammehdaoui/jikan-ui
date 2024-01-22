import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/top/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "heaven-blue": "#00a3fe",
      "heaven-red": "#de5d58",
      "heaven-low-gray": "#f2f5f9",
      "heaven-gray": "#6c727f",
      "heaven-white": "#ffffff",
    },
  },
  plugins: [],
}
export default config
