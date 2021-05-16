module.exports = {
    purge: ["./views/**/*.ejs"],
    mode: "jit",
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            transparent: "transparent",
            black: "#000000",
            white: "#FFFFFF",
            blue: {
                50: "#FBFFFE",
                100: "#DAE3E5",
                200: "#BBD1EA",
                300: "#A1C6EA",
                400: "#75ACE2",
                500: "#5A8FCD",
                600: "#507DBC",
                700: "#2A4366",
                800: "#17263B",
                900: "#04080F",
            },
            yellow: {
                50: "#E8D6A7",
                100: "#E6D29E",
                200: "#E3CE94",
                300: "#E1C57B",
                400: "#CDB370",
                500: "#BAA366",
                600: "#A9945D",
                700: "#9A8755",
                800: "#8C7B4D",
                900: "#7F7046",
            },
            red: {
                50: "#F0BFB9",
                100: "#EEB9B2",
                200: "#ECB2AA",
                300: "#EAAAA1",
                400: "#E99286",
                500: "#E98678",
                600: "#E8796A",
                700: "#D36E60",
                800: "#C06457",
                900: "#AF5B4F",
            },
            green: {
                50: "#BBF8BE",
                100: "#B4F7B8",
                200: "#ADF6B1",
                300: "#A1E5AB",
                400: "#92D09B",
                500: "#85BD8D",
                600: "#79AC80",
                700: "#6E9C74",
                800: "#648E69",
                900: "#5B815F",
            },
        },
        fontFamily: {
            domine: ["Domine", "serif"],
            rubik: ["Rubik", "sans-serif"],
            "maven-pro": ["Maven Pro", "sans-serif"],
        },
        animation: {
            moveclouds: "moveclouds linear 8s forwards infinite",
            float: "float linear 5s infinite",
        },
        keyframes: {
            moveclouds: {
                "0%": {
                    transform: "translateX(300px)",
                    opacity: "0.1",
                },
                "10%": {
                    opacity: "0.7",
                },
                "90%": {
                    opacity: "0",
                },
                "100%": {
                    opacity: "0",
                    transform: "translateX(-1000px)",
                },
            },
            float: {
                "0%": {
                    transform: "translateY(0px)",
                },
                "50%": {
                    transform: "translateY(-20px)",
                },
                "100%": {
                    transform: "translateY(0px)",
                },
            },
        },
    },
    variants: {
        mixBlendMode: ["responsive"],
        backgroundBlendMode: ["responsive"],
        isolation: ["responsive"],
        extend: {},
    },
    plugins: [require("@tailwindcss/line-clamp"), require("@markusantonwolf/tailwind-css-plugin-filters"), require("tailwindcss-blend-mode")()],
};
