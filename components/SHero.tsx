import Link from 'next/link';
import classNames from 'classnames';

const SHero = () => {
    return (
        <section 
            id="home" 
            className={classNames(
                "bg-lime-100",
                // "pt-4",
                "md:pt-20 md:bg-transparent",
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
                        "md:bg-lime-100 md:px-6 md:py-28 text-[#262626] md:place-items-center",
                    )}
                >
                    {/* Hi */}
                    {/* <p className="text-[#666666]">hi there! 👋</p> */}
                    <p className="">hi there! 👋</p>
                    
                    {/* Welcome */}
                    <h1 
                        className="text-5xl md:text-center md:text-6xl font-extrabold font-quiche max-w-screen-sm"
                    >Welcome to my <span className="text-red-600">Personal <span className="">Portfolio</span></span>
                    </h1>
                    
                    
                    {/* Quote Explore */}
                    <div className="my-14">
                        <p 
                            className="text-2xl md:text-center"
                            // contentEditable="true"
                        >Exploring the digital world on multi-platform mainly in design
                        </p>
                    </div>
                    
                    {/* Learn more */}
                    <div>
                        <Link 
                            className={classNames(
                                "px-10 py-3 rounded-full cursor-pointer inline-flex",
                                "border border-black/10",
                                "shadow-transparent transition duration-300 ease-linear",
                                "hover:shadow-lg"
                            )}
                            href="#about" 
                            scroll={false}
                        >Learn More
                        </Link>
                    </div>

                </div>{/* END Hero Card */}
            </div>{/* END Container */}
        </section>
    )
}
export default SHero;