"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { NavInfo } from "./NavInfo";

export function NavbarDesktop() {
  const router = usePathname();

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
            <Link
              href="/"
              className={`${
                router === "/"
                  ? "text-neutral-500 font-semibold"
                  : "text-neutral-600 font-normal"
              }`}
            >
              Beranda
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`${
                router === "/about"
                  ? "text-neutral-500 font-semibold"
                  : "text-neutral-600 font-normal"
              }`}
            >
              Tentang Kami
            </Link>
          </li>
          <li>
            <Link
              href="/menu"
              className={`${
                router === "/menu"
                  ? "text-neutral-500 font-semibold"
                  : "text-neutral-600 font-normal"
              }`}
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className={`${
                router === "/blog"
                  ? "text-neutral-500 font-semibold"
                  : "text-neutral-600 font-normal"
              }`}
            >
              Konten
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`${
                router === "/contact"
                  ? "text-neutral-500 font-semibold"
                  : "text-neutral-600 font-normal"
              }`}
            >
              Hubungi Kami
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
