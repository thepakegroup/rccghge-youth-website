import { ContactUsForm } from "@/components/home-components/contact-us-form";
import { Cta1Section } from "@/components/home-components/cta-1-section";
import { Cta2Section } from "@/components/home-components/cta-2-section";
import { HeroSection } from "@/components/home-components/hero-section";
import { ImpactSection } from "@/components/home-components/impact-section";
import { OurGallery } from "@/components/home-components/our-gallery";
import { OurProgrammsSection } from "@/components/home-components/our-programms-section";
import { OurTeamSection } from "@/components/home-components/our-team-section";
import { useLoaderData } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

const Home = () => {
  //
  const pageData = useLoaderData();
  const data = pageData?.data;
  const { gallery, programs, settings, teams, sliders } = data;
  //
  console.log(pageData);
  //
  return (
    <Fragment>
      <HeroSection contexts={settings?.settings} heroImages={sliders} />
      <Cta1Section content={settings?.settings} />
      <ImpactSection items={settings?.settings?.subsection} />
      <OurProgrammsSection programs={programs} />
      <OurGallery galleries={gallery} />
      <Cta2Section />
      <OurTeamSection teams={teams} />
      <ContactUsForm />
    </Fragment>
  );
};

export default Home;
