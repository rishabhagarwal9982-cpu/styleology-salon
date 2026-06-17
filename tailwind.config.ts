/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#111111",
        gold: "#D4AF37",
        lightGold: "#E6C76A",
        lightText: "#C9C9C9",
        accent: "#F5F5F5"
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        cormorant: ["Cormorant Garamond", "serif"],
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"]
      },
      backgroundImage: {
        "gradient-gold": "linear-gradient(135deg, #D4AF37 0%, #E6C76A 100%)"
      }
    }
  },
  plugins: []
}
