import { type Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        KoHo: ["KoHo"],
        satoshi: ["satochi"],
        Poppins: ["Poppins"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
} satisfies Config;
