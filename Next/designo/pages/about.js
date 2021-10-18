import React from "react";
import {
  AboutImage,
  AboutSection,
  ImageDiv,
  InnerDiv,
  ContentWrap,
  ContentImage,
  StyledAbout,
} from "../styles/page-style/about.style";
import data from "../data/aboutData";
import ContentCard from "../comps/ContentCard";
import Cta from "../comps/Cta";

const about = () => {
  return (
    <StyledAbout>
      <ContentCard hero data={data.sectionOne} />
      <ContentCard light reverse data={data.sectionTwo} />
      <ContentCard light data={data.sectionThree} />
      <Cta />
    </StyledAbout>
  );
};

export default about;
