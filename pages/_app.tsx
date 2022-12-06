//* NextJS Features
import type { AppProps } from 'next/app';

//* Layout Component
import Layout from '../components/Layout';

//* Global Styling
import '../styles/globals.css';

const App = ({ Component, pageProps}: AppProps) => {
    
    return (
        <>

            <Layout>
                <Component {...pageProps} />
            </Layout>

        </>
    )
}
export default App;