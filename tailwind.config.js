/** @type { import('tailwindcss').Config } */

tailwindConfig = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontSize: {
                '10xl': ['10rem', { lineHeight: '1' }],
            },
        },
    },
    plugins: [],
}

module.exports = tailwindConfig;