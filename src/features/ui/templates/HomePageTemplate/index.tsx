import { FC } from "react";

import {
  HeroSection,
  AboutMeSection,
  ExperiencesSection,
  ProjectsSection,
  ContactMeSection,
} from "./sections";

interface IHomePageTemplateProps {}

const HomePageTemplate: FC<IHomePageTemplateProps> = ({}) => {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <ExperiencesSection />
      <ProjectsSection />
      <ContactMeSection />
    </>
  );
};

export default HomePageTemplate;
