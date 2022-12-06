import Image from 'next/image';
import classNames from 'classnames';

const SSkill = () => {

    const skills = [
        {
            id: 1,
            skill: 'Figma',
            icon: 'https://res.cloudinary.com/dltslq5fh/image/upload/v1667237384/icons/ibdziqncbnwjle0l1axc.svg'
        },
        {
            id: 2,
            skill: 'HTML',
            icon: 'https://res.cloudinary.com/dltslq5fh/image/upload/v1667237602/icons/stb3wn5tabkjb8xduqpt.svg'
        },
        {
            id: 3,
            skill: 'CSS',
            icon: 'https://res.cloudinary.com/dltslq5fh/image/upload/v1667237602/icons/hzztmpdh8ymsygnn8ogf.svg'
        },
        {
            id: 4,
            skill: 'SCSS',
            icon: 'https://res.cloudinary.com/dltslq5fh/image/upload/v1667237602/icons/kxuhzeznvi0di61alkaw.svg'
        },
        {
            id: 5,
            skill: 'Bootstrap',
            icon: 'https://res.cloudinary.com/dltslq5fh/image/upload/v1670223477/icons/k2q9a8uxlee9b4y2riro.svg'
        },
        {
            id: 6,
            skill: 'TailwindCSS',
            icon: 'https://res.cloudinary.com/dltslq5fh/image/upload/v1670223479/icons/kpymfu6pc6qbstgjruoj.svg'
        },
        {
            id: 7,
            skill: 'JavaScript',
            icon: 'https://res.cloudinary.com/dltslq5fh/image/upload/v1670223473/icons/e0n8w6vhoasqylqdo3kg.svg'
        },
        {
            id: 8,
            skill: 'ReactJS',
            icon: 'https://res.cloudinary.com/dltslq5fh/image/upload/v1667237602/icons/nwj8o9c9k9qkxkmarczy.svg'
        },
        {
            id: 9,
            skill: 'NextJS',
            icon: 'https://res.cloudinary.com/dltslq5fh/image/upload/v1667293231/icons/xkgcutbelbcuml2zxywh.svg'
        },
        {
            id: 10,
            skill: 'NodeJS',
            icon: 'https://res.cloudinary.com/dltslq5fh/image/upload/v1670224251/icons/yvmxlf3c3carvdlul33r.svg'
        },
        {
            id: 11,
            skill: 'ExpressJS',
            icon: 'https://res.cloudinary.com/dltslq5fh/image/upload/v1670224251/icons/dmpowjilrdvef1s9j9dm.svg'
        },
        {
            id: 12,
            skill: 'MySQL',
            icon: 'https://res.cloudinary.com/dltslq5fh/image/upload/v1670225206/icons/rnqcburcaaknt6nfat0s.svg'
        },
        {
            id: 13,
            skill: 'Cloudinary',
            icon: 'https://res.cloudinary.com/dltslq5fh/image/upload/v1670224251/icons/gfdvtppwlv6ys1ntqroc.svg'
        }
    ]

    return (
        <section 
            id="skill" 
            className={classNames(
                "max-w-screen-2xl mx-6 2xl:mx-auto",
                "pt-16 pb-16",
                "grid",
                "md:grid-cols-2"
            )}>
            
            {/* START col-1 */}
            <div 
                className={classNames(
                    ""
                )}
            >
                <p>my skill! 🚀</p>
                <h1
                    className={classNames(
                        "font-quiche font-bold",
                        "text-4xl",
                        "lg:text-5xl lg:max-w-[60%]"
                    )}
                >These are my familiar skill set</h1>
                <p
                    className={classNames(
                        "mt-7",
                        "text-clr-text-primary/70",
                        "md:max-w-[60%] md:mt-14"
                    )}
                >Currently learning some of these technology and improving my skills in <span className="italic">web design</span>,
                    <span className="italic"> frontend</span> and any related to the area of web development
                </p>

            </div>{/* END col-1 */}

            {/* START col-2 */}
            <div 
                className={classNames(
                    ""
                )}
            >
                <ul
                    className={classNames(
                        // "grid grid-cols-5 gap-1"
                        "mt-7 md:mt-0",
                        "grid gap-1",
                        "grid-cols-3",
                        "lg:grid-cols-5"
                    )}
                >
                    {   skills.map(i =>
                        <li
                            key={i.id}
                            className={classNames(
                                "inline-flex flex-col items-center",
                                "shadow-none hover:shadow transition duration-300 ease-linear",
                                "rounded-lg border border-clr-text-primary/10 py-3 px-6 group/parent"
                            )}
                        >
                            <span className="relative w-12 h-12 md:w-20 md:h-20">
                                <Image 
                                    alt="Technology skill icon in web development"
                                    src={i.icon}
                                    fill
                                    className="absolute drop-shadow-xl group-hover/parent:-translate-y-2 transition duration-300 ease-linear"
                                    sizes="(max-width: 768px) 100vw,(max-width: 1200px) 20vw"
                                    priority
                                    // width="80"
                                    // height="80"
                                />
                            </span>
                            
                            <p 
                                className={classNames(
                                    "mt-2 text-sm font-normal text-clr-text-primary/70",
                                    "transition duration-300 ease-linear",
                                    "group-hover/parent:text-clr-text-primary",
                                )}
                            >{i.skill}</p>
                        </li>
                    )}
                    
                    
                </ul>
            </div>{/* END col-2 */}
            
        </section>
    )
}
export default SSkill;