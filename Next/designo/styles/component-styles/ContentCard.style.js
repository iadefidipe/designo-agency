import styled from "styled-components"
import Image from "next/image"

export const CardContainer = styled.section`
  min-height: 480px;
  border-radius: ${({ theme }) => theme.bRadius};

  background: ${({ theme, hero, reverse }) => {
    if (hero) {
      return `url(${theme.bg.bgAboutHero.src}) no-repeat -20px bottom`
    }
    if (reverse) {
      return `url(${theme.bg.twoCircle.src}) no-repeat center bottom`
    } else {
      return `url(${theme.bg.twoCircle.src}) no-repeat left bottom`
    }
  }};

  background-color: ${({ theme, light }) =>
    light ? theme.colors.secLightPeach : theme.colors.pryPeach};
  margin: ${({ theme }) => theme.genPad};
  display: flex;
  flex-direction: ${({ reverse }) => reverse && "row-reverse"};
  color: ${({ theme, light }) =>
    light ? theme.colors.pryBlack : theme.colors.pryWhite};

  & > div:last-child,
  & > div:last-child * {
    border-radius: ${({ theme, reverse }) =>
      reverse
        ? `${theme.bRadius} 0 0 ${theme.bRadius} `
        : `0 ${theme.bRadius} ${theme.bRadius} 0 `};
  }

  @media (max-width: ${({theme}) => theme.queries.tablet}) {
    flex-direction: column-reverse;
    height: 632px;
    & > div:last-child,
    & > div:last-child * {
      border-radius: ${({ theme }) => ` ${theme.bRadius} ${theme.bRadius} 0 0`};
    }
  }
  @media (max-width: ${({theme}) => theme.queries.mobileL}) {
    height: 715px;
    margin: 0;
    border-radius: 0px;
    & > div:last-child,
    & > div:last-child * {
      border-radius: 0px;
    }
  }
`

export const CardContent = styled.div`
  flex: 1 635px;
  display: flex;
  align-items: center;
  padding: 1rem;
  @media (max-width:${({theme}) => theme.queries.mobileL}) {
    flex: 1 0px;
  }
`

export const ContentWrap = styled.div`
  max-width: 458px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-left: 95px;

  h1 {
    margin-bottom: 32px;

    color: ${({ theme, light }) =>
      light ? theme.colors.pryPeach : theme.colors.pryWhite};
  }
  @media (max-width: ${({theme}) => theme.queries.tablet}) {
    max-width: 100%;
    text-align: center;
    margin-left: 0;
    justify-content: center;
  }
`

export const ImageContainer = styled.div`
  flex: 1 476px;
  /* background-color: green; */
  @media (max-width: ${({theme}) => theme.queries.tablet}) {
    flex: 1 0px;
  }
`
export const ImageWrap = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  object-fit: cover;
  /* background-color: blue; */
`

export const CardImage = styled(Image)``
