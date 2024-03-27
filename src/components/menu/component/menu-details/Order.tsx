"use client";

import Image from "next/image";
import type { Dispatch, SetStateAction } from "react";

import { MenuProps } from "@components/menu/interface";

import MinusIcons from "@icons/minus.svg";
import PlusIcons from "@icons/plus.svg";
import ShoppingIcons from "@icons/shopping-basket.svg";

interface OrderProps extends MenuProps {
  isOrder: number;
  setIsOrder: Dispatch<SetStateAction<number>>;
}

export function Order({
  id,
  foodName,
  description,
  price,
  images,
  isOrder,
  setIsOrder,
}: OrderProps) {
  function minus() {
    setIsOrder(isOrder - 1);
  }

  function plus() {
    setIsOrder(isOrder + 1);
  }

  return (
    <section
      className="mt-[40px] w-[85%] md:w-1/2 sm:w-3/4 lg:w-[40%] mx-auto flex flex-col lg:flex-row justify-between lg:items-center p-4 md:p-6 bg-neutral-50 rounded-md shadow-md"
      key={id}
    >
      <div className="mb-6 lg:mb-0 w-full">
        <div className="flex gap-x-4 items-center mb-6">
          <ShoppingIcons className="w-7 h-7 fill-[#F57D1F]" />
          <h2 className="text-xl font-bold">Your Order</h2>
        </div>

        <h4 className="mb-2 font-semibold  uppercase">{foodName}</h4>
        <p className="text-neutral-600 mb-4 text-sm">{description}</p>
        <h4 className="text-neutral-500">Rp. {price}</h4>
      </div>

      <div className="flex flex-col gap-y-6 items-center w-full lg:w-auto">
        <div className="relative w-full lg:w-[100px] h-[150px] lg:h-[100px]">
          <Image
            src={images}
            alt={foodName}
            className="rounded-md object-cover"
            fill
          />
        </div>

        <div className="flex items-center gap-x-4">
          <button
            className={`w-5 h-5 bg-transparent border-2 border-[#FBA834] active:bg-[#FBA834]/30 active:backdrop-blur-md rounded-full flex items-center justify-center ${
              isOrder === 1 && "cursor-default"
            }`}
            onClick={minus}
            disabled={isOrder === 1 ? true : false}
          >
            <MinusIcons className="w-3 h-3 fill-[#FBA834]" />
          </button>
          <span>{isOrder}</span>
          <button
            className={`w-5 h-5 bg-transparent border-2 border-[#FBA834] active:bg-[#FBA834]/30 active:backdrop-blur-md rounded-full flex items-center justify-center`}
            onClick={plus}
          >
            <PlusIcons className="w-3 h-3 fill-[#FBA834]" />
          </button>
        </div>
      </div>
    </section>
  );
}
