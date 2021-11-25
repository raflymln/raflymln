type Tags = {
    title: string;
    description: string;
    url: string;
    image: string;
    themeColor: string;
    keywords: string;
    author: string;
    charSet: string;
    language: string;
    icons: {
        src: string;
        sizes: string;
        type: string;
    }[];
};

export default function MetaTags({ metaData }: { metaData: Tags }) {
    return (
        <>
            {/* Primary Meta Tags */}
            <link rel="canonical" href={metaData.url} />

            {metaData.icons.map((icon) => (
                <link key={icon.src} rel="icon" type={icon.type} sizes={icon.sizes} href={icon.src} />
            ))}

            <meta name="viewport" content="initial-scale=1" />
            <meta name="robots" content="index, nofollow" />

            <meta charSet={metaData.charSet} />
            <meta httpEquiv="Content-Type" content={`text/html; charset=${metaData.charSet}`} />
            <meta name="theme-color" content={metaData.themeColor} />
            <meta name="msapplication-TileColor" content={metaData.themeColor} />

            <meta name="title" content={metaData.title} />
            <meta name="description" content={metaData.description} />
            <meta name="keywords" content={metaData.keywords} />
            <meta name="language" content={metaData.language} />
            <meta name="author" content={metaData.author} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={metaData.url} />
            <meta property="og:title" content={metaData.title} />
            <meta property="og:description" content={metaData.description} />
            <meta property="og:image" content={metaData.image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={metaData.url} />
            <meta property="twitter:title" content={metaData.title} />
            <meta property="twitter:description" content={metaData.description} />
            <meta property="twitter:image" content={metaData.image} />
        </>
    );
}
