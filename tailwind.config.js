// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", 
  theme: {
    extend: {
      fontfamily: {
        sans: ["Inter", "sans-serif"],
},
colors:{
  primary: "#0fe9808",
},
container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
          
          
     },
    },
   },
  },
  plugins: [],
};
