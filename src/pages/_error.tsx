import ErrorPage from "@/components/ErrorPage";

const ErrorServer = ({ statusCode }: { statusCode: number }) => {
    const message = statusCode ? `An error ${statusCode} occurred on server` : "An error occurred on client";
    return <ErrorPage statusCode={statusCode} message={message} />;
};

ErrorServer.getInitialProps = ({ res, err }: any) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default ErrorServer;
