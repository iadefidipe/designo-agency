import styled, { withTheme } from "styled-components"

export const ContactPageContainer = styled.div`
  margin: ${({ theme }) => theme.genPad};

  & > section {
    max-width: ${({ theme }) => theme.maxWidth};
    margin: 0 auto 100px;
  }
`

export const LocationListWrap = styled.section``

export const FormWrap = styled.section`
  background: ${({ theme }) =>
    `url(${theme.bg.bgAboutHero.src}) no-repeat left bottom, ${theme.colors.pryPeach}`};
  min-height: 480px;
  display: flex;
  align-items: center;
  padding: 54px 95px;
  justify-content: space-between;
  gap: 95px;
  border-radius: ${({ theme }) => theme.bRadius};

  & > * {
    flex: 1;
  }
  @media (max-width: ${({theme}) => theme.queries.tablet}) {
    flex-direction: column;
    padding: 71px 58px;
    background-position: -150px -200px;
  }
  @media (max-width: ${({theme}) => theme.queries.mobileL}) {
    text-align: center;
    padding: 72px 24px;
    background: ${({ theme }) =>
      `url(${theme.bg.twoCircle.src}) no-repeat center top, ${theme.colors.pryPeach}`};
  }
`

export const CardContent = styled.div``
export const CardHeader = styled.h1``
export const CardSubText = styled.p`
  margin-top: 32px;
`
export const CardForm = styled.div`
  width: 100%;
`
