import { ContactUsForm } from "@/components/home-components/contact-us-form";
import { Cta1Section } from "@/components/home-components/cta-1-section";
import { HeroSection } from "@/components/home-components/hero-section";
import { ImpactSection } from "@/components/home-components/impact-section";
import { OurProgrammsSection } from "@/components/home-components/our-programms-section";
import { Fragment } from "react/jsx-runtime";

const Home = () => {
  //
  return (
    <Fragment>
      <HeroSection />
      <Cta1Section />
      <ImpactSection />
      <OurProgrammsSection />
      <ContactUsForm />
    </Fragment>
  );
};

export default Home;
