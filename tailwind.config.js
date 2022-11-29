const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type { import('tailwindcss').Config } */

tailwindConfig = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                secondary: ['var(--quiche-font)', ...fontFamily.sans],
            },
            fontSize: {
                '10xl': ['10rem', { lineHeight: '1' }],
            },
        },
    },
    plugins: [],
}

module.exports = tailwindConfig;