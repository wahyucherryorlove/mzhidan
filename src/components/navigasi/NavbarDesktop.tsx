"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { NavInfo } from "./NavInfo";

export function NavbarDesktop() {
  const router = usePathname();
  const [isScrollTop, setIsScrollTop] = useState(false);

  useEffect(() => {
    function handleScrollTop() {
      if (window.scrollY > 40) {
        setIsScrollTop(true);
      } else {
        setIsScrollTop(false);
      }
    }

    handleScrollTop();

    window.addEventListener("scroll", handleScrollTop);

    return () => {
      window.removeEventListener("scroll", handleScrollTop);
    };
  }, []);

  // const isBrowser = () => typeof window !== undefined;
  // function isScrollTop() {
  //   if (!isBrowser()) return;
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }

  return (
    <nav
      className={`fixed z-50 top-0 shadow-md w-full duration-200 h-24 flex justify-between items-center px-20 ${
        isScrollTop === true
          ? "bg-neutral-50/90 backdrop-blur-md"
          : "bg-neutral-50"
      }`}
    >
      <div>
        <h2 className="text-[17px]">Mom{"'"}s Zhidan</h2>
      </div>
      <ul className="flex gap-x-6">
        <li>
          <Link
            href="/"
            className={`text-[17px] ${
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
            href="/menu/makanan"
            className={`text-[17px] ${
              router === "/menu/makanan" || router === "/menu/minuman"
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
            className={`text-[17px] ${
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
            className={`text-[17px] ${
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
  );
}
