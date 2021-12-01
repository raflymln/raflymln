import Link from "next/link";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import * as Images from "@/components/Images";

import { Seaweed1, Seaweed2 } from "@/components/illustrations/Seaweed";
import { HalfTree1, HalfTree2 } from "@/components/illustrations/HalfTree";
import AboutMeIllustration from "@/components/illustrations/AboutMe";

const Projects = () => {
    const ProjectList = [
        {
            href: "https://www.behance.net/gallery/132210415/Briton-English-Placement-Test",
            type: "UI/UX & Fullstack Development",
            image: "/images/projects/BRITONPlacementTest.webp",
            title: "Briton English Placement Test",
            description: "Placement test website for Briton English Education",
        },
        {
            href: "https://www.behance.net/gallery/131988309/Duta-Bahasa-Inggris-2021-2022",
            type: "UI/UX & Fullstack Development",
            image: "/images/projects/DBI2122.webp",
            title: "Duta Bahasa Inggris 2021-2022",
            description: "English Competition for SMA/SMK and equivalent in Indonesia",
        },
        {
            href: "https://www.behance.net/gallery/131966587/IndieSpices",
            type: "UI/UX & Frontend Development",
            image: "/images/projects/IndieSpices.webp",
            title: "IndieSpices",
            description: "Top Leading Supply of Spices in Indonesia",
        },
        {
            href: "https://www.behance.net/gallery/127122741/Project-V2-Portfolio-Website-Design",
            type: "Fullstack Development",
            image: "/images/projects/RaflyMaulanaV2.webp",
            title: "Rafly Maulana V2",
            description: "2nd version of my portofolio site",
        },
        {
            href: "https://www.behance.net/gallery/127108847/Project-V1-Portfolio-Web-Design",
            type: "Frontend Development",
            image: "/images/projects/RaflyMaulanaV1.webp",
            title: "Rafly Maulana V1",
            description: "1st version of my portofolio site",
        },
        {
            href: "https://www.behance.net/gallery/127174313/Project-Foxxy-E-Commerce",
            type: "Fullstack Development",
            image: "/images/projects/FoxxyECommerce.webp",
            title: "Foxxy E-Commerce",
            description: "A marketplace for every digital items",
        },
        {
            href: "https://www.behance.net/gallery/127128767/Project-Foxxy-Game-Hosting",
            type: "UI/UX",
            image: "/images/projects/FoxxyGameHosting.webp",
            title: "Foxxy Game Hosting",
            description: "A hosting service, dedicated to games",
        },
        {
            href: "https://drive.google.com/drive/folders/1UDQa3XFEwL2TBOplVRnT67uG8UpIENHV?usp=sharing",
            type: "Fullstack Development",
            image: "/images/projects/YKBJABAR.webp",
            title: "Yayasan Kemala Bhayangkari Jawa Barat",
            description: "Yayasan Kemala Bhayangkari Polda Jabar",
        },
    ];

    return (
        <section className="relative w-full mt-8 rounded-3.5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 z-50 gap-8">
            {ProjectList.map((data, index) => (
                <Link href={data.href} key={index}>
                    <a
                        className="relative scroll-snap-none w-full h-124 bg-cover rounded-3.5 flex-shrink-0 cursor-pointer hover:opacity-70 duration-200"
                        style={{ backgroundImage: `url(${data.image})`, animationDelay: `10s` }}>
                        <section className="w-full h-full bg-black opacity-50 absolute left-0 top-0 rounded-3.5 z-10" />

                        <section className="w-full h-full relative z-20 p-7 flex flex-col justify-between">
                            <div className="flex flex-row justify-between items-center">
                                <p className="rounded-3.5 text-xs font-somatic px-5 py-2 bg-black bg-opacity-50 text-white tracking-widest">{data.type}</p>

                                <div className="rounded-3.5 text-lg font-somatic p-2 bg-black bg-opacity-50 text-white tracking-wider">
                                    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.586 12.793L7 14.207L13.707 7.49997L7 0.792969L5.586 2.20697L9.879 6.49997H0.292999V8.49997H9.879L5.586 12.793Z" fill="white" />
                                    </svg>
                                </div>
                            </div>

                            <div className="space-y-1 text-white">
                                <h1 className="font-baloo text-4xl">{data.title}</h1>
                                <p className="font-comforta text-sm tracking-wider truncate">{data.description}</p>
                            </div>
                        </section>
                    </a>
                </Link>
            ))}
        </section>
    );
};

