import Image from "next/image";
import TitleTengah from "./titleTengah";

export default function MediaPartner() {
  return (
    <div className="mt-20">
      <TitleTengah title1="Media" title2="" title3="Partner" />
      <div className="flex justify-center space-x-20 mt-10 mb-20">
        <Image src="/img/c-plusplus.svg" alt="c++" height={150} width={150} />
        <Image src="/img/javascript.svg" alt="c++" height={75} width={150} />
        <Image src="/img/nextjs.svg" alt="c++" height={150} width={150} />
        <Image src="/img/python.svg" alt="c++" height={150} width={150} />
      </div>
    </div>
  );
}
