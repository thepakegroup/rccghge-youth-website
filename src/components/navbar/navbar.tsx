import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/base-components/button";
import { navLinks, navLinksProps } from "@/components/navbar/nav-links";
import { Mpresence } from "../framer-motions/motion-exports";
import { useState } from "react";
import { Hamburger } from "@/icons/hamburger";
import { CloseIcon } from "@/icons/close-icon";
import { MobileNav } from "./mobile-nav";

export const Navbar = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  //
  const [showNav, setShowNav] = useState<boolean>(false);
  //
  return (
    <nav className="sticky top-0 z-[9999] bg-light-100 py-3">
      <div className="flex items-center justify-between side-space">
        <Link to="/" className="inline-block">
          <img src="/logo.svg" className="w-16 md:w-24" />
        </Link>
        {/* nav links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            className={`hover:text-primary-100 font-medium text-sm font-quicksand transition-all duration-[400ms] ${
              isHome ? "text-primary-100" : "text-dark-100"
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
                className={`hover:text-primary-100 font-medium text-sm font-quicksand transition-all duration-[400ms] ${
                  isActive ? "text-primary-100" : "text-dark-100"
                }`}
                to={link.path}
                key={link.id}
                onClick={() => setShowNav(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        {/* nav btn */}
        <Link className="inline-block" to="/#contact-us">
          <Button
            className="md:inline-block hidden font-semibold text-[13px] leading-[15px] py-3 px-6"
            label="Contact Us"
          />
        </Link>
        {/*  */}
        {
          <div className="md:hidden block">
            <Mpresence>
              {!showNav ? (
                <Hamburger onClick={() => setShowNav(true)} />
              ) : (
                <CloseIcon onClick={() => setShowNav(false)} />
              )}
            </Mpresence>
          </div>
        }
        {
          <Mpresence>
            {showNav && <MobileNav setShowNav={setShowNav} />}
          </Mpresence>
        }
      </div>
    </nav>
  );
};
