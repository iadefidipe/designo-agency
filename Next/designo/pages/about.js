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
import Head from 'next/head'

const about = () => {
  return (
    <>
    <Head>
    <title>About - We Are More Than a Brand</title>
        <meta
          name="description"
          content="Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact."
        />
    </Head>
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
    </>
    
  )
}

export default about
