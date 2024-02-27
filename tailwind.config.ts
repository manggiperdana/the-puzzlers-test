import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        //Our fall animation keyframes
        "grow": {
          "0%": { transform: "scale(1);" },
          "10%": { transform: "scale(1.1);" },
          "20%": { transform:"scale(1.2);" },
          "30%": { transform:"scale(1.3);" },
          "40%": { transform: "scale(1.4);" },
          "50%": { transform: "scale(1.5);" },
          "60%": { transform: "scale(1.4);" },
          "70%": { transform: "scale(1.3);" },
          "80%": { transform: "scale(1.2);" },
          "90%": { transform: "scale(1.1);" },
          "100%": { transform: "scale(1);" },
        },
        "infinite-scroll": {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },

      animation: {
        // You can then reference these keyframes by name in the
        // animation section of your theme configuration
        "grow": "grow 3s infinite",
        "infinite-scroll": "infinite-scroll 25s linear infinite",
        // animation shorthand CSS property i.e
        // animation-name | animation-duration | animation-timing-function
        // animation-iteration-count
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      sans: ['var(--font-inter)'],
      andada: ['var(--font-andada-pro)'],
    },
  },
  plugins: [],
};
export default config;
