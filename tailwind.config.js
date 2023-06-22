/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    safelist: ["hidden", "sm:hidden", "sm:block"],

    theme: {
        extend: {
            backgroundImage: {
                "bintendo-direct": "url(/BintendoDirect.png)",
                "featured-bins": "url(/FeaturedBins.png)",
            },
            colors: {
                bintendo: "#E41319",
            },
            fontFamily: {
                "small-caps": ["Alegreya Sans SC", "sans-serif"],
            },
            transitionTimingFunction: {
                jiggle: "cubic-bezier(.5, 3, .5, -2)",
            },
            keyframes: {
                wiggle: {
                    "0%, 100%": { transform: "rotate(-3deg)" },
                    "50%": { transform: "rotate(3deg)" },
                },
                animation: {
                    wiggle: "wiggle 1s ease-in-out infinite",
                },
            },
        },
    },
    plugins: [],
};
