import Link from "next/link";

export default function Button({children, className, variant}){
    const addClassname = className ? `${className}` : "";
    const variants = {
        "outline-yellow" : `border border-yellow-500 text-yellow-500 font-semibold`,
        "yellow" : `text-black bg-yellow-300`,
    }
    const pickedVariant = variants[variant]
    return (
        <>
            <Link href="" className={` py-3 px-10 text-lg rounded-full inline-block ${addClassname} ${pickedVariant}`} >{children}</Link>
        </> 
    );
}