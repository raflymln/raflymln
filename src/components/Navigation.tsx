import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";

import * as Images from "@/components/Images";

const NavLink = ({ children, ...props }: any) => {
    const router = useRouter();

    if (router.pathname === props.href) {
        return (
            <Link href={props.href}>
                <a className={`bg-white rounded-3.5 px-4 py-1 hover:opacity-70 duration-200 ${props.className}`}>
                    <h3 className="font-baloo text-3xl md:text-lg text-theme-green-light">{children}</h3>
                </a>
            </Link>
        );
    } else {
        return (
            <Link href={props.href}>
                <a className={`font-baloo text-3xl md:text-xl text-white hover:opacity-70 duration-200 ${props.className}`}>{children}</a>
            </Link>
        );
    }
};

const Menu = () => {
    return (
        <>
            <NavLink href="/">Home</NavLink>
            <NavLink href="#about">About Me</NavLink>
            <NavLink href="#contact">Contact</NavLink>
        </>
    );
};

export default function Navigation() {
    const [menuOpened, showMenu] = useState(false);

    return (
        <>
            {/* Desktop Menu */}
            <nav
                className="relative w-max rounded-3.5 hidden md:flex flex-row justify-center items-center py-3 px-6 bg-theme-green-light space-x-4 animate-[navigation-pulse]"
                style={{ animationIterationCount: "infinite", animationDuration: "2s" }}
                data-aos="fade-down">
                <section className="h-12 w-12 p-1 rounded-full bg-white">
                    <img src={Images.Logo} alt="Logo" className="h-full w-auto transform scale-x-[-1]" />
                </section>

                <Menu />
            </nav>

            {/* Mobile Menu */}
            <section className="md:hidden">
                <nav
                    className="relative w-max rounded-3.5 flex flex-row justify-center items-center py-3 px-6 bg-theme-green-light space-x-4 animate-[navigation-pulse]"
                    style={{ animationIterationCount: "infinite", animationDuration: "2s" }}
                    onClick={() => showMenu(true)}
                    data-aos="fade-down">
                    <section className="h-12 w-12 p-1 rounded-full bg-white">
                        <img src={Images.Logo} alt="Logo" className="h-full w-auto transform scale-x-[-1]" />
                    </section>
                    <NavLink href="#0" className="!text-xl tracking-wider">
                        Menu
                    </NavLink>
                </nav>

                {menuOpened && (
                    <div className="fixed left-0 top-0 w-screen h-screen bg-theme-green-light z-[999] flex flex-col items-center justify-center space-y-4" data-aos="fade-up">
                        <button onClick={() => showMenu(false)} className="absolute right-4 top-4 rounded-full bg-white text-theme-green-light p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path
                                    d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"
                                    strokeWidth="4px"
                                />
                            </svg>
                        </button>

                        <section className="h-60 w-60 p-1 !mb-8 rounded-full bg-white">
                            <img src={Images.Logo} alt="Logo" className="h-full w-auto transform scale-x-[-1]" />
                        </section>

                        <Menu />
                    </div>
                )}
            </section>
        </>
    );
}
