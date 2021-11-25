import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";

import * as Images from "@/components/Images";

const NavLink = ({ children, className, currentMenu, setCurrentMenu, currentPath, ...props }: any) => {
    if (setCurrentMenu) {
        props.onMouseEnter = () => setCurrentMenu(props.href);
        props.onMouseLeave = () => setCurrentMenu(currentPath);
    }

    if (props.href === currentMenu) {
        return (
            <Link href={props.href}>
                <a className={`bg-white rounded-3.5 px-4 py-1 duration-200 ${className}`} {...props}>
                    <h3 className="font-baloo text-3xl md:text-lg text-theme-green-light">{children}</h3>
                </a>
            </Link>
        );
    } else {
        return (
            <Link href={props.href} passHref>
                <a className={`font-baloo text-3xl md:text-xl text-white duration-200 ${className}`} {...props}>
                    {children}
                </a>
            </Link>
        );
    }
};

const Menu = () => {
    const currentPath = useRouter().pathname;
    const [currentMenu, setCurrentMenu] = useState(currentPath);

    const menuList = [
        { title: "Home", href: "/" },
        { title: "About Me", href: "/#about" },
        { title: "Contact", href: "/#contact" },
        // { title: "Investment", href: "/invest" },
    ];

    return (
        <>
            {menuList.map((x, i) => (
                <NavLink key={i} href={x.href} currentMenu={currentMenu} setCurrentMenu={setCurrentMenu} currentPath={currentPath}>
                    {x.title}
                </NavLink>
            ))}
        </>
    );
};

export default function Navigation() {
    const [menuOpened, showMenu] = useState(false);

    return (
        <div className="relative container w-full z-[999999] pt-12">
            <div className="relative w-full rounded-3.5 flex flex-row justify-between items-center">
                <section className="h-16 w-16 p-1 rounded-full bg-theme-blue-light ">
                    <img src={Images.Logo} alt="Logo" className="h-full w-auto transform scale-x-[-1]" />
                </section>

                {/* Desktop Menu */}
                <div
                    className="relative w-max rounded-3.5 hidden md:flex flex-row justify-end items-center py-3 px-6 space-x-6 bg-theme-green-light"
                    style={{ boxShadow: "0 0 0 6px rgba(87, 167, 115, 0.5)" }}>
                    <Menu />
                </div>

                {/* Mobile Menu */}
                <section className="md:hidden relative z-[999]">
                    <div
                        className="relative w-max rounded-3.5 flex flex-row justify-center items-center py-3 px-6 bg-theme-green-light space-x-4"
                        style={{ boxShadow: "0 0 0 6px rgba(87, 167, 115, 0.5)" }}
                        onClick={() => showMenu(true)}
                        data-aos="fade-down">
                        <NavLink href="#0" className="!text-xl tracking-wider font-baloo text-white">
                            Menu
                        </NavLink>
                    </div>

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
            </div>
        </div>
    );
}
