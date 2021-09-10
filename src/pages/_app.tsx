import type { AppProps } from "next/app";

import { useEffect } from "react";
import Head from "next/head";
import AOS from "aos";

import "../styles/globals.css";
import "aos/dist/aos.css";

import ScrollToTop from "@/components/ScrollToTopButton";

export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        document.documentElement.lang = "en-us";

        AOS.init({
            easing: "ease-out-cubic",
            offset: 50,
            delay: 200,
            mirror: true,
            // once: true,
        });
    }, []);

    return (
        <>
            <Head>
                <title>Rafly Maulana</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="manifest" crossOrigin="use-credentials" href="/manifest.json" />
                <meta name="viewport" content="initial-scale=1" />
                <meta name="description" content="Rafly Maulana was a fullstack developer, designer, and producer, from Indonesia." />
                <meta name="theme-color" content="#57A773" />
            </Head>

            <ScrollToTop>
                <Component {...pageProps} id="component" />
            </ScrollToTop>
        </>
    );
}
