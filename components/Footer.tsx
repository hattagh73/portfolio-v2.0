import { ft_links } from '../local-data';

import Link from 'next/link';

import {Logo, SocialListIcon, Blob} from './components';

import classNames from 'classnames';

const Footer = () => {

    return (
        <footer 
            className={classNames(
                "pt-10",
                "md:pt-10",
                "relative",
                "border-t-2 border-t-clr-text-primary"
            )}
        >
            {/* Blob */}
            <Blob 
                src="https://res.cloudinary.com/dltslq5fh/image/upload/v1670482754/3d/nsi2bcoqcb3lfmf56afj.png"
                className="hidden lg:block absolute w-60 h-60 bottom-[8%] left-[43%]"
            />
            
            {/* START Grid */}
            <div 
                className={classNames(
                    "max-w-screen-2xl mx-6 2xl:mx-auto",
                    "grid",
                    "grid-cols-1 gap-y-10",
                    "md:grid-cols-5",
                    ""
                )}
            >
                {/* footer-logo-description-social-icons */}
                <div className="md:col-span-2">

                    <Logo className="text-xl" />

                    <p
                        className={classNames(
                            "md:max-w-[50%] max-w-[60%] text-clr-text-primary/70"
                        )}
                    >Exploring the digital world on multi-platform mainly in design</p>

                    <p className="mt-7 font-medium">Social Links</p>

                    <SocialListIcon 
                        ul_className="inline-flex gap-x-1 mt-4"
                        li_className="border rounded-md p-1 hover:bg-clr-bg-secondary"
                    />

                </div>

                {/* loop-footer-links-internal-external */}
                {   ft_links.map(i =>
                    <div 
                        key={i.id}
                        className=""
                    >
                        <h1 className="font-medium ">{i.title}</h1>
                        <ul className="text-clr-text-primary/70 mt-4 flex flex-col gap-y-1">

                            {   i.id === 1 && i.links.map(link =>
                                <li
                                    key={link.id}
                                    className=""
                                >
                                    {   link.name === 'Home' ? 
                                        (
                                            <Link
                                                href={link.link}
                                                className="hover:text-clr-text-primary underline decoration-[2px] decoration-clr-bg-secondary/0 hover:decoration-clr-bg-secondary transition duration-300 ease-linear"
                                            >{link.name}</Link>
                                        ) : (
                                            <Link
                                                href={link.link}
                                                scroll={false}
                                                className="hover:text-clr-text-primary underline decoration-[2px] decoration-clr-bg-secondary/0 hover:decoration-clr-bg-secondary transition duration-300 ease-linear"
                                            >{link.name}</Link>
                                        )
                                    }
                                </li>
                            )}
                            
                            {   i.id !== 1 && i.links.map(link =>
                                <li
                                    key={link.id}
                                >
                                    <a
                                        href={link.link} 
                                        target="_blank"
                                        rel="noreferrer"
                                        className="hover:text-clr-text-primary underline decoration-[2px] decoration-clr-bg-secondary/0 hover:decoration-clr-bg-secondary transition duration-300 ease-linear"
                                    >{link.name}</a>
                                </li>
                            )}

                        </ul>
                    </div>
                )}

            </div>{/* END Grid */}
            
            {/* START Footnote */}
            <div
                className={classNames(
                    "bg-clr-text-primary"
                )}
            >
                <ul
                    className={classNames(
                        "max-w-screen-2xl mx-6 2xl:mx-auto",
                        "mt-8 pb-14 pt-4",
                        "md:mt-96 md:pb-4 md:pt-4",
                        "text-xs text-clr-bg-primary",
                        // "grid",
                        // "grid-cols-1",
                        // "md:grid-cols-5"
                        "flex flex-col",
                        "md:flex-row md:justify-between"
                    )}
                >

                    <li
                        className="order-2"
                    >Handcrafted by <span className="">hattaltd</span>
                    </li>

                    <li
                        className="order-1"
                    >Made via <a href="https://nextjs.org/" target="_blank" rel="noreferrer" className="hover:underline decoration-2 decoration-clr-bg-secondary">NextJS</a>
                    </li>

                    <li
                        className="order-3"
                    >© {new Date().getFullYear()} Some rights reserved
                    </li>
                </ul>{/* END Footnote */}
            </div>
            
            {/* show color gradient */}
            <div className="h-1 bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400" />
            
        </footer>
    )
}
export default Footer;