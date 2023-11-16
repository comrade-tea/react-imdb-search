   /** @type {import('tailwindcss').Config} */
   import defaultTheme from "tailwindcss/defaultTheme";

   export default {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      screens: {
         'xs': '480px',
         'sw': '580px',
         ...defaultTheme.screens,
      },
      container: {
         center: true,
         // padding: "30px",
         padding: "max(6vw, 30px)",
         screens: {
            xl: '1240px',
            '2xl': '1500px',
         },
      },
      extend: {
         colors: {
            // "dark": "#01283b",
            // "light": "#fffeff",
            // "bright": "#b5bdbf",
            "primary": "#2C3E50",
            "primary--light": "#56687F",
            "primary--gray": "#9ca3af",
            "secondary": "#E74C3C",
            "accent": "#3498DB",
         },
      },
   },
   plugins: [],
}

// Primary Color: #2C3E50 (Midnight Blue)
// Secondary Color: #E74C3C (Alizarin)
// Accent Color: #3498DB (Peter River)
