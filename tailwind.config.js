/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "dark": "#272927",
                "light": "#fdf7f6",
                "bright": "#ec3430",
            }
        },
    },
    plugins: [],
}
