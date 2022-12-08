import { skills } from '../../local-data'; 

import Image from 'next/image';
import classNames from 'classnames';

const SSkill = () => {

    return (
        <section 
            id="skill" 
            className={classNames(
                "max-w-screen-2xl mx-6 2xl:mx-auto",
                "pt-10 pb-10",
                "scroll-m-1",
                "md:pt-32 md:pb-32",
                "grid",
                "md:grid-cols-2",
                "md:scroll-m-32"
                // "border border-blue-900"
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