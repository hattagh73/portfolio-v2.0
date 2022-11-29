//* Import React TS
import { ReactNode } from 'react';

//* Import Components
import { Header, Footer } from './components';

//* TS Declaring
type ChildrenProps = {
    children?: ReactNode
};

const Layout = ({ children }:ChildrenProps) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
export default Layout;