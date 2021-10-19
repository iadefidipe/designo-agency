import React from "react"
import {
  StyledAbout,
  AboutSectionWrap,
  AboutCta,
  AboutContainer,
} from "../styles/page-style/about.style"
import data from "../data/aboutData"
import ContentCard from "../comps/ContentCard"
import Cta from "../comps/Cta"
import LocationList from "../comps/LocationList"

const about = () => {
  return (
    <AboutContainer>
      <StyledAbout>
        <AboutSectionWrap>
          <ContentCard hero data={data.sectionOne} />
          <ContentCard light reverse data={data.sectionTwo} />
        </AboutSectionWrap>
        <AboutSectionWrap>
          <LocationList />
          <ContentCard light data={data.sectionThree} />
        </AboutSectionWrap>
        <AboutCta>
          <Cta />
        </AboutCta>
      </StyledAbout>
    </AboutContainer>
  )
}

export default about
