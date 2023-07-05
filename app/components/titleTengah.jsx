import primaryFont from "@next/font/local";
import secondaryFont from "@next/font/local";

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

export default function TitleTengah({title1,title2,title3}) {
  return (
    <div
      className={`${brice.variable} font-brice text-center text-5xl text-black `}
    >
      <h2>{title1} </h2>
      <div className="flex justify-center">
        <h2>{title2}</h2>
        <h2 className={`${ginchiest.variable} font-ginchiest text-6xl`}>
        {title3}
        </h2>
      </div>
    </div>
  );
}
