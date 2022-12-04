import Link from 'next/link';
import classNames from 'classnames';

const SHero = () => {
    return (
        <section 
            id="home" 
            className={classNames(
                "bg-lime-200",
                // "pt-4",
                "md:pt-20 md:bg-transparent md:pb-32",
            )}
        >
            
            {/* START Container */}
            <div
                className={classNames(
                    "max-w-screen-2xl mx-6 2xl:mx-auto" //! Container
                )}
            >
                {/* START Hero Card */}
                <div
                    className={classNames(
                        "rounded-lg flex flex-col",
                        "py-6", //! Mobile
                        "md:bg-clr-bg-secondary md:px-6 md:py-28 md:place-items-center",
                    )}
                >
                    {/* START Hi */}
                    <p className="">hi there! 👋</p>
                    
                    {/* Welcome */}
                    <h1 
                        className="text-5xl md:text-center md:text-6xl font-extrabold font-quiche max-w-screen-sm line"
                    >Welcome to my <span className="text-rose-700">Personal Portfolio</span>
                    </h1>
                    
                    {/* START Quote */}
                    <div className="my-14">
                        <p 
                            className="text-2xl md:text-center"
                        >“Exploring the digital world on multi-platform mainly in design”
                        </p>
                    </div>
                    
                    {/* START Learn More */}
                    <div 
                        className={classNames(
                            "relative self-baseline md:self-center",
                            // doodle-left
                            "before:hidden md:before:block before:absolute before:z-10 before:content-[''] before:w-1/6 before:-left-14 before:top-0 before:h-full",
                            "before:bg-[url('../public/imgs/3-lines-left.svg')] before:bg-no-repeat before:bg-contain before:bg-center",
                            // doodle-right
                            "after:hidden md:after:block after:absolute before:z-10 before:content-[''] after:w-1/6 after:-right-14 after:top-0 after:h-full",
                            "after:bg-[url('../public/imgs/3-lines-right.svg')] after:bg-no-repeat after:bg-contain after:bg-center"
                        )}
                    >
                        {/* btn-learn-more */}
                        <Link href="#about" scroll={false}>
                            <button 
                                className={classNames(
                                    "border-2 border-clr-text-primary px-10 py-3 rounded-full cursor-pointer font-medium",
                                    "shadow-none transition duration-300 ease-linear",
                                    "hover:shadow-xl",
                                )}
                            >Learn More 
                            </button>
                        </Link>
                    </div>

                </div>{/* END Hero Card */}
            </div>{/* END Container */}
        </section>
    )
}
export default SHero;