import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        KoHo: ["KoHo"],
        satoshi: ["satochi"],
        Poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
} satisfies Config;
