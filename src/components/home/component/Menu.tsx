import Image from "next/image";
import Link from "next/link";

import { menuTemp } from "@components/menu/temp";

import CompressIcons from "@icons/compress-alt.svg";

const Menu = () => {
  return (
    <section className="pt-[7rem] pb-[4rem]">
      <div className="flex flex-col justify-center items-center mb-10">
        <h2 className="text-center mb-2 text-3xl font-bold">New Menu</h2>
        <span className="h-0.5 w-[100px] bg-[#F2BE22] block" />
      </div>

      <div className="w-full grid grid-cols-4 gap-6 px-20">
        {menuTemp.map((item, index) => (
          <figure className="w-full" key={`${item.id}${index}`}>
            <div className="relative w-full h-[250px]">
              <Image
                src={item.images}
                alt="Nasi Kuning"
                className="object-cover w-full"
                fill
              />

              <div className="absolute inset-0 opacity-0 z-10 hover:opacity-100 duration-200 flex flex-col justify-center items-center rounded-b-sm bg-[#272829]">
                <button className="mb-4">
                  <CompressIcons className="w-7 h-7 fill-neutral-50" />
                </button>

                <h5 className="text-md font-semibold text-neutral-50">
                  {item.foodName}
                </h5>
                <span className="text-sm text-[#F0DE36] block mt-2">
                  {item.date}
                </span>
              </div>
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
};

export { Menu };
