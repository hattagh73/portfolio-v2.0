import Link from 'next/link';

import { useState, useEffect } from 'react';

import { Logo, SocialListIcon } from './components';

import classNames from 'classnames';

const Header = () => {

    const [header, setHeader] = useState<boolean>(false);

    const headerScrollEvent = () => {
        window.scrollY > 5 ? setHeader(true) : setHeader(false)
        return
    }

    useEffect(() => {
        window.addEventListener('scroll', headerScrollEvent);

        return () => window.removeEventListener('scroll', headerScrollEvent);
    }, [])

    return (
        <header 
            className={classNames(
                "cursor-default fixed w-full bottom-0 z-10",
                "md:bottom-auto md:top-0 md:bg-clr-bg-primary",
                {"shadow border-none": header},
                // {"md:bg-lime-50": !header},
            )}
        >
            <nav 
                className={classNames(
                    "max-w-screen-2xl mx-6 2xl:mx-auto flex flex-row justify-center pb-4",
                    "2xl:mx-auto md:place-content-between md:py-4 md:px-0"
                )}
            >
                {/* Col 1 - Logo */}
                <div className="hidden md:flex md:items-center">
                    <Logo />
                </div>
                
                {/* Col 2 - Links */}
                <ul 
                    className={classNames(
                        "w-full flex place-content-around border border-clr-text-primary/20 bg-clr-bg-primary shadow-xl rounded-full px-4 py-2", 
                        "md:w-fit md:place-content-stretch md:self-center md:gap-x-5 md:border-none md:shadow-none md:bg-transparent md:py-0"
                    )}
                >
                    {   ['Home', 'About', 'Skill', 'Project'].map((i, index) => 
                            <li
                                key={index}
                                className={classNames(
                                    "text-sm font-medium lowercase transition duration-200 ease-linear",
                                    "md:text-base md:font-normal",
                                    "md:hover:bg-clr-bg-secondary md:rounded-md md:px-[0.40rem] md:py-[0.10rem]",
                                    {"md:hidden":i === "Home"},
                                )}
                            >
                                { i === "Home" ? 
                                    (
                                        <Link 
                                            href="/"
                                        >{i}
                                        </Link>
                                    ) : (
                                        <Link 
                                            href={`#${i.toLowerCase()}`} 
                                            scroll={false}
                                        >{i}
                                        </Link>
                                    )
                                }
                            </li>
                        )
                    }
                </ul>
                
                {/* Col 3 - Social */}
                <SocialListIcon 
                    ul_className="hidden md:flex md:items-center md:gap-x-1"
                    li_className="border border-clr-text-primary/10 p-1 rounded hover:bg-clr-bg-secondary"
                />

            </nav>
        </header>
    )
}
export default Header;