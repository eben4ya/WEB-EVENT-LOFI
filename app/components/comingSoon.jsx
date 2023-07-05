import Navbar from "./navbar";
import primaryFont from "@next/font/local";


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

export default function ComingSoon({event}) {
  return (
    <>
      <div className="bg-hero h-[650px]">
        <div className="container mx-auto">
          <Navbar />
          <div className={`${brice.variable} text-center mt-20`}>
            <h1 className="text-6xl text-white font-brice font-semibold w-8/12 mx-auto leading-relaxed hover:text-pink">
              COMING SOON 
            </h1>
            <p className="font-brice text-white text-opacity-100 text-md w-4/12 mx-auto mt-1 leading leading-relaxed">
              {event}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
