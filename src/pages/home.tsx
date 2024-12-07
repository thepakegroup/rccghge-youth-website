import { ContactUsForm } from "@/components/home-components/contact-us-form";
import { Cta1Section } from "@/components/home-components/cta-1-section";
import { Cta2Section } from "@/components/home-components/cta-2-section";
import { HeroSection } from "@/components/home-components/hero-section";
import { ImpactSection } from "@/components/home-components/impact-section";
import { OurGallery } from "@/components/home-components/our-gallery";
import { OurProgrammsSection } from "@/components/home-components/our-programms-section";
import { OurTeamSection } from "@/components/home-components/our-team-section";
import { Fragment } from "react/jsx-runtime";

const Home = () => {
  //
  return (
    <Fragment>
      <HeroSection />
      <Cta1Section />
      <ImpactSection />
      <OurProgrammsSection />
      <OurGallery />
      <Cta2Section />
      <OurTeamSection />
      <ContactUsForm />
    </Fragment>
  );
};

export default Home;
