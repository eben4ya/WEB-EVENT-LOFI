import Image from "next/image";
import TitleKiri from "./titleKiri";

export default function AboutUs() {
  return (
    <section className="py-20" bg-slate-50 id="about-us">
      <div className="container mx-auto  ">
        <div className="flex w-8/12 mx-auto ">
          <TitleKiri
            title="About Us"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, tempora. Error sit corporis, architecto beatae vitae vel fugiat fuga, iure, explicabo similique ipsam sequi officia distinctio culpa nam iste recusandae? "
          />

          <div className="w-6/12">
            <Image
              src="/img/about-us.png"
              width={400}
              height={200}
              alt="Lustrum DTETI XII"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
