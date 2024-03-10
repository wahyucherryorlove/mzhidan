import Link from "next/link";

import FacebookIcons from "@icons/facebook.svg";
import InstagramIcons from "@icons/instagram.svg";
import LinkedinIcons from "@icons/linkedin.svg";
import TwitterIcons from "@icons/x-twitter.svg";

export function Footer() {
  return (
    <footer className="relative bottom-0 py-10 bg-[#272829]">
      <div className="flex justify-center gap-x-5 items-center mt-4">
        <Link
          href="https://www.instagram.com/wahyudix15/"
          className="w-10 h-10 bg-[#FF407D] hover:bg-[#DA0C81] duration-200 flex items-center justify-center rounded-full"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcons className="w-[22px] h-[22px] fill-neutral-50" />
        </Link>
        <Link
          href="https://web.facebook.com/wahyu.jhyyy/"
          className="w-10 h-10 bg-[#FF407D] hover:bg-[#DA0C81] duration-200 flex items-center justify-center rounded-full"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcons className="w-[22px] h-[22px] fill-neutral-50" />
        </Link>
        <Link
          href="https://twitter.com/css_wahyu"
          className="w-10 h-10 bg-[#FF407D] hover:bg-[#DA0C81] duration-200 flex items-center justify-center rounded-full"
          target="_blank"
          rel="noreferrer"
        >
          <TwitterIcons className="w-[22px] h-[22px] fill-neutral-50" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/wahyudi-umar-ba2333236/"
          className="w-10 h-10 bg-[#FF407D] hover:bg-[#DA0C81] duration-200 flex items-center justify-center rounded-full"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinIcons className="w-[22px] h-[22px] fill-neutral-50" />
        </Link>
      </div>

      <span className="w-[90%] md:w-3/4 xl:w-1/2 h-[2px] mx-auto bg-[#45474B] block my-8" />

      <p className="text-center text-neutral-400 text-sm">
        Copyright &copy;{new Date().getFullYear()}{" "}
        <Link
          href="https://www.instagram.com/wahyudix15/"
          className="text-[#73BBC9] mx-0.5"
          rel="noreferrer"
          target="_blank"
        >
          Wahyudi Umar
        </Link>{" "}
        {"."} All rights reserved
      </p>
    </footer>
  );
}
