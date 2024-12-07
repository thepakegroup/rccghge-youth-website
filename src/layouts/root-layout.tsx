import { Fragment } from "react/jsx-runtime";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Cookies from "js-cookie";

const RootLayout = () => {
  const restrictedRoutes: string[] = ["/hge-men"];
  const authRoutes: string[] = ["/auth/sign-in", "/auth/sign-up"];
  const { pathname } = useLocation();
  useEffect(() => {
    const token = Cookies.get("token");
    if (restrictedRoutes.includes(pathname) && !token) {
      window.location.href = "/auth/sign-in";
    } else if (authRoutes.includes(pathname) && token) {
      window.location.href = "/";
    }
  }, [pathname]);
  return (
    <Fragment>
      <div className="w-full max-w-[1920px] mx-auto">
        <ScrollRestoration />
        <Outlet />
      </div>
    </Fragment>
  );
};

export default RootLayout;
