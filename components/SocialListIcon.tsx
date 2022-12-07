import { FiFigma, FiGitHub } from './components';
import classNames from 'classnames';

interface iProps {
    ul_className?: string;
    li_className?: string;
}

const SocialListIcon = ({ul_className, li_className}:iProps) => {
    const soc_links = [
        {
            id: 1,
            to: 'https://www.figma.com/@hattalimited'
        },
        {
            id: 2,
            to: 'https://github.com/hattagh73'
        }
    ]

    return (
        <ul 
            className={ul_className}
        >
            {/* <p className="lowercase border py-[0.18rem] px-3 rounded">Learn more</p> */}
            { soc_links.map(i =>
                <li 
                    key={i.id}
                    className={classNames(
                        li_className,
                        "transition duration-300 ease-linear inline-flex",
                        // "hover:bg-clr-bg-secondary bg-clr-bg-secondary/50",
                        "shadow-transparent hover:shadow-lg",
                    )}
                >
                    <a href={i.to} target="_blank">
                        {   i.id === 1 ?
                            (
                                <FiFigma />
                            ) : (
                                <FiGitHub />
                            )                  
                        }
                    </a>
                </li>
            )}
        </ul>
    )
}
export default SocialListIcon;