import Image from "next/image";
import Link from "next/link";

import { blogTemp } from "@components/konten/temp";

const Konten = () => {
  return (
    <section className="py-[4rem]">
      <div className="flex flex-col justify-center items-center mb-10">
        <h2 className="text-center mb-2 text-3xl font-bold">Our Blog</h2>
        <span className="h-0.5 w-[80px] bg-[#F2BE22] block" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-8 lg:px-20 gap-4 lg:gap-6">
        {blogTemp.map((item, index) => (
          <article key={`${item.id}${index}`}>
            <div className="relative w-full h-[300px]">
              <Image
                src={item.images}
                alt={item.blogName}
                className="object-cover w-full h-full"
                fill
              />
            </div>
            <div className="py-8">
              <Link href="" className="text-2xl font-bold">
                {item.blogName}
              </Link>
              <p className="text-md text-neutral-500 mt-2">
                {item.description}
              </p>

              <span className="mt-6 inline-block font-semibold text-xs rounded-md text-[#F77E21]">
                {item.date}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export { Konten };
