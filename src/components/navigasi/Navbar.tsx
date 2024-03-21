import { useWindowSize } from "@hooks/useWindowSize";

import { NavbarDesktop } from "./NavbarDesktop";
import { NavbarMobile } from "./NavbarMobile";

export function Navbar() {
  const width = useWindowSize();

  return <>{width < 768 ? <NavbarMobile /> : <NavbarDesktop />}</>;
}
