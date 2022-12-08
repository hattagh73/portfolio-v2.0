import Image from 'next/image';

interface iProps {
    className: string;
    src: string;
}

const Blob = ({className, src}:iProps) => {
    return (
        <span 
            className={className}
        >
            <Image 
                alt="Blob SVG Image"
                src={src}
                fill
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 20vw"
                quality={100}
                priority
            />
        </span>
    )
}
export default Blob;