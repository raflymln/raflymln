module.exports = {
    mode: "jit",
    purge: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        corePlugins: {
            container: false,
        },
        extend: {
            fontFamily: {
                baloo: "Baloo",
                somatic: "Somatic",
                comfortaa: "Comfortaa",
            },
            fontWeight: {
                regular: 400,
            },
            colors: {
                black: "#2C302E",
                theme: {
                    green: {
                        light: "#57A773",
                        dark: "#157145",
                    },
                    blue: {
                        light: "#D1FAFF",
                        medium: "#9BD1E5",
                        dark: "#40A8CC",
                        "very-dark": "#3B89A4",
                    },
                },
            },
            borderRadius: {
                3.5: "1.875rem",
            },
            height: {
                124: "31rem",
                128: "32rem",
            },
            cursor: {
                grabbing: "grabbing",
            },
            keyframes: {
                wave: {
                    "0%": { transform: "rotate(0deg)" },
                    "10%": { transform: "rotate(14deg)" },
                    "20%": { transform: "rotate(-8deg)" },
                    "30%": { transform: "rotate(14deg)" },
                    "40%": { transform: "rotate(-4deg)" },
                    "50%": { transform: "rotate(10deg)" },
                    "60%": { transform: "rotate(0deg)" },
                    "100%": { transform: "rotate(0deg)" },
                },
                shake: {
                    "0%": {
                        transform: "translate(1px, 1px) rotate(0deg)",
                    },
                    "10%": {
                        transform: "translate(-1px, -2px) rotate(-1deg)",
                    },
                    "20%": {
                        transform: "translate(-3px, 0px) rotate(1deg)",
                    },
                    "30%": {
                        transform: "translate(3px, 2px) rotate(0deg)",
                    },
                    "40%": {
                        transform: "translate(1px, -1px) rotate(1deg)",
                    },
                    "50%": {
                        transform: "translate(-1px, 2px) rotate(-1deg)",
                    },
                    "60%": {
                        transform: "translate(-3px, 1px) rotate(0deg)",
                    },
                    "70%": {
                        transform: "translate(3px, 1px) rotate(-1deg)",
                    },
                    "80%": {
                        transform: "translate(-1px, -1px) rotate(1deg)",
                    },
                    "90%": {
                        transform: "translate(1px, 2px) rotate(0deg)",
                    },
                    "100%": {
                        transform: "translate(1px, -2px) rotate(-1deg)",
                    },
                },
                "navigation-pulse": {
                    "0%": {
                        "box-shadow": "0 0 0 0 rgba(87, 167, 115, 0.7)",
                    },
                    "70%": {
                        "box-shadow": "0 0 0 6px rgba(87, 167, 115, 0.5)",
                    },
                    "100%": {
                        "box-shadow": "0 0 0 10px rgba(87, 167, 115, 0)",
                    },
                },
                "rocket-fly": {
                    "0%": {
                        transform: "scale(1) translateY(100%)",
                        opacity: 1,
                    },
                    "50%": {
                        transform: "scale(0.6) translateY(20%)",
                        opacity: 0.95,
                    },
                    "100%": {
                        transform: "scale(0.3) translateY(-130%)",
                        opacity: 0,
                    },
                },
                "rocket-bg-fadein": {
                    "0%": {
                        "background-color": "rgba(0, 0, 0, 0)",
                    },
                    "50%": {
                        "background-color": "rgba(0, 0, 0, 0.5)",
                    },
                    "90%": {
                        "background-color": "rgba(0, 0, 0, 0.5)",
                    },
                    "100%": {
                        "background-color": "rgba(0, 0, 0, 0)",
                    },
                },
            },
            animation: {
                wave: "wave 2.5s infinite",
                shake: "shake 1s infinite",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        ({ addComponents }) => {
            addComponents({
                ".container": {
                    "@apply max-w-xl xl:max-w-6xl mx-auto": {},
                },
                ".btn": {
                    "@apply rounded-[30px] focus:opacity-80 cursor-pointer": {},
                },
            });
        },
    ],
};
