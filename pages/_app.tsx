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
    weight: ['400', '500', '600'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
});

const quiche = localFont({ 
    src: [
        {
            path: '../public/fonts/Fontspring-DEMO-quichesans-bold.otf',
            weight: '700'
        }
    ],
    variable: '--font-quiche'
});

const App = ({ Component, pageProps}: AppProps) => {
    console.log('the fonts', quiche)
    return (
        <>
            <style jsx global>{`
                :root {
                    --quiche-font: ${quiche.style.fontFamily};
                }
            `}</style>
            <main className={`${poppins.className} relative z-[1]`}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </main>
        </>
    )
}
export default App;