import Link from 'next/link';

import Logo from './Logo';
import SocialListIcon from './SocialListIcon';

import classNames from 'classnames';

const Footer = () => {

    const ft_links = [
        {
            id: 1,
            title: 'About Site 🌍',
            links: [
                {
                    id: 1,
                    link: '/',
                    name: 'Home'
                },
                {
                    id: 2,
                    link: '#about',
                    name: 'About'
                },
                {
                    id: 3,
                    link: '#skill',
                    name: 'Skill'
                },
                {
                    id: 4,
                    link: '#project',
                    name: 'Project'
                }
            ]
        },
        {
            id: 2,
            title: 'Design Resource 🎨',
            links: [
                {
                    id: 1,
                    link: 'https://icons8.com/',
                    name: 'Icon'
                },
                {
                    id: 2,
                    link: 'https://fonts.google.com/',
                    name: 'Google Font'
                },
                {
                    id: 3,
                    link: 'https://uigradients.com/',
                    name: 'Color Gradient'
                },
                {
                    id: 4,
                    link: 'https://animista.net/',
                    name: 'Basic Animation'
                },
                {
                    id: 5,
                    link: 'https://yoksel.github.io/grid-cheatsheet/',
                    name: 'Grid Layout'
                }
            ]
        },
        {
            id: 3,
            title: 'Tech Research 🕹️',
            links: [
                {
                    id: 1,
                    link: 'https://nextjs.org/',
                    name: 'NextJS'
                },
                {
                    id: 2,
                    link: 'https://reactjs.org/',
                    name: 'ReactJS'
                },
                {
                    id: 3,
                    link: 'https://swiperjs.com/',
                    name: 'SwiperJS'
                }
            ]
        }
    ]

    return (
        <footer 
            className={classNames(
                "md:pt-10 md:pb-0",
                ""
            )}
        >
            
            {/* START Grid */}
            <div 
                className={classNames(
                    "max-w-screen-2xl mx-6 2xl:mx-auto",
                    "grid",
                    "grid-cols-1 gap-y-10",
                    "md:grid-cols-4",
                    ""
                )}
            >

                <div className="">
                    <Logo className="text-xl" />
                    <p
                        className={classNames(
                            "max-w-[80%] "
                        )}
                    >Exploring the digital world on multi-platform mainly in design</p>
                    <SocialListIcon 
                        ul_className="inline-flex gap-x-3 mt-5"
                    />
                </div>

                {   ft_links.map(i =>
                    <div 
                        key={i.id}
                        className=""
                    >
                        <h1 className="font-medium">{i.title}</h1>
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
                        "md:mt-32 py-1",
                        "text-xs text-clr-bg-primary"
                    )}
                >
                    <li>Made via NextJS</li>
                    <li>© {new Date().getFullYear()} Hatta Limited. Some rights reserved.</li>
                </ul>{/* END Footnote */}
            </div>
            
        </footer>
    )
}
export default Footer;