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
        secondary: "#999",
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
      backgroundImage: {
        "card-gradient": "linear-gradient(96deg, #0076ce 0%, #9400d3 100%)",
      },
      boxShadow: {
        custom: "2px 4px 15px 0px rgba(133,133,167,0.25)",
      },
    },
  },
  plugins: [],
};
