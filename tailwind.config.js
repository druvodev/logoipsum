/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#0076CE",
      },
      padding: {
        primary: "128px",
      },
      fontSize: {
        header: [
          "65px",
          {
            fontWeight: "700",
            lineHeight: "80px",
          },
        ],
      },
    },
  },
  plugins: [],
};
