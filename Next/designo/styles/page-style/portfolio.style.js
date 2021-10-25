import styled from "styled-components"

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
export const PortfolioPageContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: ${({ theme }) => theme.center};
`
export const PortfolioCardContainer = styled.div`
  margin: 160px 0;
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
  row-gap: 32px;
`

export const PortfolioHeader = styled.h1`
  text-transform: capitalize;
`
export const HeroText = styled.p``

