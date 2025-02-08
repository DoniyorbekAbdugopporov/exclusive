/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "poppins-bold": ['"Poppins Bold", sans-serif'],
        "poppins-regular": ['"Poppins Regular", sans-serif'],
        "poppins-medium": ['"Poppins Medium", sans-serif'],
        "inter-regular": ['"Inter Regular",sans-serif'],
        "inter-medium": ['"Inter Medium",sans-serif'],
      },
    },
    colors: {
      primary: "#000000",
    },
    container: {
      center: true,
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1286px",
      },
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "0",
        xl: "0",
        "2xl": "0",
      },
    },
  },
  plugins: [],
};