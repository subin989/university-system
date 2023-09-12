import {Head, Html, Main, NextScript} from 'next/document'

// ----------------------------------------------------------------------

const Document = () => {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" type="image/x-icon" href="/favicon.png" />
                <title>Commence Your Study</title>
            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    );
}

export default Document;

