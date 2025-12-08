/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                sauco: {
                    navy: "#0a192f", // Deep Navy
                    gold: "#d4af37", // Metallic Gold
                    cream: "#f5f5dc", // Cream/Beige for text/bg contrast
                    accent: "#64ffda", // Cyan/Teal for modern tech feel or highlights
                    dark: "#020c1b", // Darker background
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
