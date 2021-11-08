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
      },

      screens: {
        'sm': '320px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
    
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
  ],
}