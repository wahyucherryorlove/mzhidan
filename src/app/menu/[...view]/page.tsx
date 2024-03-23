"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { Order } from "@components/menu/component/menu-details/Order";
import { Payment } from "@components/menu/component/menu-details/Payment";

import ArrowLeftIcons from "@icons/arrow-left.svg";

import { menuTemp } from "@components/menu/temp";

export default function Page({ params }: { params: { view: string } }) {
  let shipping = 19000;
  const router = useRouter();
  const [isPrice, setIsPrice] = useState(1);

  return menuTemp.map(
    (item) =>
      params.view.toString().substring(3) === item.id.toString() && (
        <>
          <main className="flex flex-col py-[6rem] md:py-[9rem] bg-neutral-200 mt-0">
            <section className="w-[85%] md:w-1/2 sm:w-3/4 lg:w-[40%] mx-auto flex items-center gap-4 mt-4">
              <ArrowLeftIcons
                className="w-5 h-5 fill-[#F57D1F] cursor-pointer"
                onClick={() => router.push("/menu/makanan")}
              />
              <Link href="/menu/makanan" className="text-xl font-semibold">
                {item.foodName}
              </Link>
            </section>

            <Order
              key={item.id}
              id={item.id}
              foodName={item.foodName}
              description={item.description}
              price={item.price}
              images={item.images}
              date={item.date}
              isOrder={isPrice}
              setIsOrder={setIsPrice}
            />

            <Payment
              key={item.id}
              id={item.id}
              price={item.price}
              shipping={shipping}
              isOrder={isPrice}
            />
          </main>
        </>
      )
  );
}
