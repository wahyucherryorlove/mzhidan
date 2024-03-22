"use client";

import { useState } from "react";

import { Order } from "@components/menu/component/menu-details/Order";
import { Payment } from "@components/menu/component/menu-details/Payment";

import { menuTemp } from "@components/menu/temp";

export default function Page({ params }: { params: { view: string } }) {
  let shipping = 19000;
  const [isPrice, setIsPrice] = useState(1);

  return menuTemp.map(
    (item) =>
      params.view.toString().substring(3) === item.id.toString() && (
        <>
          <main className="py-[6rem] md:py-[9rem] bg-neutral-200 mt-0">
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
