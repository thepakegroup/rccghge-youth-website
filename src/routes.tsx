import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "@/layouts/root-layout";
import SiteLayout from "@/layouts/site-layout";
import AuthLayout from "@/layouts/auth-layout";
import Home from "./pages/home";
import Galleria from "./pages/galleria";
import OurLeaders from "./pages/our-leaders";
import Events from "./pages/events";
import JoinUs from "./pages/join-us";
import SignUpPage from "./pages/sign-up";
import SignInPage from "./pages/sign-in";
import GalleriaDetails from "./pages/galleria-details";
import EventDetails from "./pages/event-details";
import { getYoungAdultsContent } from "./utils/services";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      {/* AUTH LAYOUT */}
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="/auth/sign-in" element={<SignInPage />} />
        <Route path="/auth/sign-up" element={<SignUpPage />} />
      </Route>
      {/* SITE LAYOUT */}
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} loader={getYoungAdultsContent} />
        <Route path="/galleria" element={<Galleria />} />
        <Route path="/galleria/:id" element={<GalleriaDetails />} />
        <Route
          path="/our-leaders"
          element={<OurLeaders />}
          loader={getYoungAdultsContent}
        />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/join-us" element={<JoinUs />} />
      </Route>
    </Route>
  )
);
