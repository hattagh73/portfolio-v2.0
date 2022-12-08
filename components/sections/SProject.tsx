import { projects } from '../../local-data'; 

import Image from 'next/image';

// Import Swiper React components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import classNames from 'classnames';

const SProject = () => {

    const bulletClass = "text-clr-text-red bg-clr-text-red border";
    const bulletActiveClass = "bg-clr-bg-secondary opacity-100";

    return (
        <section 
            id="project" 
            className={classNames(
                // "border",
                "pt-10 pb-10",
                "md:pt-32 md:pb-52",
            )}
        >

            {/* START main project-title */}
            <div
                className={classNames(
                    "max-w-screen-2xl mx-6 2xl:mx-auto ",
                    "flex flex-col",
                    "md:items-center"
                )}
            >
                <p>my project! 🎮</p>
                <h1
                    className={classNames(
                        "font-quiche font-bold",
                        "text-4xl",
                        "lg:text-5xl lg:max-w-[60%]"
                    )}
                >Several of my projects</h1>
            </div>{/* END main project-title */}
            
            {/* START grid */}
            <Swiper
                className={classNames(
                    "max-w-screen-2xl mx-6 2xl:mx-auto pb-10",
                    "mt-12",
                    // "border border-clr-text-red"
                )}
                pagination={{
                    clickable: true,
                    bulletActiveClass: `${bulletActiveClass}`,
                    // renderBullet(index, className) {
                    //     return '<span class="' + className + '"><img class="pagination-bullet"/></span>';
                    // },
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    }
                }}
                modules={[Pagination]}
            >
                {   projects && projects.map((i,index) =>
                    
                    <SwiperSlide 
                        key={i.id}
                        className={classNames(
                            "hover:shadow-md transition duration-300 ease-linear",
                            "grid grid-cols-1"
                        )}
                    >
                        {/* Project-Name-Info-Type */}
                        <div 
                            className={classNames(
                                "order-2 px-4 py-4",
                                // "h-[220px] md:h-[180px]",
                                "border border-clr-text-primary/10 rounded-b-md"
                            )}
                        >
                            {/* project-category */}
                            <p
                                className={classNames(
                                    "text-sm",
                                )}
                            >📌 <span className="font-medium text-clr-text-primary/70">{index+1}. {i.type}</span>
                            </p>
                            
                            {/* project-title */}
                            <h1
                                className={classNames(
                                    "text-2xl font-bold capitalize",
                                    // "h-[68px] lg:h-[28px]"
                                )}
                            >{i.title}
                            </h1>
                            
                            {/* project-description */}
                            <p
                                className={classNames(
                                    "h-[110px] lg:h-[80px]",
                                    "mt-4 lg:mt-7",
                                    "text-clr-text-primary/70"
                                )}
                            >{i.desc}
                            </p>
                        </div>

                        {/* Project-Img */}
                        <div
                            className={classNames(
                                "col-start-1",
                                "bg-clr-bg-secondary",
                                "flex justify-center py-10"
                            )}
                        >
                            <span
                                className="relative w-[100%] h-[300px] block"
                            >
                                <Image 
                                    alt="Images of project"
                                    src={i.img}
                                    fill
                                    className={classNames(
                                        "absolute object-cover"
                                    )}
                                    sizes="(max-width: 768px) 100vw,(max-width: 1200px) 20vw"
                                />
                            </span>
                        </div>
                        
                    </SwiperSlide>
                )}
            </Swiper>
            
        </section>
    )
}
export default SProject;

