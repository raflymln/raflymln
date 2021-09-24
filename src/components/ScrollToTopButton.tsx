import { useEffect, useState } from "react";
import Link from "next/link";

import * as Images from "@/components/Images";

const Button = () => {
    const [isRocketActive, setRocketActiveState] = useState(false);
    const [isOpen, setOpenState] = useState(false);
    const [isHittingBottom, setIfHittingBottom] = useState(false);

    const scrollToTop = () => {
        scrollTo(0, 1000);

        setRocketActiveState(true);
        setTimeout(() => setRocketActiveState(false), 2500);
    };

    const scrollTiming = (t: number) => {
        return -Math.pow(2, -10 * t) + 1;
    };

    const scrollTo = (c: any, e: number, d?: any) => {
        d || (d = scrollTiming);

        let a = document.documentElement;
        let b;

        if (0 === a.scrollTop) {
            b = a.scrollTop;
            ++a.scrollTop;
            a = b + 1 === a.scrollTop-- ? a : document.body;
        }

        b = a.scrollTop;

        0 >= e ||
            ("object" === typeof b && (b = (b as any).offsetTop),
            "object" === typeof c && (c = c.offsetTop),
            ((a, b, c, f, d, e, h) => {
                const g = () => {
                    0 > f || 1 < f || 0 >= d ? (a.scrollTop = c) : ((a.scrollTop = b - (b - c) * h(f)), (f += d * e), setTimeout(g, e));
                };
                g();
            })(a, b, c, 0, 1 / e, 20, d));
    };

    useEffect(() => {
        document.body?.classList.toggle("overflow-x-hidden", isRocketActive);
        document.querySelector("#rocket-wrapper")?.classList.toggle("animate-shake", isRocketActive);

        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                setOpenState(true);
            } else {
                setOpenState(false);
            }

            if (window.innerHeight + Math.ceil(window.pageYOffset) >= document.body.offsetHeight) {
                setIfHittingBottom(true);
            } else {
                setIfHittingBottom(false);
            }
        });
    });

    return (
        <>
            {/* Scroll to Top Button */}
            {isOpen && (
                <Link href="#0" passHref={true}>
                    <button
                        onClick={scrollToTop}
                        className={`btn fixed right-8 bottom-8 z-50 animate-shake duration-100 text-white !rounded-full animate-duration-[0.5s] ${
                            isHittingBottom ? "animate-iteration-infinite bg-red-600" : "bg-theme-blue-very-dark animate-iteration-[1]"
                        }`}>
                        <span className={`!p-5 !rounded-full ${isHittingBottom ? "bg-red-500" : "bg-theme-blue-dark"}`}>
                            <svg className="text-white fill-current w-5 h-auto" width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.65 38.7H19.35V12.9L10.75 21.5L6.44995 19.35L21.5 4.29999L36.5499 19.35L32.2499 21.5L23.65 12.9V38.7Z" />
                            </svg>
                        </span>
                    </button>
                </Link>
            )}

            {/* Rocket Section */}
            {isRocketActive && (
                <div className="h-full w-full fixed left-0 top-0 flex items-center justify-center z-[999] bg-black animate-[rocket-bg-fadein] animate-duration-[2.5s]">
                    <img src={Images.Rocket} alt="rocket" className="transform animate-[rocket-fly] animate-duration-[2.5s]" />
                </div>
            )}
        </>
    );
};

export default function Wrapper({ children }: any) {
    return (
        <>
            <section id="rocket-wrapper" className="h-full w-full">
                {children}
            </section>
            <Button />
        </>
    );
}
