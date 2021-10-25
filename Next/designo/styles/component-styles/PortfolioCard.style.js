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
`
export const CardImgWrap = styled.div`
  position: relative;
  flex: 1.7;
`
export const CardImage = styled(Image)`
  border-radius: ${({ theme }) => ` ${theme.bRadius}  ${theme.bRadius} 0 0 `};
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
