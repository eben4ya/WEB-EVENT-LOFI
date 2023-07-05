import Link from "next/link";
import Image from "next/image";
// import logo from "../../public/img/logo.png";

export default function Gambar ({link,image,w,h,alt, gambarClassname}) {
    const addGambarClassname = gambarClassname ? `${gambarClassname}` : "";
  return (
    <Link href={link}>
      <Image
        src={image}
        width={w}
        height={h}
        alt={alt}
        className={addGambarClassname}
      />
    </Link>
  );
}
