import Portfoliocard from "../../comps/Portfoliocard"
import { portfolioData } from "../../data/portfolioData"
import {
  PortfolioPageContainer,
  PortfolioHeader,
  PortfolioHero,
  PortfolioCardContainer,
  HeroText,
  PortfolioLinks,
  PortfolioPageWrap,
  PortfolioCta,
} from "../../styles/page-style/portfolio.style"
import ProjectCards from "../../comps/ProjectCards"
import Cta from "../../comps/Cta"
import Head from "next/head"

const Portfolio = ({ portfolio }) => {
  return (
    <>
      <Head>
        <title>{portfolio.title}</title>
        <meta name='description' content={portfolio.metaDescription} />
      </Head>

      <PortfolioPageContainer>
        <PortfolioPageWrap>
          <PortfolioHero>
            <PortfolioHeader>{portfolio.header}</PortfolioHeader>
            <HeroText>{portfolio.subHeader}</HeroText>
          </PortfolioHero>
          <PortfolioCardContainer>
            {portfolio.projects.map((project, index) => (
              <Portfoliocard
                key={index}
                src={project.image}
                name={project.name}
                description={project.description}
              />
            ))}
          </PortfolioCardContainer>
          <PortfolioLinks>
            {portfolio.more.map((more) => (
              <ProjectCards
                header={more.header}
                link={more.id}
                cta={more.cta}
                image={more.image}
                key={more.id}
              />
            ))}
          </PortfolioLinks>

          <PortfolioCta>
            <Cta />
          </PortfolioCta>
        </PortfolioPageWrap>
      </PortfolioPageContainer>
    </>
  )
}

export const getStaticPaths = async () => {
  const paths = portfolioData.map((portfolio) => {
    return {
      params: { portfolioId: portfolio.id },
    }
  })

  return {
    paths: paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.portfolioId
  const data = portfolioData.find((port) => {
    return port.id === id
  })

  return {
    props: {
      portfolio: data,
    },
  }
}

export default Portfolio
