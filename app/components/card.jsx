import Image from "next/image";
import classNames from "classnames";

export default function Card({name, desc, image, imageClassname, alt, h, w}) {
  return (
    <div className="bg-white shadow-figma rounded-lg flex p-8 items-center">
      <Image
        src={image}
        width={w}
        height={h}
        alt={alt}
        className={classNames("rounded-full mr-6", imageClassname)}
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
