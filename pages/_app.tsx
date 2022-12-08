//* NextJS Features
import Head from 'next/head';
import type { AppProps } from 'next/app';

//* Layout Component
import Layout from '../components/Layout';

//* Global Styling
import '../styles/globals.css';

const App = ({ Component, pageProps}: AppProps) => {
    
    return (
        <>
            {/* Global Head */}
            <Head>
                <title>hattaltd.</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/fav-icon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/fav-icon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/fav-icon/favicon-16x16.png" />
                <link rel="manifest" href="/fav-icon/site.webmanifest"></link>
            </Head>

            {/* Header - Page - Footer */}
            <Layout>
                <Component {...pageProps} />
            </Layout>

        </>
    )
}
export default App;