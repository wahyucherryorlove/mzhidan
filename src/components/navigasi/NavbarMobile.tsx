"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import MenuHamburgerIcons from "@icons/menu-burger.svg";

export function NavbarMobile() {
  const router = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  function buttonOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {" "}
      <header
        className={`fixed z-50 top-0 bg-neutral-50 shadow-md w-full  flex items-center duration-200 h-[90px]`}
      >
        <nav className={`flex justify-between items-center px-6 w-full`}>
          <div className="flex justify-between w-full">
            <h2 className="text-[17px]">Mom{"'"}s Zhidan</h2>
            <button onClick={buttonOpen}>
              <MenuHamburgerIcons className="w-5 h-5" />
            </button>
          </div>
        </nav>

        <aside
          className={`fixed top-[90px] h-full bg-neutral-200 w-[16rem] pt-10 z-40 duration-200 ${
            isOpen ? "left-0" : "-left-[16rem]"
          }`}
        >
          <ul className="flex flex-col gap-y-6">
            <li>
              <Link
                href="/"
                className={`text-[17px] px-10 ${
                  router === "/"
                    ? "text-neutral-500 font-semibold"
                    : "text-neutral-600 font-normal"
                }`}
                onClick={buttonOpen}
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                href="/menu/makanan"
                className={`text-[17px] px-10 ${
                  router === "/menu/makanan" || router === "/menu/minuman"
                    ? "text-neutral-500 font-semibold"
                    : "text-neutral-600 font-normal"
                }`}
                onClick={buttonOpen}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`text-[17px] px-10 ${
                  router === "/blog"
                    ? "text-neutral-500 font-semibold"
                    : "text-neutral-600 font-normal"
                }`}
                onClick={buttonOpen}
              >
                Konten
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`text-[17px] px-10 ${
                  router === "/contact"
                    ? "text-neutral-500 font-semibold"
                    : "text-neutral-600 font-normal"
                }`}
                onClick={buttonOpen}
              >
                Hubungi Kami
              </Link>
            </li>
          </ul>
        </aside>
      </header>
      {isOpen && (
        <button onClick={buttonOpen} className="cursor-default">
          <div className="absolute inset-0 bg-neutral-950/70 z-20" />
        </button>
      )}
    </>
  );
}
