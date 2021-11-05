import styled from "styled-components"
import Image from "next/image"

export const StyledAbout = styled.div`
  /* padding: 100px 0; */
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;

  gap: 50px;

  &,
  & > div {
    display: flex;
    flex-direction: column;
  }

  & > div {
    gap: 160px;
  }
`

export const AboutContainer = styled.div`
  background: ${({ theme }) =>
    `url(${theme.bg.leafLeft.src}) no-repeat left 150px, url(${theme.bg.leaf.src}) no-repeat 800px 1400px`};

  @media (max-width: ${({theme}) => theme.queries.tablet}) {
    background: none;
  }
`

export const AboutSectionWrap = styled.div`
  @media (max-width: ${({theme}) => theme.queries.mobileL}) {
    &:first-child {
      gap: 0;
    }
  }
`
export const AboutCta = styled.div`
  transform: translateY(132px);
  padding: ${({ theme }) => theme.genPad};
  @media (max-width: ${({theme}) => theme.queries.tablet}) {
    transform: translateY(180px);
  }
  @media (max-width: ${({theme}) => theme.queries.mobileL}) {
    transform: translateY(260px);
  }
`


