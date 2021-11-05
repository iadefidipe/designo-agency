import styled from "styled-components"

export const PortfolioPageContainer = styled.div`
  margin: ${({ theme }) => theme.genPad};
`

export const PortfolioPageWrap = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: ${({ theme }) => theme.center};
  display: flex;
  flex-direction: column;
  gap: 160px;
`
export const PortfolioHero = styled.section`
  background: ${({ theme }) =>
    `url(${theme.bg.ctaBg.src}) no-repeat right center , ${theme.colors.pryPeach}`};
  display: grid;
  place-content: center;
  border-radius: ${({ theme }) => theme.bRadius};
  min-height: 252px;
  text-align: center;
  gap: 24px;
`
export const PortfolioCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 32px;
  @media (max-width: ${({theme}) => theme.queries.deskMed}) and (min-width: ${({theme}) => theme.queries.mobileL}) {
    flex-direction: column;
  }
`

export const PortfolioHeader = styled.h1`
  text-transform: capitalize;
`
export const HeroText = styled.p``

export const PortfolioLinks = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 308px;
  gap: 30px;

  @media (max-width: ${({theme}) => theme.queries.deskMed}) {
    height: 424px;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
  }
`
export const PortfolioCta = styled.section`
  transform: translateY(120px);
  @media (max-width:${({theme}) => theme.queries.tablet}){
  transform: translateY(200px);
  }
  @media (max-width: ${({theme}) => theme.queries.mobileL}){
  transform: translateY(230px);
  }
`


