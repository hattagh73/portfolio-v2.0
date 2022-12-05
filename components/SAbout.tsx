import classNames from 'classnames';
import Image from 'next/image';

const SAbout = () => {

    const interest = [
        {
            id: 1,
            pt: 'Improving my web design skill',
            icon: 'https://res.cloudinary.com/dltslq5fh/image/upload/v1670215678/icons/npqxde3b98uxeeg99lla.png'
        },
        {
            id: 2,
            pt: 'Learning web app programming',
            icon: 'https://res.cloudinary.com/dltslq5fh/image/upload/v1670215678/icons/gbzlxwspmj9tif5cu6l3.png'
        },
        {
            id: 3,
            pt: `Checking systems' user experience`,
            icon: 'https://res.cloudinary.com/dltslq5fh/image/upload/v1670215733/icons/faemsczzlhaszb3jt2ov.png'
        },
    ]

    return (
        <section 
            id="about" 
            className={classNames(
                "max-w-screen-2xl mx-6 2xl:mx-auto",
                "pt-16 pb-16 scroll-m-10",
                "grid",
                "grid-cols-1 gap-y-7",
                "md:grid-cols-3 md:grid-rows-3",
            )}
        >
            {/* about-title */}
            <div
                className={classNames(
                    "",
                    "md:col-start-2",
                    "flex flex-col md:items-center md:justify-self-center md:text-center"
                )}
            >
                <p>about me! 🙋‍♂️</p>
                <h1
                    className={classNames(
                        "text-4xl lg:text-5xl font-medium font-quiche max-w-[95%]"
                    )}
                >Things that Im passionate the most</h1>
            </div>
            
            {/* START my-img */}
            <div className={classNames(
                "",
                "md:col-start-2 md:row-start-2 flex flex-col md:items-center md:justify-self-center"
            )}>
                <Image 
                    width="200"
                    height="200"
                    alt="Portfolio profile image"
                    src="/imgs/dp-blob.svg"
                    className=""
                />
                <h2
                    className={classNames(
                        "mt-2 text-2xl font-medium"
                    )}
                >Zulhatta Ghazali</h2>
                <ul
                    className={classNames(
                        "flex gap-x-3"
                    )}
                >
                    {['Web Design', 'Frontend', 'QA'].map((i,index) =>
                        <li
                            key={index}
                            className={classNames(
                                "text-sm text-clr-text-primary/60"
                            )}
                        >{i}</li>
                    )}
                    
                    
                </ul>
            </div>{/* END my-img */}
            
            {/* START list of passion */}
            {   interest.map((i,index) =>
                <div
                    key={i.id}
                    className={classNames(
                        {"md:self-center md:justify-self-start" : i.id === 1 },
                        {"md:self-center md:justify-self-end" : i.id === 2 },
                        {"md:justify-self-center md:place-self-end" : i.id === 3 },
                        {"md:row-start-2 md:col-start-1" : i.id === 1},
                        {"md:row-start-2 md:col-start-3" : i.id === 2},
                        {"md:row-start-3 md:col-start-2" : i.id === 3},
                    )}
                >
                    <div
                        className={classNames(
                            "bg-clr-bg-primary py-3 px-5 rounded-md",
                            "border border-clr-text-primary/10",
                            "drop-shadow-none hover:drop-shadow transition duration-300 ease-linear", 
                            ""
                        )}
                    >
                        <Image 
                            alt="Icon passionate"
                            src={i.icon}
                            width="24"
                            height="24"
                            className=""
                        />
                        <p
                            className={classNames(
                                "mt-6 text-lg"
                            )}
                        >
                            {i.pt}
                        </p>
                    </div>
                </div>
            )} {/* END list of passionate */}
        
        </section>
    )
}
export default SAbout;