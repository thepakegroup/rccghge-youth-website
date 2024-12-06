import { MainPage } from "@/components/base-components/main-page";
import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import { Outlet } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

const SiteLayout = () => {
  return (
    <Fragment>
      {/* Navbar */}
      <Navbar />
      {/* Main page */}
      <MainPage>
        <Outlet />
      </MainPage>
      {/* Footer section */}
      <Footer />
    </Fragment>
  );
};

export default SiteLayout;
