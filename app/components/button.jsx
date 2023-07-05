import Link from "next/link";

export default function Button({children, className, variant}){
    const addClassname = className ? `${className}` : "";
    const variants = {
        "outline-yellow" : `border border-yellow-500 text-yellow-500 font-semibold hover:text-black hover:bg-yellow-500`,
        "yellow" : `text-black bg-yellow-300 hover:bg-yellow-600`,
    }
    const pickedVariant = variants[variant]
    return (
        <>
            <Link href="" className={`transition py-3 px-10 text-lg rounded-full inline-block  ${addClassname} ${pickedVariant}`} >{children}</Link>
        </> 
    );
}