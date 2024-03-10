import Image from "next/image";
import Link from "next/link";

const Konten = () => {
  return (
    <section className="py-[4rem]">
      <div className="flex flex-col justify-center items-center mb-10">
        <h2 className="text-center mb-2 text-3xl font-bold">Our Blog</h2>
        <span className="h-0.5 w-[80px] bg-[#F2BE22] block" />
      </div>

      <div className="grid grid-cols-3 px-20">
        <article className="">
          <div className="relative w-full h-[300px]">
            <Image
              src="/images/konten/gbr1.jpg"
              alt="Konten pertama"
              className="object-cover w-full h-full"
              fill
            />
          </div>
          <div className="py-8">
            <Link href="" className="text-2xl font-bold">
              Konten Pertama
            </Link>
            <p className="text-md text-neutral-500 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              repellendus provident molestias fugiat reiciendis eius doloremque
              fugit laudantium perferendis natus.
            </p>

            <span className="mt-6 inline-block font-semibold text-xs rounded-md text-[#F77E21]">
              02 Maret 2024
            </span>
          </div>
        </article>
      </div>
    </section>
  );
};

export { Konten };
