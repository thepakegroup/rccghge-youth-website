import { Mdiv } from "@/components/framer-motions/motion-exports";
import { navLinks, navLinksProps } from "./nav-links";
import { Link, useLocation } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";

export const MobileNav = ({
  setShowNav,
}: {
  setShowNav: Dispatch<SetStateAction<boolean>>;
}) => {
  // pathname
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  //
  return (
    <Mdiv
      initial={{ height: 0 }}
      animate={{ height: "auto" }}
      exit={{ height: 0 }}
      className="w-full fixed top-[48px] left-0 overflow-hidden flex md:hidden flex-col gap-2 bg-light-100 z-[99999]"
    >
      <Link
        className={`py-3 px-2 border-b last:border-b-0 hover:text-primary-100 hover:border-b-primary-100 transition-all duration-[400ms] ${
          isHome
            ? "text-primary-100 border-b-primary-100"
            : "border-b-stone-300"
        }`}
        to="/"
        onClick={() => setShowNav(false)}
      >
        Home
      </Link>
      {navLinks.map((link: navLinksProps) => {
        const isActive = pathname.startsWith(link.path);
        return (
          <Link
            className={`py-3 px-2 border-b last:border-b-0 hover:text-primary-100 hover:border-b-primary-100 transition-all duration-[400ms] ${
              isActive
                ? "text-primary-100 border-b-primary-100"
                : "border-b-stone-300"
            }`}
            to={link.path}
            key={link.id}
            onClick={() => setShowNav(false)}
          >
            {link.label}
          </Link>
        );
      })}
    </Mdiv>
  );
};
