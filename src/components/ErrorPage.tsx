import Link from "next/link";
import Footer from "@/components/Footer";

export default function ErrorPage({ ...props }: any) {
    return (
        <div className="min-w-full min-h-full bg-gradient-to-b from-theme-blue-light to-theme-blue-medium relative flex flex-col items-center justify-start text-black">
            <section className="relative container w-full h-auto flex flex-col items-start justify-start py-10 z-30" data-aos="fade-right">
                <h1 className="font-baloo text-8xl md:text-9xl mt-32">{props.statusCode}</h1>
                <h3 className="font-somatic text-2xl md:text-5xl">{props.message}</h3>
                <Link href="/" passHref={true}>
                    <button className="btn bg-theme-green-dark text-white mt-10">
                        <span className="bg-theme-green-light">Back to home</span>
                    </button>
                </Link>
            </section>

            <section className="w-full">
                <Footer />
            </section>
        </div>
    );
}
