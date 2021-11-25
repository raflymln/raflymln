import ErrorPage from "@/components/ErrorPage";

export default function Error404Page() {
    return <ErrorPage statusCode={500} message={"Server-side error occurred."} />;
}
