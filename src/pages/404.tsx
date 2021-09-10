import ErrorPage from "@/components/ErrorPage";

export default function Error404Page() {
    return <ErrorPage statusCode={404} message={"It seems that you've been lost."} />;
}
