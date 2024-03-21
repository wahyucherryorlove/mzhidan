"use client";

import { Jumbotron } from "@components/menu/component/Jumbotron";
import { Menus } from "@components/menu/hooks/menu";

import { Drinks } from "@components/menu/component/Drink";
import { Foods } from "@components/menu/component/Food";

import { menuTemp } from "@components/menu/temp";

export default function Page({ params }: { params: { view: any } }) {
  return (
    <>
      <main className="mt-[120px]">
        <Jumbotron />

        <section className="py-[6rem] px-4 lg:px-40">
          <Menus />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-4">
            {params.view === "makanan" &&
              menuTemp.map(
                (item, index) =>
                  item.categori === "food" && (
                    <Foods
                      index={index}
                      id={item.id}
                      key={`${index}${item.id}`}
                      foodName={item.foodName}
                      description={item.description}
                      images={item.images}
                      price={item.price}
                      date={item.date}
                    />
                  )
              )}

            {params.view === "minuman" &&
              menuTemp.map(
                (item, index) =>
                  item.categori === "drink" && (
                    <Drinks
                      index={index}
                      id={item.id}
                      key={`${index}${item.id}`}
                      foodName={item.foodName}
                      description={item.description}
                      images={item.images}
                      price={item.price}
                      date={item.date}
                    />
                  )
              )}
          </div>
        </section>
      </main>
    </>
  );
}
