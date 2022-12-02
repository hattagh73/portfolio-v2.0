import { useRouter } from 'next/router';
import Link from 'next/link';

import { useState, useEffect } from 'react';

import { FiFigma, FiGitHub } from './components';

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

    const router = useRouter();

    const soc_links = [
        {
            icon: <FiFigma />,
            to: 'https://www.figma.com/@hattalimited'
        },
        {
            icon: <FiGitHub />,
            to: 'https://github.com/hattagh73'
        }
    ]

    return (
        <header 
            className={classNames(
                "cursor-default fixed w-full bottom-0 z-10",
                "md:bottom-auto md:top-0 md:bg-[white]",
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
                    <p><Link href={`/`}>Logo</Link></p>

                    {/* If use useRouter */}
                    {/* <p
                        onClick={() => {
                            router.push({
                                pathname: "/",
                            })
                        }}
                    >Home
                    </p> */}
                </div>
                

                {/* Col 2 - Links */}
                <ul 
                    className={classNames(
                        "w-full flex place-content-around border border-black/5 bg-white shadow-lg rounded-full px-4 py-2", 
                        "md:w-fit md:place-content-stretch md:self-center md:gap-x-10 md:border-none md:shadow-none md:bg-transparent md:py-0"
                    )}
                >
                    {   ['Home', 'About', 'Skill', 'Project'].map((i, index) => 
                            <li
                                key={index}
                                className={classNames(
                                    "text-sm font-medium lowercase",
                                    "md:text-base md:font-normal",
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
                <ul className="hidden md:flex md:items-center md:gap-x-3">
                    {/* <p className="lowercase border py-[0.18rem] px-3 rounded">Learn more</p> */}
                    { soc_links.map((i,index) =>
                        <li 
                            key={index}
                            className={classNames(
                                "bg-lime-100 p-2 rounded-full",
                                "shadow-transparent transition duration-300 ease-linear",
                                "hover:shadow-lg"
                            )}
                        >
                            <a href={i.to} target="_blank">{i.icon}</a>
                        </li>
                    )}
                </ul>

            </nav>
        </header>
    )
}
export default Header;