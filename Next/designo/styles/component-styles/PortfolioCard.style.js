import styled from "styled-components"
import Image from "next/image"

export const PortfolioCard = styled.div`
  background-color: ${({ theme }) => theme.colors.secLightPeach};
  height: 478px;
  max-width: 350px;
  border-radius: ${({ theme }) => theme.bRadius};
  display: flex;
  flex-direction: column;

  &:hover {
    background-color: ${({ theme }) => theme.colors.pryPeach};
    h3,
    p {
      color: ${({ theme }) => theme.colors.pryWhite};
    }
  }

  @media (max-width: 1130px) and (min-width: 425px) {
    flex-direction: row;
    height: 310px;
    max-width: 100%;
  }
`
export const CardImgWrap = styled.div`
  position: relative;
  flex: 1.7;
  @media (max-width: 1130px) and (min-width: 425px) {
    flex: 1;

  }
`
export const CardImage = styled(Image)`
  border-radius: ${({ theme }) => ` ${theme.bRadius}  ${theme.bRadius} 0 0 `};
  @media (max-width: 1130px) and (min-width: 425px) {
    border-radius: ${({ theme }) => ` ${theme.bRadius} 0 0 ${theme.bRadius} `};
  }
`
export const CardContent = styled.div`
  text-align: center;
  flex: 1;
  display: grid;
  place-content: center;
  padding: 32px;
`
export const CardHeader = styled.h3`
  color: ${({ theme }) => theme.colors.pryPeach};
  text-transform: uppercase;
`
export const CardDes = styled.p`
  color: ${({ theme }) => theme.colors.pryBlack};
`
