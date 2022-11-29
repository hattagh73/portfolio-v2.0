import { useState, useEffect } from 'react';

import classNames from 'classnames';

const Header = () => {

    const [header, setHeader] = useState<boolean>(false);

    const headerScrollEvent = () => {
        window.scrollY > 20 ? setHeader(true) : setHeader(false)
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
                    "md:bottom-auto md:top-0",
                    {"md:bg-white shadow-md": header}
                )}
            >
                <nav 
                    className={classNames(
                        "max-w-screen-2xl px-6 flex flex-row justify-center pb-4",
                        "md:mx-auto md:place-content-between md:py-5"
                    )}
                >
                    {/* Col 1 */}
                    <div className="hidden md:flex md:items-center">
                        <p>Logo</p>
                    </div>
                    

                    {/* Col 2 */}
                    <ul 
                        className={classNames(
                            "w-full flex place-content-around border border-black/5 bg-white shadow-lg rounded-full px-4 py-2", 
                            "md:w-fit md:place-content-stretch md:gap-x-8 md:border-none md:shadow-none md:bg-transparent md:py-0"
                        )}
                    >
                        {   ['Home', 'About', 'Skill', 'Project'].map((i, index) => 
                                <li
                                    key={index}
                                    className={classNames('text-sm md:text-base font-medium', {
                                        'md:block':i === 'Home'
                                    })}
                                >{i}
                                </li>
                            )
                        }
                    </ul>

                </nav>
            </header>
    )
}
export default Header;