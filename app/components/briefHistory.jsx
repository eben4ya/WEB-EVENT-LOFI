import Card from "./card";
import TitleTengah from "./titleTengah";

export default function BriefHistory() {
  return (
    <section className="py-20 bg-yellow-300">
      <div container mx-auto>
        <TitleTengah title1="A Brief History" title2="of" title3="Dteti" />
        <div className="flex flex-wrap mx-auto mt-14  w-11/12">
          <div className="w-4/12 px-4 pb-10 hover:scale-105">
            <Card
              name="1942"
              desc="lorem ipsum dolor sit"
              image="/img/c-plusplus.svg"
              alt="c++"
              h={75}
              w={75}
              className=""
            />
          </div>
          <div className="w-4/12 px-4 pb-10 hover:scale-105">
            <Card
              name="1949"
              desc="lorem ipsum dolor sit"
              image="/img/javascript.svg"
              alt="javascript"
              h={75}
              w={75}
              className=""
            />
          </div>
          <div className="w-4/12 px-4 pb-10 hover:scale-105">
            <Card
              name="1995"
              desc="lorem ipsum dolor sit"
              image="/img/nextjs.svg"
              alt="nextjs"
              h={75}
              w={75}
              className=""
            />
          </div>
          <div className="w-4/12 px-4 pb-10 hover:scale-105">
            <Card
              name="2015"
              desc="lorem ipsum dolor sit"
              image="/img/python.svg"
              alt="python"
              h={75}
              w={75}
              className=""
            />
          </div>
          <div className="w-4/12 px-4 pb-10 hover:scale-105">
            <Card
              name="2019"
              desc="lorem ipsum dolor sit"
              image="/img/python.svg"
              alt="python"
              h={75}
              w={75}
              className=""
            />
          </div>
          <div className="w-4/12 px-4 pb-10 hover:scale-105">
            <Card
              name="2023"
              desc="lorem ipsum dolor sit"
              image="/img/python.svg"
              alt="python"
              h={75}
              w={75}
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
