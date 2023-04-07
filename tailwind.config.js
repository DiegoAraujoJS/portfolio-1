/** @type {import('tailwindcss').Config} */
export default {

    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                sm: "480px",
            },
            fontFamily: {
                nunito: ["Nunito", "sans-serif"],
            }
        },

    },
    plugins: [],
}

