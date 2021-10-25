import Portfoliocard from "../../comps/Portfoliocard"
import { portfolioData } from "../../data/portfolioData"
import {
  PortfolioPageContainer,
  PortfolioHeader,
  PortfolioHero,
  PortfolioCardContainer,
  HeroText,
  
} from "../../styles/page-style/portfolio.style"

const Portfolio = ({ portfolio }) => {
  return (
    <>
      <PortfolioPageContainer>
        <PortfolioHero>
          <PortfolioHeader>{portfolio.header}</PortfolioHeader>
          <HeroText>{portfolio.subHeader}</HeroText>
        </PortfolioHero>

        <PortfolioCardContainer>
          {portfolio.projects.map((project, index) => (
            <Portfoliocard key={index} src={project.image} name={project.name} description={project.description} />
          ))}
        </PortfolioCardContainer>
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
