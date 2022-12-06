import classNames from 'classnames';
import Image from 'next/image';

const SAbout = () => {

    const interest = [
        {
            id: 1,
            title: 'Design',
            pt: 'Improving my web design skill',
            icon: 'https://res.cloudinary.com/dltslq5fh/image/upload/v1670215678/icons/npqxde3b98uxeeg99lla.png'
        },
        {
            id: 2,
            title: 'Code',
            pt: 'Learning web app programming',
            icon: 'https://res.cloudinary.com/dltslq5fh/image/upload/v1670215678/icons/gbzlxwspmj9tif5cu6l3.png'
        },
        {
            id: 3,
            title: 'QA',
            pt: `Checking systems' user experience`,
            icon: 'https://res.cloudinary.com/dltslq5fh/image/upload/v1670215733/icons/faemsczzlhaszb3jt2ov.png'
        },
    ]

    return (
        <section 
            id="about" 
            className={classNames(
                "max-w-screen-2xl mx-6 2xl:mx-auto",
                "pt-10 pb-20 scroll-m-0",
                "md:pt-40 md:pb-28 md:scroll-m-10",
                "grid",
                "grid-cols-1 gap-y-7",
                "md:grid-cols-2",
                ""
            )}
        >
            {/* START COL about-title-img */}
            <div
                className={classNames(
                    "",
                    "md:order-2",
                    "flex flex-col",
                    "md:items-center"
                )}
            >
                <p>about me! 🙋‍♂️</p>
                <h1
                    className={classNames(
                        "font-quiche font-bold",
                        "text-4xl",
                        "lg:text-5xl md:text-center md:max-w-[70%]"
                    )}
                >Things that I am passionate the most</h1>

                <Image 
                    width="200"
                    height="200"
                    alt="Portfolio profile image"
                    src="https://res.cloudinary.com/dltslq5fh/image/upload/v1670242910/3d/wmeah9i3habrdvpfpjfm.svg"
                    className="mt-12 drop-shadow-lg self-center md:self-auto w-52 h-52"
                    priority
                />

                <h2
                    className={classNames(
                        "mt-2 text-2xl font-semibold self-center md:self-auto w-auto h-auto"
                    )}
                >Zulhatta Ghazali</h2>

                <ul
                    className={classNames(
                        "flex gap-x-2 self-center md:self-auto"
                    )}
                >
                    {['Web Design', 'Frontend', 'QA'].map((i,index) =>
                        <li
                            key={index}
                            className={classNames(
                                "text-sm text-clr-text-primary/70"
                            )}
                        >{i}</li>
                    )}
                </ul>
            </div>{/* END COL about-title-img */}
            
            {/* START COL list-of-passion */}
            <div
                className={classNames(
                    "md:self-center",
                )}
            >
                <ul
                    className={classNames(
                        // "grid grid-cols-2 gap-7",
                        "flex flex-col gap-y-2",
                        "lg:flex-row md:flex-wrap md:justify-center md:gap-2"
                    )}
                >
                    {   interest.map(i =>
                            <li
                                key={i.id}
                                className={classNames(
                                    "rounded-md border border-clr-text-primary/10",
                                    "shadow-none hover:shadow transition duration-300 ease-linear",
                                    "px-3 py-5"
                                )}
                            >
                                
                                <Image 
                                    alt="Web development skill icon"
                                    src={i.icon}
                                    width="34"
                                    height="34"
                                    className="drop-shadow-xl"
                                    priority
                                />
                                
                                <h1
                                   className={classNames(
                                    "mt-6 font-medium"
                                )} 
                                >{i.title}</h1>

                                <p
                                    className={classNames(
                                        "mt-2 text-clr-text-primary/70"
                                    )}
                                >{i.pt}</p>

                            </li>
                        )
                    }
                </ul>
            </div>{/* END COL list-of-passion */}
            
        </section>
    )
}
export default SAbout;