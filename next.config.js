const nextImages = require("next-images");
const nextPWA = require("next-pwa");

const runtimeCaching = require("next-pwa/cache");
const path = require("path");

const config = {
    // prettier-ignore
    plugins: [
        nextImages,
        nextPWA
    ],
    settings: {
        reactStrictMode: true,
        distDir: "build",
        pwa: {
            dest: "public",
            runtimeCaching,
        },
        webpack: (config) => {
            config.resolve.alias = {
                ...config.resolve.alias,
                "@": path.join(__dirname, "src"),
                "@public": path.join(__dirname, "public"),
            };
            return config;
        },
    },
};

const pipe = (funcs) => (value) => funcs.reduce((v, f) => f(v), value);
module.exports = pipe(config.plugins)(config.settings);
