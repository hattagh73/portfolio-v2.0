import classNames from 'classnames';
import Image from 'next/image';

const SAbout = () => {
    return (
        <section 
            id="about" 
            className={classNames(
                "",
                "md:pt-44 md:pb-36 md:scroll-m-10"
            )}
        >
            {/* START Container */}
            <div 
                className={classNames(
                    "max-w-screen-2xl mx-6 2xl:mx-auto", //! container
                    "grid md:grid-cols-2" //! declare grid
                )}
            >
                {/* START col-1 */}
                <div
                    className={classNames(
                        "md:self-center"
                    )}
                >
                    <p
                    >about me! 🙋‍♂️</p>
                    <h1
                        className={classNames(
                            "text-5xl font-medium"
                        )}
                    ><span className="">My name is </span>Zul
                        <span className="">hatta</span> Ghazali
                    </h1>
                </div>{/* END col-1 */}

                {/* START col-2 */}
                <div className="md:place-self-center">
                    <div className="relative w-52 h-52 rounded-full overflow-hidden shadow-2xl">
                        <Image 
                            alt="Profile image"
                            src="https://res.cloudinary.com/dltslq5fh/image/upload/v1666367734/3d/oyngf2luqjpwefskoiw9.jpg"
                            // width="300"
                            // height="300"
                            fill
                            // className="object-cover object-center"
                        />
                    </div>    
                </div>{/* END col-2 */}
                <div></div>
            </div>{/* END Container */}
            
        </section>
    )
}
export default SAbout;