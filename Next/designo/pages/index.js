import Head from "next/head"
import Image from "next/image"
import { homeData } from "../data/homeData"
import ProjectCards from "../comps/ProjectCards"
import { portfolioData } from "../data/portfolioData"
import QualitiesCard from "../comps/QualitiesCard"
import Cta from "../comps/Cta"
import Button from "../comps/Button"
import {
  StyledHome,
  HeroSection,
  HeroLeft,
  HeroRight,
  PortfolioSection,
  HomeDiv,
  QualitiesSection,
  CtaSection,
} from "../styles/page-style/home.style"

export default function Home() {
  return (
    <StyledHome>
      <HomeDiv>
        <HeroSection>
          <HeroLeft>
            <h1>Award-winning custom designs and digital branding solutions</h1>
            <p>
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences. Find out more about our services.
            </p>
            <Button
              color={"dark"}
              text={homeData.button.title}
              link={homeData.button.link}
              label={homeData.button.label}
            />
          </HeroLeft>
          <HeroRight>
            <div>
              <Image src={homeData.image.srcDesktop} alt={homeData.image.alt} />
            </div>
          </HeroRight>
        </HeroSection>
        <div>
          <PortfolioSection>
            {portfolioData.map((portfolio, index) => (
              <ProjectCards
                header={portfolio.header}
                link={portfolio.id}
                cta={portfolio.cta}
                image={portfolio.image}
                key={portfolio.id}
              />
            ))}
          </PortfolioSection>
        </div>
      </HomeDiv>

      <HomeDiv>
        <QualitiesSection>
          {homeData.qualities.map((quality, index) => (
            <QualitiesCard
              key={index}
              src={quality.image}
              alt={quality.imageAlt}
              header={quality.header}
              des={quality.description}
              bg={homeData.bg}
            />
          ))}
        </QualitiesSection>

        <CtaSection>
          <Cta />
        </CtaSection>
      </HomeDiv>
    </StyledHome>
  )
}
