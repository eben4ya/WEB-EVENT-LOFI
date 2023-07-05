import Image from "next/image";

export default function Card({name, desc, image, imageClassname, alt, h, w}) {
    const addImageClassname = imageClassname ? `${imageClassname}` : "";
  return (
    <div className="bg-white shadow-figma rounded-lg flex p-8 items-center">
      <Image
        src={image}
        width={w}
        height={h}
        alt={alt}
        className={`rounded-full mr-6 ${addImageClassname}`}
      />
      <div>
        <h4 className="text-lg font-semibold">{name}</h4>
        <p className="text-sm text-gray-400 font-semibold mt-1">
          {desc}
        </p>
      </div>
    </div>
  );
}
