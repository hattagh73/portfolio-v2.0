import classNames from 'classnames';

const Footer = () => {
    return (
        <footer className="pb-16 md:pb-0">
            
            <div 
                className={classNames(
                    "max-w-screen-2xl mx-6 2xl:mx-auto",
                    "border"
                )}
            >
                <p>This is a footer</p>
            </div>
            
        </footer>
    )
}
export default Footer;