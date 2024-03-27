"use client";

import { useState } from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function MenuTabs() {
  const [isOpen, setIsOpen] = useState(false);
  const router = usePathname();

  function buttonOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="relative flex flex-col justify-center items-end">
      <button
        className="bg-transparent border-2 px-3 py-1.5 rounded-md text-sm"
        onClick={buttonOpen}
      >
        {router === "/menu/makanan"
          ? "Makanan"
          : router === "/menu/minuman" && "Minuman"}
      </button>
      <ul
        className={`absolute z-10 top-12 bg-neutral-100 px-3 py-2.5 text-sm rounded-md flex flex-col gap-y-2 duration-200 ${
          isOpen === false ? "scale-0" : "scale-100"
        }`}
      >
        <li>
          <Link href="/menu/makanan" className="text-sm" scroll={false}>
            Makanan
          </Link>
        </li>
        <li>
          <Link href="/menu/minuman" className="text-sm" scroll={false}>
            Minuman
          </Link>
        </li>
      </ul>
    </div>
  );
}
