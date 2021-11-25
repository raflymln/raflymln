import Link from "next/link";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ReadingList = () => {
    const data = [
        {
            title: "Pengenalan Secara Umum",
            description: "Apa itu investasi? Ada beberapa jenis investasi? Bagaimana cara mendapatkan keuntungannya?",
            readings: [
                { title: "Apa Itu Investasi", link: "#" },
                { title: "Jenis - Jenis Investasi", link: "#" },
                { title: "Apa Investasi Itu Haram?", link: "#" },
            ],
        },
        {
            title: "Cara Memulai Investasi",
            description: "Saya ingin mendapatkan penghasilan pasif perbulannya, bagaimana cara saya melakukannya?",
            readings: [
                { title: "Apa Itu Investasi", link: "#" },
                { title: "Jenis - Jenis Investasi", link: "#" },
                { title: "Apa Investasi Itu Haram?", link: "#" },
            ],
        },
    ];

    const Title = ({ ...props }: any) => {
        return (
            <section className="w-full bg-[#252C36] flex flex-col md:flex-row justify-center items-start flex-1 rounded-3.5 rounded-tl-md space-y-4 md:space-y-0 md:space-x-8 py-7 px-9">
                <p className="w-12 h-12 rounded-full bg-white text-black flex justify-center items-center font-somatic text-2xl">{props.number}</p>
                <section className="w-full flex-1 flex flex-col md:flex-row justify-between items-start">
                    <div className="flex flex-col justify-start items-start space-y-4">
                        <h1 className="font-somatic text-4xl text-left md:text-center">{props.title}</h1>
                        <p className="font-comfortaa text-base text-left max-w-xl tracking-wide leading-7">{props.description}</p>
                    </div>
                    <Link href={props.href || "#0"} passHref>
                        <button className="py-2 px-5 bg-white font-somatic text-sm text-black rounded-3.5 duration-200 hover:opacity-70 cursor-pointer mt-4 md:mt-0">See More</button>
                    </Link>
                </section>
            </section>
        );
    };

    const List = ({ ...props }: any) => {
        return (
            <div className="p-2 flex flex-row w-full justify-start items-center space-x-7">
                <p className="w-12 h-12 rounded-full text-white flex justify-center items-center font-somatic text-2xl">{props.number}</p>
                <Link href={props.href || "#0"} passHref>
                    <button className="flex flex-row justify-between items-center flex-1 w-full bg-[#252C36] px-7 py-3 rounded-xl cursor-pointer hover:opacity-70 duration-200">
                        <h3 className="font-somatic text-lg md:text-xl text-white tracking-wide">{props.title}</h3>
                        <svg className="w-4 h-auto" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.586 12.793L7 14.207L13.707 7.49997L7 0.792969L5.586 2.20697L9.879 6.49997H0.292999V8.49997H9.879L5.586 12.793Z" fill="white" />
                        </svg>
                    </button>
                </Link>
            </div>
        );
    };

    return (
        <article className="flex flex-col justify-center items-center w-full space-y-4">
            {data.map((x, dataId) => {
                const titleNumbering = dataId < 10 ? `0${dataId + 1}` : dataId + 1;

                return (
                    <div key={dataId} className="pt-4">
                        <Title number={titleNumbering} title={x.title} description={x.description} href={`#readings-${dataId}`} />

                        <section id={`readings-${dataId}`} className="w-full flex flex-col justify-center items-center pt-4">
                            {x.readings.map((y, subDataId) => {
                                return <List key={subDataId} number={String.fromCharCode(subDataId + 64 + 1)} title={y.title} />;
                            })}
                        </section>
                    </div>
                );
            })}
        </article>
    );
};

export default function InvestmestPage() {
    return (
        <>
            <section id="intro" className="relative w-full text-center bg-cover" style={{ backgroundImage: "url(/images/bg-ttm.jpg)" }}>
                <section className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-40" />
                <Navigation />

                <section className="pt-24 relative container flex justify-center items-center flex-col space-y-8">
                    <h1 className="text-white text-6xl font-baloo">To The Moon!</h1>
                    <p className="text-white font-comfortaa text-lg max-w-xl">Learn and invest your money for your future and start earning passive income every month.</p>
                    <Link href="#learn" passHref={true}>
                        <button className="btn bg-theme-green-dark text-white mt-8">
                            <span className="bg-theme-green-light">"I'm Interested!"</span>
                        </button>
                    </Link>

                    <img src="/images/doge-astronaut.png" alt="DOGE" className="max-w-sm" />
                </section>

                <svg className="w-full absolute left-0 bottom-0 text-[#323C49] fill-current" viewBox="0 0 1920 147" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 118.4L80 123.333C160 128.267 320 138.133 480 123.333C640 108.533 800 69.0667 960 64.1333C1120 59.2 1280 88.8 1440 83.8667C1600 78.9333 1760 39.4667 1840 19.7333L1920 0V148H1840C1760 148 1600 148 1440 148C1280 148 1120 148 960 148C800 148 640 148 480 148C320 148 160 148 80 148H0V118.4Z"
                    />
                </svg>
            </section>

            <section id="learn" className="relative w-full bg-gradient-to-b from-[#323C49] to-black">
                <div className="container text-white flex flex-col justify-center items-center pt-12 text-center space-y-8 z-20">
                    <h1 className="font-baloo text-6xl">Ini Tuh Apa?</h1>
                    <p className="font-comfortaa max-w-4xl tracking-wide leading-8">
                        Ini adalah kumpulan tulisan milik saya mengenai pengalaman investasi dan trading saya selama ini. Di sini juga saya menjelaskan bagaimana cara saya memulai investasi sendiri.
                        <br />
                        <br />
                        Jika anda berminat untuk ber-investasi tetapi belum tau apapun tentang dunia investasi, mungkin tulisan - tulisan saya disini dapat membantu anda memulai ber-investasi. Tenang
                        saja, disini saya juga akan membahas banyak jenis investasi seperti saham, forex, dan juga kripto.
                    </p>
                </div>

                <div className="container text-white flex flex-col justify-center items-center pt-12 text-center space-y-8 z-20">
                    <h1 className="font-baloo text-6xl">Daftar Isi</h1>
                    <div className="flex flex-col justify-center items-center space-y-16 w-full max-w-5xl">
                        <ReadingList />
                    </div>
                </div>

                <div className=" left-0 -bottom-1 z-10">
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
