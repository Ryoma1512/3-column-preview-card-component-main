// const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // fontfamily:{
      //   bs:"'Big Shoulders Display', cursive",
      //   ld:"'Lexend Deca', sans-serif",
      // },
      colors: {
      'darkcyan': {
        '50': '#f2f8f8', 
        '100': '#e6f0f1', 
        '200': '#bfdadb', 
        '300': '#99c3c6', 
        '400': '#4d969b', 
        '500': '#006970', 
        '600': '#005f65', 
        '700': '#004f54', 
        '800': '#003f43', 
        '900': '#003337',
    },
    'lightorange': {
      '50': '#fef9f4', 
      '100': '#fcf3e9', 
      '200': '#f8e1c9', 
      '300': '#f4cfa8', 
      '400': '#ebac67', 
      '500': '#e38826', 
      '600': '#cc7a22', 
      '700': '#aa661d', 
      '800': '#885217', 
      '900': '#6f4313',
  },
    },
    },
  
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
