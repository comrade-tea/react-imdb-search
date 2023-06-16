/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // "dark": "#01283b",
                // "light": "#fffeff",
                // "bright": "#b5bdbf",
                "primary": "#2C3E50",
                "primary--light": "#56687F",
                "secondary": "#E74C3C",
                "accent": "#3498DB",
            }
        },
    },
    plugins: [],
}

// Primary Color: #2C3E50 (Midnight Blue)
// Secondary Color: #E74C3C (Alizarin)
// Accent Color: #3498DB (Peter River)
