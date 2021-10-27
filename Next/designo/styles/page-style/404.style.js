import styled from "styled-components"

export const ErrorPageContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};

  margin: 0 auto;
  padding-top: 100px;
  background: ${({ theme }) => `url(${theme.bg.ctaBg.src}) no-repeat center`};
`

export const PageContent = styled.section`
  display: grid;
  place-content: center;
  gap: 2rem;
  text-align: center;
  position: relative;
  margin: ${({ theme }) => theme.genPad};

  h1,
  span {
    color: ${({ theme }) => theme.colors.pryPeach};
  }
  h2,
  p {
    color: ${({ theme }) => theme.colors.pryBlack};
  }

  h1 {
    font-size: 10rem;
  }
`

export const PageCta = styled.div`
  transform: translateY(132px);
  padding: ${({ theme }) => theme.genPad};
  @media (max-width: ${({theme}) => theme.queries.tablet}) {
    transform: translateY(180px);
  }
  @media (max-width: ${({theme}) => theme.queries.mobileL}) {
    transform: translateY(260px);
  }
`
