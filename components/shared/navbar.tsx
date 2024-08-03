import Link from "next/link";
import { ThemeSwitch } from "../modals/theme-switch";

import { NavLinks } from "./nav-links";

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b bg-transparent backdrop-blur-md mx-1 drop-shadow-sm">
      <div className="py-4 flex md:px-14 px-4 items-center justify-between">
        <div>
          <Link href="/">
            <h1 className="tracking-tighter font-bold text-lg  md:text-2xl lg:text-3xl">
              Extion Infotech
            </h1>
          </Link>
        </div>

        <NavLinks className="hidden md:flex" />

        <div className="flex items-center justify-between gap-5">
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
