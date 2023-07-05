import Image from "next/image";
import secondaryFont from "@next/font/local";
import gifUrl from "../../public/gif/gif_result.gif"
import { IoIosArrowForward } from "react-icons/io";
import TitleKiri from "./titleKiri";

export const ginchiest = secondaryFont({
    src: [
      {
        path: "../../public/fonts/secondary/Ginchiest.ttf",
        weight: "400",
      },
      {
        path: "../../public/fonts/secondary/GinchiestShadow.ttf",
        weight: "700",
      },
    ],
    variable: "--font-ginchiest",
  });

export default function Testimoni () {
    return (
        <section className="bg-pink">
            <div className="container mx-auto  ">
        <div className="flex w-8/12 mx-auto ">
        <TitleKiri
            title="Testimoni"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, tempora. Error sit corporis, architecto beatae vitae vel fugiat fuga, iure, explicabo similique ipsam sequi officia distinctio culpa nam iste recusandae? "
          />
          <div className="w-6/12 flex items-center">
            <Image
              src={gifUrl}
              width={300}
              height={300}
              alt="Lustrum DTETI XII"
              className="mx-auto rounded-full"
            />
            <IoIosArrowForward size={40}/>
          </div>
        </div>
      </div>
        </section>

    );
}