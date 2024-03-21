import Image from "next/image";

import type { DrinkProps } from "../interface";

interface DrinksProps extends DrinkProps {
  index: number;
}

export function Drinks({
  index = 0,
  id = 0,
  foodName,
  images,
  description,
  price,
  date,
}: DrinksProps) {
  return (
    <figure className="p-3 border-2 rounded-md" key={`${id}${index + 1}`}>
      <div className="relative w-full h-[250px] bg-neutral-400 rounded-md">
        <Image
          src={images}
          alt={foodName}
          className="object-cover rounded-md"
          fill
        />
      </div>
      <div className="mt-6 px-1.5">
        <h2 className="mb-1.5 font-semibold">{foodName}</h2>
        <h6>Rp. {price}</h6>
        <button className="bg-transparent border-2 border-[#FBA834] text-[#F57D1F] hover:text-neutral-100 hover:bg-[#F57D1F] duration-100 w-full py-2 rounded-[50px] mt-5">
          Place an order
        </button>
      </div>
    </figure>
  );
}