const Content = ({ children, comingSoon, ...props }: any) => {
    return (
        <Link href={props.href || "#0"} passHref={true}>
            <div className="px-10 lg:p-0 relative" data-aos="pulse">
                <div className="w-full h-full max-w-md py-7 px-10 rounded-3.5 flex items-start md:items-center justify-between flex-col-reverse md:flex-row text-theme-green-light gap-2 transform hover:scale-105 cursor-pointer duration-200 ease-in bg-gradient-to-b from-white to-theme-blue-light box-border">
                    {comingSoon && (
                        <div className="w-full h-full max-w-md py-7 px-10 rounded-3.5 flex justify-center items-center absolute left-0 top-0 bg-black bg-opacity-50">
                            <h1 className="font-baloo text-4xl pb-1 text-white">COMING SOON</h1>
                        </div>
                    )}

                    <div className="pt-4 md:pt-0">
                        <h1 className="font-baloo text-4xl pb-1">{props.title}</h1>
                        <p className="font-comfortaa text-sm leading-6">{props.description}</p>
                    </div>

                    {children}
                </div>
            </div>
        </Link>
    );
};

export default function Home() {
    return (
        <>
            <section id="intro" className="relative w-full bg-cover bg-center h-[800px] lg:h-[750px] bg-theme-blue-medium " style={{ backgroundImage: `url(${Images.MountainLandscape})` }}>
                <Navigation />

                <div className="relative container w-full h-auto flex items-center z-[999] pt-14">
                    <div className="max-w-sm text-black space-y-6">
                        <h3 className="font-somatic text-lg md:text-2xl">
                            <span className="animate-wave inline-block transform origin-bottom-right">👋</span> Hi! Welcome, I'm
                        </h3>
                        <h1 className="font-baloo text-6xl md:text-8xl" data-aos="bounce">
                            Rafly Maulana
                        </h1>
                        <p className="font-comfortaa text-lg" data-aos="fadeIn">
                            A <b>fullstack developer</b>, <b>designer</b>, and <b>producer</b>, from <span className="text-red-600">Indonesia</span>.
                        </p>
                        <Link href="#about" passHref={true}>
                            <button className="btn bg-theme-green-dark text-white mt-8" data-aos="fadeIn">
                                <span className="bg-theme-green-light">"Who Are You?"</span>
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="absolute left-0 w-full bottom-14 xl:bottom-28">
                    <div className="relative xl:container w-full h-full flex items-center">
                        <img src={Images.Logo} alt="Logo" className="absolute w-60 md:w-80 lg:w-96 h-auto right-0 z-3" data-aos="rotateIn" />
                    </div>
                </div>

                <div className="absolute top-0 left-0 w-full h-full z-10">
                    <div className="bird-container animate-duration-[15s] animate-delay-[0s]">
                        <div className="bird animate-duration-[1s] animate-delay-[-0.5s]" />
                    </div>

                    <div className="bird-container animate-duration-[16s] animate-delay-[1s]">
                        <div className="bird animate-duration-[0.9s] animate-delay-[-0.75s]" />
                    </div>

                    <div className="bird-container animate-duration-[14.6s] animate-delay-[9.5s]">
                        <div className="bird animate-duration-[1.25s] animate-delay-[-0.25s]" />
                    </div>

                    <div className="bird-container animate-duration-[16s] animate-delay-[10.25s]">
                        <div className="bird animate-duration-[1.1s] animate-delay-[-0.5s]" />
                    </div>
                </div>
            </section>

            <section id="about" className="relative w-full py-32">
                <div className="relative container w-full h-full flex flex-col xl:flex-row items-start xl:items-center space-y-10 xl:space-y-0 xl:space-x-10 justify-center z-50">
                    <AboutMeIllustration className="w-auto max-w-[589px] relative" data-aos="fade-up" />

                    <div className="text-black space-y-8 max-w-lg 2xl:max-w-md rounded-3.5 p-0 md:p-8 2xl:p-0 relative">
                        <h1 className="font-baloo text-6xl" data-aos="fadeIn" data-aos-anchor-placement="center-bottom">
                            I Learn Through Experiences
                        </h1>
                        <p className="font-comfortaa text-base font-regular leading-7" data-aos="fadeIn" data-aos-anchor-placement="center-bottom">
                            I’m Rafly, from Indonesia. I’ve spent my time to take any opportunity as well as developing my experience and skills to things like Music Producing, Graphic Designing,
                            Programming, and many others.
                            <br />
                            <br />
                            But one thing I always stick with everything is, <b>I always do every works as my passion</b>, and that's what makes me happy also giving myself a chance to deliver best
                            works that i can do.
                        </p>
                        <Link href="http://linkedin.com/in/raflymln" passHref={true}>
                            <button className="btn bg-theme-green-dark text-white" data-aos="fadeIn" data-aos-anchor-placement="center-bottom">
                                <span className="bg-theme-green-light">Great, Now Tell Me More!</span>
                            </button>
                        </Link>
                    </div>
                </div>

                <HalfTree1 />
                <HalfTree2 />
            </section>

            <section id="content" className="relative w-full flex justify-center items-center bg-gradient-to-b from-theme-green-light to-theme-green-dark overflow-hidden">
                <div className="absolute -top-1 left-0 w-full">
                    <svg className="w-full h-full" height="54" viewBox="0 0 1919 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M809.171 3.98534C1148.63 11.1645 1277.19 3.98534 1920 54V0H1849.59H1497.55H1075.1H652.651H228L809.171 3.98534Z" fill="white" />
                    </svg>
                </div>

                <div className="mx-auto pt-16 pb-40 z-50">
                    <h1 className="font-baloo text-white text-6xl text-center pb-12" data-aos="bounceInDown">
                        Links & Content
                    </h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 box-border" data-aos="zoom-in">
                        <Content title="Investment" description="Invest your money for your future, see how i do it!" comingSoon>
                            <svg className="h-full max-h-16 w-auto" viewBox="0 0 95 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4.1665 12.6309C4.1665 10.3198 5.08461 8.10326 6.71886 6.46902C8.3531 4.83477 10.5696 3.91666 12.8808 3.91666H82.5951C84.9062 3.91666 87.1228 4.83477 88.757 6.46902C90.3912 8.10326 91.3094 10.3198 91.3094 12.6309V56.2024C91.3094 58.5136 90.3912 60.7301 88.757 62.3643C87.1228 63.9986 84.9062 64.9167 82.5951 64.9167H12.8808C10.5696 64.9167 8.3531 63.9986 6.71886 62.3643C5.08461 60.7301 4.1665 58.5136 4.1665 56.2024V12.6309Z"
                                    stroke="#57A773"
                                    strokeWidth="7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M47.7384 47.4881C54.9576 47.4881 60.8098 41.6358 60.8098 34.4167C60.8098 27.1975 54.9576 21.3452 47.7384 21.3452C40.5193 21.3452 34.667 27.1975 34.667 34.4167C34.667 41.6358 40.5193 47.4881 47.7384 47.4881Z"
                                    stroke="#57A773"
                                    strokeWidth="7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M4.1665 21.3452C8.78885 21.3452 13.2219 19.509 16.4904 16.2405C19.7589 12.972 21.5951 8.53901 21.5951 3.91666"
                                    stroke="#57A773"
                                    strokeWidth="7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M73.8809 64.9167C73.8809 60.2943 75.7171 55.8613 78.9856 52.5928C82.2541 49.3243 86.6871 47.4881 91.3094 47.4881"
                                    stroke="#57A773"
                                    strokeWidth="7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </Content>

                        <Content title="Store" description="My products and my services" comingSoon>
                            <svg className="h-full max-h-16 w-auto" viewBox="0 0 66 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M55.9489 3.61742C55.3768 2.66878 54.5699 1.88358 53.606 1.33753C52.6421 0.791492 51.5538 0.503039 50.446 0.5H15.554C13.3131 0.5 11.2038 1.69432 10.0512 3.61742L1.35388 18.1097C1.05291 18.6087 0.894149 19.1805 0.894777 19.7632C0.907599 22.862 2.04894 25.85 4.1053 28.1683V55.0789C4.1053 58.6202 6.98515 61.5 10.5264 61.5H55.4737C59.0149 61.5 61.8948 58.6202 61.8948 55.0789V28.1683C63.9511 25.85 65.0925 22.862 65.1053 19.7632C65.1059 19.1805 64.9472 18.6087 64.6462 18.1097L55.9489 3.61742ZM58.6329 20.569C58.4347 22.1191 57.6789 23.544 56.5066 24.5774C55.3344 25.6108 53.8259 26.182 52.2632 26.1842C48.722 26.1842 45.8421 23.3044 45.8421 19.7632C45.8421 19.5448 45.7619 19.3522 45.7169 19.1467L45.7811 19.1339L43.3379 6.92105H50.446L58.6329 20.569ZM29.2084 6.92105H36.7885L39.3986 19.9718C39.2863 23.4135 36.4674 26.1842 33 26.1842C29.5327 26.1842 26.7138 23.4135 26.6015 19.9718L29.2084 6.92105ZM15.554 6.92105H22.6621L20.2221 19.1339L20.2864 19.1467C20.2382 19.3522 20.1579 19.5448 20.1579 19.7632C20.1579 23.3044 17.2781 26.1842 13.7369 26.1842C12.1742 26.182 10.6657 25.6108 9.49346 24.5774C8.32121 23.544 7.56536 22.1191 7.3672 20.569L15.554 6.92105ZM26.579 55.0789V45.4474H39.4211V55.0789H26.579ZM45.8421 55.0789V45.4474C45.8421 41.9062 42.9623 39.0263 39.4211 39.0263H26.579C23.0378 39.0263 20.1579 41.9062 20.1579 45.4474V55.0789H10.5264V32.1494C11.5569 32.4158 12.6196 32.6053 13.7369 32.6053C15.5599 32.6062 17.3621 32.2181 19.023 31.4668C20.684 30.7155 22.1655 29.6183 23.3685 28.2486C25.7218 30.9197 29.1699 32.6053 33 32.6053C36.8302 32.6053 40.2783 30.9197 42.6316 28.2486C43.8346 29.6183 45.3161 30.7155 46.9771 31.4668C48.638 32.2181 50.4402 32.6062 52.2632 32.6053C53.3805 32.6053 54.4431 32.4158 55.4737 32.1494V55.0789H45.8421Z"
                                    fill="#57A773"
                                />
                            </svg>
                        </Content>

                        <Content title="Blog" description="See the world from the perspective of me" comingSoon>
                            <svg className="h-full max-h-16 w-auto" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.5 51.3333H25.9167V56.4166H0.5V51.3333Z" fill="#57A773" />
                                <path d="M0.5 36.0833H25.9167V41.1666H0.5V36.0833Z" fill="#57A773" />
                                <path
                                    d="M56.4167 25.9167H5.58333C4.23515 25.9167 2.94218 25.3811 1.98887 24.4278C1.03556 23.4745 0.5 22.1815 0.5 20.8333V5.58333C0.5 4.23515 1.03556 2.94218 1.98887 1.98887C2.94218 1.03556 4.23515 0.5 5.58333 0.5H56.4167C57.7649 0.5 59.0578 1.03556 60.0111 1.98887C60.9644 2.94218 61.5 4.23515 61.5 5.58333V20.8333C61.5 22.1815 60.9644 23.4745 60.0111 24.4278C59.0578 25.3811 57.7649 25.9167 56.4167 25.9167ZM5.58333 5.58333V20.8333H56.4167V5.58333H5.58333Z"
                                    fill="#57A773"
                                />
                                <path
                                    d="M56.4167 61.4999H41.1667C39.8185 61.4999 38.5256 60.9644 37.5722 60.011C36.6189 59.0577 36.0834 57.7648 36.0834 56.4166V41.1666C36.0834 39.8184 36.6189 38.5254 37.5722 37.5721C38.5256 36.6188 39.8185 36.0833 41.1667 36.0833H56.4167C57.7649 36.0833 59.0579 36.6188 60.0112 37.5721C60.9645 38.5254 61.5 39.8184 61.5 41.1666V56.4166C61.5 57.7648 60.9645 59.0577 60.0112 60.011C59.0579 60.9644 57.7649 61.4999 56.4167 61.4999ZM41.1667 41.1666V56.4166H56.4167V41.1666H41.1667Z"
                                    fill="#57A773"
                                />
                            </svg>
                        </Content>

                        <Content title="Events" description="Join the exciting exclamation event hosted by me" comingSoon>
                            <svg className="h-full max-h-16 w-auto" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.08508 7.08838H14.2617" stroke="#57A773" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10.6735 3.5V10.6766" stroke="#57A773" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M33.9975 3.5L32.2034 10.6766" stroke="#57A773" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M57.3215 7.08838H64.4982" stroke="#57A773" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M60.9098 3.5V10.6766" stroke="#57A773" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M46.5566 21.4417L42.9683 25.03" stroke="#57A773" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M57.3215 35.7949L64.4982 34.0007" stroke="#57A773" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M57.3215 57.3247H64.4982" stroke="#57A773" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M60.9098 53.7363V60.913" stroke="#57A773" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                                <path
                                    d="M42.9684 48.4184L19.5797 25.0298L3.82701 59.4058C3.52225 60.0733 3.42875 60.8179 3.55903 61.5399C3.68932 62.262 4.03717 62.9269 4.55598 63.4457C5.07479 63.9646 5.73976 64.3124 6.46181 64.4427C7.18385 64.573 7.92847 64.4795 8.59588 64.1747L42.9684 48.422V48.4184Z"
                                    stroke="#57A773"
                                    strokeWidth="7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </Content>
                    </div>
                </div>

                <Seaweed1 />
                <Seaweed2 />

                <div className="absolute -bottom-2 left-0 w-full">
                    <svg className="w-full h-full" height="105" viewBox="0 0 1919 105" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 7.71711L160 5.01481C320 2.31251 640 -3.0921 960 2.31251C1280 7.71711 1600 23.9309 1760 32.0378L1920 40.1447V105H1760C1600 105 1280 105 960 105C640 105 320 105 160 105H0V7.71711Z"
                            fill="#D1FAFF"
                        />
                    </svg>
                </div>
            </section>

            <section id="projects" className="relative w-full bg-gradient-to-b from-theme-blue-light to-theme-blue-medium py-10">
                <div className="relative container w-full h-full">
                    <section className="flex flex-row justify-between items-end">
                        <div className="text-theme-blue-dark max-w-sm">
                            <h1 className="font-baloo text-7xl" data-aos="zoom-in">
                                My Works
                            </h1>
                            <h3 className="font-somatic text-2xl leading-8 pt-2" data-aos="zoom-in" data-aos-delay="200">
                                Collection of all my projects and case studies.
                            </h3>

                            <Link href="https://www.behance.net/raflymln" passHref={true}>
                                <button className="btn bg-theme-blue-very-dark text-white mt-8" data-aos="zoom-in" data-aos-delay="400">
                                    <span className="bg-theme-blue-dark">Interesting, I Want to See More!</span>
                                </button>
                            </Link>
                        </div>
                    </section>

                    <section className="relative z-50">
                        <Projects />
                    </section>
                </div>

                <div className="absolute left-0 -bottom-1">
                    <svg className="w-full h-full" height="404" viewBox="0 0 1919 404" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#aaavvv)">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 212.416L80.0417 219.913C160.083 228.243 320.167 244.069 480.25 219.913C640.334 195.757 800.417 132.451 960.5 155.774C1119.58 179.931 1279.67 292.382 1439.75 284.052C1599.83 275.722 1759.92 148.278 1839.96 84.1388L1920 20V404H1839.96C1759.92 404 1599.83 404 1439.75 404C1279.67 404 1119.58 404 960.5 404C800.417 404 640.334 404 480.25 404C320.167 404 160.083 404 80.0417 404H0V212.416Z"
                                fill="url(#linear1234)"
                            />
                        </g>
                        <defs>
                            <filter id="aaavvv" x="0" y="0" width="1920" height="404" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="-20" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0.607843 0 0 0 0 0.819608 0 0 0 0 0.898039 0 0 0 0.5 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                            </filter>
                            <linearGradient id="linear1234" x1="960" y1="-503.939" x2="960" y2="404" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#9BD1E5" stopOpacity="0" />
                                <stop offset="1" stopColor="#9BD1E5" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </section>

            <section id="contact" className="relative w-full bg-gradient-to-b from-theme-blue-medium to-theme-blue-dark">
                <Footer />
            </section>
        </>
    );
}
