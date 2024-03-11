import Link from "next/link";

import GmailIcons from "@icons/envelope.svg";
import PhoneIcons from "@icons/phone-call.svg";
import TranslateIcons from "@icons/globe.svg";

export function NavInfo() {
  return (
    <div className="h-[38%] flex items-center justify-end px-14">
      <div className=""></div>
      <div className="flex items-center gap-x-7">
        <Link
          href=""
          className="text-xs flex gap-x-2 text-neutral-500 items-center"
        >
          <GmailIcons className="w-4 h-4 fill-neutral-500" />
          wahyucherryorlove@gmail.com
        </Link>
        <Link
          href=""
          className="text-xs flex gap-x-2 text-neutral-500 items-center"
        >
          <PhoneIcons className="w-4 h-4 fill-neutral-500" />
          +62 821 9482 3066
        </Link>
        <Link
          href=""
          className="text-xs flex gap-x-2 text-neutral-500 items-center"
        >
          <TranslateIcons className="w-4 h-4 fill-neutral-500" />
          Bahasa Indonesia
        </Link>
      </div>
    </div>
  );
}
