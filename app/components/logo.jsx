import Link from "next/link";
import Image from "next/image";
// import logo from "../../public/img/logo.png";

export default function Logo() {
  return (
    <>
      <Link
        href="/"
        className="uppercase text-2xl font-semibold tracking-widest text-white"
      >
        <Image
          src="/img/logo.png"
          width={200}
          height={200}
          alt="Lustrum DTETI XII"
        />
      </Link>
    </>
  );
}
