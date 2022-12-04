//* NextJS Features
import type { AppProps } from 'next/app';

//* Layout Component
import Layout from '../components/Layout';

//* Global Styling
import '../styles/globals.css';

//* Font Online & Local
import { Inter } from '@next/font/google';
import localFont from '@next/font/local';

//* Font Inter
const inter = Inter({
    subsets: ['latin'],
});

//* Font Local Quiche
const quiche = localFont({ 
    src: [
        {
            path: '../public/fonts/Quichesans-Bold.otf',
            weight: '700'
        },
        {
            path: '../public/fonts/Quichesans-Extrabold.otf',
            weight: '800'
        }
    ],
    variable: '--font-quiche',
    display: 'swap',
    preload: false
});

//* Font Local ClashDisplay
const clashDisplay = localFont({
    src:[
        {
            path: '../public/fonts/ClashDisplay-Medium.otf',
            weight: '500',
            style: 'normal'
        },
        {
            path: '../public/fonts/ClashDisplay-Semibold.otf',
            weight: '600',
            style: 'normal'
        },
        {
            path: '../public/fonts/ClashDisplay-Bold.otf',
            weight: '700',
            style: 'normal'
        },
    ],
    variable: '--font-clashDisplay',
    display: 'swap',
    preload: false
})

//* Font Local Satoshi
const satoshi = localFont({
    src:[
        {
            path: '../public/fonts/Satoshi-Light.otf',
            weight: '300',
            style: 'normal'
        },
        {
            path: '../public/fonts/Satoshi-Regular.otf',
            weight: '400',
            style: 'normal'
        },
        {
            path: '../public/fonts/Satoshi-Medium.otf',
            weight: '500',
            style: 'normal'
        }
    ],
    variable: '--font-satoshi',
    display: 'swap',
    preload: false
})

const App = ({ Component, pageProps}: AppProps) => {
    // console.log('the fonts', quiche)
    return (
        <>

            {/* Declare Fonts To Used */}
            <style jsx global>{`
                :root {
                    --quiche-font: ${quiche.style.fontFamily};
                    --inter-font: ${inter.style.fontFamily};
                    --clashDisplay-font: ${clashDisplay.style.fontFamily};
                    --satoshi-font: ${satoshi.style.fontFamily};
                }
                html {
                    scroll-behavior: smooth;
                    // font-family: ${inter.style.fontFamily};
                    font-family: ${satoshi.style.fontFamily};
                }
            `}</style>
            
            <Layout>
                <Component {...pageProps} />
            </Layout>

        </>
    )
}
export default App;