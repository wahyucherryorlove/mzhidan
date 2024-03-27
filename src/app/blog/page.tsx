import Image from "next/image";
import Link from "next/link";

import { Jumbotron } from "@components/konten/component/Jumbotron";

import ArrowLeftIcons from "@icons/arrow-left.svg";

export default function Page() {
  return (
    <>
      <main className="mt-[90px]">
        <Jumbotron />

        <section className="py-[6rem] md:py-[9rem] px-6 lg:px-40 flex flex-col gap-y-4">
          <article className="grid grid-cols-1 lg:grid-cols-2 bg-neutral-200">
            <div className="py-10  px-6">
              <h6 className="text-base">24 Maret 2024</h6>
              <h2 className="text-xl lg:text-2xl mt-2 mb-4 font-semibold">
                Nasi Kuning Mom Zhidan Mendapatkan Penghargaan Juara Pertama
                Se-Asia Tenggara
              </h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                aspernatur hic numquam consequuntur amet, officiis minus debitis
                commodi quaerat nam.
              </p>
              <Link
                href=""
                className="text-sm flex items-center gap-x-2 mt-4 text-neutral-600"
              >
                Lihat Selengkapnya
                <ArrowLeftIcons className="w-4 h-4 rotate-180 fill-neutral-600" />
              </Link>
            </div>
            <div className="relative w-full h-full">
              <Image
                src="/images/konten/gbr1.jpg"
                alt="Gambar"
                className="object-cover w-full h-full"
                fill
              />
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
