import type { AppProps } from "next/app";

import { useEffect } from "react";
import Head from "next/head";
import AOS from "aos";

import "../styles/globals.css";
import "../styles/aos_custom.css";
import "../styles/illustrations_custom.css";
import "aos/dist/aos.css";
import "animate.css";

import ScrollToTop from "@/components/ScrollToTopButton";

export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        document.documentElement.lang = "en-us";

        AOS.init({
            easing: "ease-out-cubic",
            startEvent: "DOMContentLoaded",
            offset: 50,
            delay: 200,
            mirror: true,
        });
    }, []);

    return (
        <>
            <Head>
                <title>Rafly Maulana</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="manifest" crossOrigin="use-credentials" href="/manifest.json" />

                {/* Primary Meta Tags */}
                <meta name="viewport" content="initial-scale=1" />
                <meta name="title" content="Rafly Maulana" />
                <meta name="description" content="Rafly Maulana was a fullstack developer, designer, and producer, from Indonesia." />
                <meta name="theme-color" content="#57A773" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://raflymaulana.me/" />
                <meta property="og:title" content="Rafly Maulana" />
                <meta property="og:description" content="Rafly Maulana was a fullstack developer, designer, and producer, from Indonesia." />
                <meta property="og:image" content="https://raflymaulana.me/images/banner.png" />

                {/* Twitter */}
                <meta property="twitter:card" content="https://raflymaulana.me/images/banner.png" />
                <meta property="twitter:url" content="https://raflymaulana.me/" />
                <meta property="twitter:title" content="Rafly Maulana" />
                <meta property="twitter:description" content="Rafly Maulana was a fullstack developer, designer, and producer, from Indonesia." />
                <meta property="twitter:image" content="https://raflymaulana.me/images/banner.png" />
            </Head>

            <ScrollToTop>
                <Component {...pageProps} id="component" />
            </ScrollToTop>
        </>
    );
}
