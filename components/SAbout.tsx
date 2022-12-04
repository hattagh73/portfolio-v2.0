import classNames from 'classnames';
import Image from 'next/image';

const SAbout = () => {

    const interest = [
        {
            id: 1,
            pt: 'Improving my web design skill'
        },
        {
            id: 2,
            pt: 'Learning web app programming'
        },
        {
            id: 3,
            pt: `Checking systems' quality`
        },
    ]

    return (
        <section id="about" className="h-screen pt-16 scroll-m-10">
            
            <div 
                className={classNames(
                    "max-w-screen-2xl mx-6 2xl:mx-auto", //! Container
                    "grid",
                    "gap-y-6",
                    "md:grid-cols-2"
                )}
            >
                {/* col-1 */}
                <div 
                    className={classNames(
                        "order-2 md:order-2"
                    )}
                >

                    <p>about me! 🙋‍♂️</p>

                    <h1
                        className={classNames(
                            "text-5xl font-medium"
                        )}
                    >I'm <span className="bg-lime-50 font-bold rounded-lg hover:bg-lime-100">Hatta</span>
                    </h1>

                    <div
                        className={classNames(
                            "mt-10"
                        )}
                    >
                        <p className="text-3xl font-medium">Things that i'm passionate the most:</p>
                        <ul>
                            {   interest.map(i =>
                                <li
                                    key={i.id}
                                    className={classNames(
                                        "mt-4 text-xl"
                                    )}
                                >{i.pt}</li>
                            )}
                            
                        </ul>
                    </div>

                </div>   
                
                {/* col-2 */}
                <div
                    className={classNames(
                        "order-1 md:order-2",
                        "flex justify-center",
                        ""
                    )}
                >
                    <div className="relative w-64 h-64 my-12">
                        <Image 
                            fill
                            alt="Portfolio profile image"
                            src="/imgs/dp-blob.svg"
                            className=""
                        />
                    </div>
                </div>    
            </div>
            
        </section>
    )
}
export default SAbout;