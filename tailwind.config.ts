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
      "heaven-green": "#2ed3c0",
      "heaven-red": "#de5d58",
      "heaven-low-gray": "#a0a0a0",
      "heaven-gray": "#23252b",
      "heaven-white": "#ffffff",
    },
  },
  plugins: [],
}
export default config
