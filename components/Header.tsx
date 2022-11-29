import classNames from 'classnames';

const Header = () => {
    return (
        <header 
                className={classNames(
                    "cursor-default fixed w-full bottom-0 z-10 bg-slate-50",
                    "md:bottom-auto md:top-0"
                )}
            >
                <nav 
                    className="max-w-screen-2xl px-6 md:mx-auto flex flex-row justify-center pb-4 md:pb-0 md:place-content-between"
                >
                    {/* Col 1 */}
                    <div className="hidden md:flex md:items-center">
                        <p>Logo</p>
                    </div>
                    

                    {/* Col 2 */}
                    <ul 
                        className={classNames(
                            "w-full flex place-content-around border border-black/5 bg-white shadow-lg rounded-full px-4 py-2", 
                            "md:w-fit md:place-content-stretch md:gap-x-6 md:border-none md:shadow-none md:bg-transparent"
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