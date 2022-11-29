//* NextJS Features
import type { AppProps } from 'next/app';

//* Layout Component
import Layout from '../components/Layout';

//* Global Styling
import '../styles/globals.css';

//* Font Online & Local
import { Poppins } from '@next/font/google';
import localFont from '@next/font/local';

const poppins = Poppins({
    weight: ['300', '400', '500', '600'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
});

const quiche = localFont({ 
    src: [
        {
            path: '../public/fonts/Fontspring-DEMO-quichesans-bold.otf',
            weight: '700'
        },
        {
            path: '../public/fonts/Fontspring-DEMO-quichesans-extrabold.otf',
            weight: '800'
        }
    ],
    variable: '--font-quiche'
});

const grandis = localFont({ 
    src: [
        {
            path: '../public/fonts/GrandisExtended-Bold.woff2',
            weight: '700'
        },
    ],
    variable: '--font-grandis'
});

const App = ({ Component, pageProps}: AppProps) => {
    // console.log('the fonts', quiche)
    return (
        <>
            <style jsx global>{`
                :root {
                    --quiche-font: ${quiche.style.fontFamily};
                    --poppins-font: ${poppins.style.fontFamily};
                    --grandis-font: ${grandis.style.fontFamily};
                }
            `}</style>
            <main className={`font-primary relative z-[1]`}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </main>
        </>
    )
}
export default App;