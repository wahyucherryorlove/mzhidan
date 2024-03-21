import Image from "next/image";

import { menuTemp } from "@components/menu/temp";

const Menu = () => {
  return (
    <section className="pt-[7rem] pb-[4rem]">
      <div className="flex flex-col justify-center items-center mb-10">
        <h2 className="text-center mb-2 text-3xl font-bold">New Menu</h2>
        <span className="h-0.5 w-[100px] bg-[#F2BE22] block" />
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-20">
        {menuTemp.map((item, index) => (
          <figure className="w-full" key={`${item.id}${index}`}>
            <div className="relative w-full h-[300px] rounded-md group">
              <Image
                src={item.images}
                alt={item.foodName}
                className="object-cover w-full rounded-md"
                fill
              />

              <div className="absolute z-10 inset-0 flex items-center justify-center bg-neutral-400/50 opacity-0 group-hover:opacity-100 rounded-md duration-200 backdrop-blur-sm">
                <button className="px-3.5 py-2 bg-neutral-800 text-neutral-100 rounded-md">
                  Order now
                </button>
              </div>
            </div>

            <div className="mt-5">
              <h4 className="font-semibold mb-2 text-lg">{item.foodName}</h4>
              <h6 className="text-neutral-500">Rp. {item.price}</h6>
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
};

export { Menu };
