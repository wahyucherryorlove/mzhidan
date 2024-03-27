import Link from "next/link";

import EmailIcons from "@icons/envelope.svg";
import LocationIcons from "@icons/marker.svg";
import PhoneIcons from "@icons/phone-call.svg";

export function FormInput() {
  return (
    <section className="py-[6rem] px-6 lg:px-40 flex flex-col-reverse lg:grid grid-cols-2 gap-12">
      <ul className="flex flex-col gap-y-5">
        <li className="flex flex-col gap-y-3.5">
          <label
            htmlFor="nama"
            className="font-semibold after:content-['*'] after:text-red-500"
          >
            Nama
          </label>
          <input
            type="text"
            className="w-full border py-2.5 px-3 rounded-md bg-neutral-200 focus:bg-neutral-100 duration-200 outline-none"
            placeholder="Nama..."
            id="nama"
          />
        </li>
        <li className="flex flex-col gap-y-3.5">
          <label
            htmlFor="email"
            className="font-semibold after:content-['*'] after:text-red-500"
          >
            Email
          </label>
          <input
            type="text"
            className="w-full border py-2.5 px-3 rounded-md bg-neutral-200 focus:bg-neutral-100 duration-200 outline-none"
            placeholder="Email..."
            id="email"
          />
        </li>
        <li className="flex flex-col gap-y-3.5">
          <label
            htmlFor="komentar"
            className="font-semibold after:content-['*'] after:text-red-500"
          >
            Komentar
          </label>
          <textarea
            rows={6}
            className="w-full border py-2.5 px-3 rounded-md bg-neutral-200 focus:bg-neutral-100 duration-200 outline-none"
            placeholder="Komentar..."
            id="komentar"
          />
        </li>
        <li className="mt-2">
          <button className="bg-blue-600 hover:bg-blue-700 duration-200 text-neutral-100 px-6 py-2.5 rounded-md font-semibold">
            Kirim Pesan
          </button>
        </li>
      </ul>

      <ul className="mt-10 flex flex-col gap-y-8">
        <li className="flex flex-col sm:flex-row gap-y-4 gap-x-3 items-center">
          <i className="p-3 bg-blue-800 flex items-center justify-center rounded-full hover:bg-blue-700 duration-150">
            <EmailIcons className="w-6 h-6 fill-neutral-50" />
          </i>
          <Link
            href="mailto:wahyucherryorlove@gmail.com"
            className="text-neutral-600 hover:text-neutral-700 duration-150 text-center sm:text-start"
            rel="noreferrer"
          >
            wahyucherryorlove@gmail.com
          </Link>
        </li>
        <li className="flex flex-col sm:flex-row gap-y-4 gap-x-3 items-center">
          <i className="p-3 bg-blue-800 flex items-center justify-center rounded-full hover:bg-blue-700 duration-150">
            <LocationIcons className="w-6 h-6 fill-neutral-50" />
          </i>
          <Link
            href=""
            className="text-neutral-600 hover:text-neutral-700 duration-150 text-center sm:text-start"
          >
            Kompleks YPPKG. Blok K3 A No 39, Paccerakkang, Makassar, Sulawesi
            Selatan
          </Link>
        </li>
        <li className="flex flex-col sm:flex-row gap-y-4 gap-x-3 items-center">
          <i className="p-3 bg-blue-800 flex items-center justify-center rounded-full hover:bg-blue-700 duration-150">
            <PhoneIcons className="w-6 h-6 fill-neutral-50" />
          </i>
          <div className="flex flex-col gap-y-1">
            <Link
              href=""
              className="text-neutral-600 hover:text-neutral-700 duration-150 text-center sm:text-start"
            >
              +62 859 6151 8853 ( Telepon )
            </Link>
            <Link
              href="https://wa.me/6282194823066"
              className="text-neutral-600 hover:text-neutral-700 duration-150 text-center sm:text-start"
              target="_blank"
              rel="noreferrer"
            >
              +62 821 9482 3066 ( WhatsApp )
            </Link>
          </div>
        </li>
      </ul>
    </section>
  );
}
