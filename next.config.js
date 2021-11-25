const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const nextImages = require("next-images");
const nextPWA = require("next-pwa");

const runtimeCaching = require("next-pwa/cache");
const path = require("path");

const config = (phase) => {
    let plugins = [nextImages];
    let settings = {
        reactStrictMode: true,
        distDir: "build",
        swcMinify: true,
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
    };

    if (phase !== PHASE_DEVELOPMENT_SERVER) {
        plugins.push(nextPWA);
    }

    return {
        plugins,
        settings,
    };
};

const pipe = (funcs) => (value) => funcs.reduce((v, f) => f(v), value);
module.exports = (phase, { defaultConfig }) => {
    const cfg = config(phase, { defaultConfig });
    return pipe(cfg.plugins)(cfg.settings);
};
