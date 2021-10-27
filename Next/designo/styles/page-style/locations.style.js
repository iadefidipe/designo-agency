import styled from "styled-components"

export const LocationPageContainer = styled.div`
  & > * {
    margin: ${({ theme }) => theme.center};
    max-width: ${({ theme }) => theme.maxWidth};
  }
`

export const LocationCta = styled.section`
  transform: translateY(110px);
  padding: ${({ theme }) => theme.genPad};
  @media (max-width: ${({theme}) => theme.queries.tablet}) {
    transform: translateY(220px);
  }
`
export const LocationMaps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`
