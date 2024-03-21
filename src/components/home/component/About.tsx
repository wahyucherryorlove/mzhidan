import Image from "next/image";

import TTDImages from "@images/home/ttd.webp";
import WarungImages from "@images/home/warung.jpeg";

export function About() {
  return (
    <section className="pt-[7rem] pb-[4rem] px-20 flex md:grid grid-cols-2 flex-col-reverse gap-y-10">
      <div className="lg:mt-8">
        <h2 className="text-2xl font-semibold mb-3 lg:mb-5">
          Sejarah Warung Bunda Zhidan
        </h2>
        <p className="text-base font-normal w-4/5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
          facere dignissimos eius cupiditate porro numquam, velit deleniti unde
          sint nisi? A ipsam aliquid provident deserunt, impedit ex officia
          atque fugiat nulla repudiandae, itaque quisquam quaerat odit
          consequatur quis id ducimus!
        </p>

        <div className="flex flex-col mt-10 gap-y-6">
          <Image
            src={TTDImages}
            alt="Wahyudi Umar TTD"
            className="object-cotain w-32"
          />
          <div>
            <h5 className="mb-1 font-semibold">Wahyudi Umar</h5>
            <span className="text-sm text-yellow-600">Owner & Co-Founder</span>
          </div>
        </div>
      </div>
      <div>
        <Image
          src={WarungImages}
          alt="Warung Mama Zhidan"
          className="object-contain w-full h-full md:h-[400px]"
        />
      </div>
    </section>
  );
}
