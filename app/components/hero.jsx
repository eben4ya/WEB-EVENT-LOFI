import Navbar from "./navbar";
import Button from "./button";
import primaryFont from "@next/font/local";
import { ImArrowDown } from "react-icons/im";

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

export default function Hero() {
  return (
    <>
      <div className="bg-hero h-[650px]">
        <div className="container mx-auto">
          <Navbar />
          <div className={`${brice.variable} text-center mt-20`}>
            <h1 className="text-2xl md:text-5xl xl:text-6xl text-white font-brice font-semibold  w-8/12 mx-auto leading-relaxed">
              LUSTRUM DTETI XII
            </h1>
            <p className="font-brice text-white text-opacity-100 text-sm xl:text-md w-4/12 mx-auto mt-1 leading leading-relaxed">
              Perayaan ulang tahun DTETI FT UGM yang ke-60
            </p>
            <Button variant="yellow" className="mt-14 ease-in" href="#about-us">
              <div className="flex">
                <p className="pr-5 uppercase">scroll down</p>
                <div className="pt-1.5">
                  <ImArrowDown />
                </div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
