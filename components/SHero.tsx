import Link from 'next/link';
import classNames from 'classnames';

const SHero = () => {
    return (
        <section 
            id="home" 
            className={classNames(
                "bg-clr-bg-secondary",
                // "pt-4",
                "md:pt-28 md:bg-transparent md:pb-20",
                "border border-blue-900"
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
                        "py-16", //! Mobile
                        "md:px-6 md:py-28 md:place-items-center",
                        "md:bg-gradient-to-r from-clr-bg-secondary to-clr-bg-secondary/90"
                    )}
                >
                    {/* Hi */}
                    <p className="">hi there! 👋</p>
                    
                    {/* Welcome */}
                    <h1 
                        className={classNames(
                            "font-extrabold font-quiche text-4xl max-w-[70%]",
                            "sm:text-6xl",
                            "md:text-center md:max-w-[80%]",
                            "lg:max-w-[70%]",
                            "xl:max-w-[50%]",
                            "2xl:max-w-[40%]"
                        )}
                    >Welcome to my <span className="">personal portfolio</span>
                    </h1>
                    
                    {/* Quote */}
                    
                    <p 
                        className="my-10 lg:my-14 text-xl md:text-xl md:text-center"
                    >Exploring the digital world on multi-platform mainly in design
                    </p>
                    
                    
                    {/* Learn More */}
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