/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    safelist: [
        "hidden",
        "sm:hidden",
        "sm:block",
        "bg-big-trash",
        "bg-industrial-trash",
        "bg-slim-trash",
        "bg-sort-trash",
        "bg-eco-trash",
        "bg-wes-bins",
        "bg-garbage-truck",
        "bg-recycling",
        "bg-beach-trash",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "bintendo-direct": "url(/BintendoDirect.png)",
                "featured-bins": "url(/FeaturedBins.png)",
                "big-trash": "url(/BigTrash.png)",
                "industrial-trash": "url(/IndustrialTrash.png)",
                "slim-trash": "url(/SlimTrash2.png)",
                "sort-trash": "url(/SortTrash.png)",
                "eco-trash": "url(/EcoTrash.png)",
                "wes-bins": "url(/WesBins.jpg)",
                "garbage-truck": "url(/GarbageTruck.jpg)",
                recycling: "url(/Recycling.jpg)",
                "beach-trash": "url(/BeachTrash.jpg)",
            },
            boxShadow: {
                "button-initial": "0 0 0 0 rgba(228,19,25,1)",
                "button-hover": "0 0 0 4px rgba(153,27,27,1)",
            },
            colors: {
                bintendo: "#E41319",
                "bintendo-light": "#EFEFEF",
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
