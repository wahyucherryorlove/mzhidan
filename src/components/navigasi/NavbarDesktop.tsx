import Link from "next/link";

import { NavInfo } from "./NavInfo";

export function NavbarDesktop() {
  return (
    <header className="absolute z-50 top-0 bg-neutral-50 shadow-md w-full h-[120px] flex flex-col ">
      <NavInfo />

      <hr className="border-[1px]" />

      <nav className="flex justify-between items-center h-[55%] px-20">
        <div className="">
          <h2>Mom{"'"}s Zhidan</h2>
        </div>
        <ul className="flex gap-x-6">
          <li>
            <Link href="" className={`text-neutral-600`}>
              Beranda
            </Link>
          </li>
          <li>
            <Link href="" className={`text-neutral-600`}>
              Tentang Kami
            </Link>
          </li>
          <li>
            <Link href="" className={`text-neutral-600`}>
              Menu
            </Link>
          </li>
          <li>
            <Link href="" className={`text-neutral-600`}>
              Konten
            </Link>
          </li>
          <li>
            <Link href="" className={`text-neutral-600`}>
              Hubungi Kami
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
