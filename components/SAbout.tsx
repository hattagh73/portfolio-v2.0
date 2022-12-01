import classNames from 'classnames';

const SAbout = () => {
    return (
        <section id="about" className="h-screen pt-16 scroll-m-10">
            
            <div 
                className={classNames(
                    "max-w-screen-2xl mx-6 2xl:mx-auto", //! Container
                    ""
                )}
            >
                <p>This is a About Section</p>
            </div>
            
        </section>
    )
}
export default SAbout;