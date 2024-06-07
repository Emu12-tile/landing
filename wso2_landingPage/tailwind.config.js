/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':"#00ADEF",
        "secondary":"#FB6C10",
        "tartiary":"#707070",
        "pink":"#EE9AE5",

      },
      // animation:{
      //   "loop-scroll":"loop-scroll 50s linear infinte",
      // },
      // keyframes:{
      //   "loop-scroll":{
      //     from:{transform:"translateX(0)"},
      //     to:{traansform:"translateX(100%)"},
      //   }
      // },
      boxShadow: {
        'regal-blue': '#243c5a',
      },
      
    },
  },
  plugins: [],
}

