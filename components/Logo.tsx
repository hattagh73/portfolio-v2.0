import Link from "next/link";

interface iProps {
    className?: string;
}

const Logo = ({className}: iProps) => {
    return (
        <p 
            className={`font-bold ${className}`}
        ><Link href={`/`} scroll={true}>hattaltd<span className="text-clr-text-red font-extrabold text-2xl">.</span></Link>
        </p>
    )
}
export default Logo;

{/* If use useRouter */}
{/* 
<p
    onClick={() => {
        router.push({
            pathname: "/",
        })
    }}
>Home
</p> */}