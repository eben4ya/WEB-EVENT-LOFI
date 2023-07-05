import Logo from "./logo";
import primaryFont from "@next/font/local";
import { AiOutlineCopyright } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import Gambar from "./gambar";
import Dropdown from "./dropdown";

export const brice = primaryFont({
  src: [
    {
      path: "../../public/fonts/primary/Brice-Bold.otf",
      weight: "400",
    },
    {
      path: "../../public/fonts/primary/Brice-Black.otf",
      weight: "700",
    },
  ],
  variable: "--font-brice",
});

export default function Footer(options) {
  return (
    <footer className="bg-hero ">
      <div className="container mx-auto flex w-10/12 ">
        <div className="w-8/12 py-20">
          <div className="flex items-center ">
            <Logo className="hover:scale-110"/>
            <h3 className={`${brice.variable} font-brice text-white text-3xl`}>
              Lustrum DTETI FT UGM
            </h3>
          </div>
          <div className="flex space-x-6 pl-5 mb-12 ">
            <Gambar
              link="https://www.instagram.com/lustrumdteti/"
              image="img/instagram-icon.svg"
              w="50"
              h="50"
              alt="IG Lustrum DTETI"
            />
            <Gambar
              link="https://www.instagram.com/lustrumdteti/"
              image="img/instagram-icon.svg"
              w="50"
              h="50"
              alt="IG Lustrum DTETI"
            />
            <Gambar
              link="https://www.instagram.com/lustrumdteti/"
              image="img/instagram-icon.svg"
              w="50"
              h="50"
              alt="IG Lustrum DTETI"
            />
            <Gambar
              link="https://www.instagram.com/lustrumdteti/"
              image="img/instagram-icon.svg"
              w="50"
              h="50"
              alt="IG Lustrum DTETI"
            />
            <Gambar
              link="https://www.instagram.com/lustrumdteti/"
              image="img/instagram-icon.svg"
              w="50"
              h="50"
              alt="IG Lustrum DTETI"
            />
          </div>
          <div className="flex items-center pl-5 pb-6 mt-6">
            <AiOutlineCopyright color="white" />
            <h6 className="mx-2 text-white text-sm">
              Lustrum DTETI FT UGM. All Rights Reserved
            </h6>
          </div>
        </div>
        <div className="w-4/12 flex justify-evenly text-white py-20" >
          <div>
            <h6 className="mb-2">QUICK LINKS</h6>
            <Dropdown/>
          </div>
          <div>
          <h6 className="mb-2">CONTACT</h6>
          <p>lustrum.dteti@ugm.ac.id</p>
          <p>xxxxxxxxx (Eben)</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
