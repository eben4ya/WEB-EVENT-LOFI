import secondaryFont from "@next/font/local";

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

export default function TitleKiri({title, desc}) {
  return (
    <div className="w-6/12 pr-14 pt-10">
      <h2
        className={`${ginchiest.variable} text-6xl font-ginchiest text-aboutTitle`}
      >
        {title}
      </h2>
      <p className="mt-2 text-lg text-justify leading-relaxed pl-8">
        {desc}
      </p>
    </div>
  );
}
