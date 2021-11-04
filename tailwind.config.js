module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        brandBlue:"#143784",
        bodyText:"#00133C",
        cardColor: "#FFFEFC",
        menuColor:"#FFFCF0",
        airtimeColor:"#EDC218",
        dataColor:"#378A8A",
        cableColor:"#F7D1C7",
        electricityColor:"#C2722F",
        textColor:"#00133C"
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
  ],
}