import styled from "styled-components"

export const MapCardContainer = styled.div`
  margin: ${({ theme }) => theme.genPad};
  @media (max-width: 500px) {
    margin: 0;
  }
`
export const MapWrap = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? `row` : `row-reverse`)};
  gap: 30px;
  & > * {
    border-radius: ${({ theme }) => theme.bRadius};
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (max-width: 500px) {
    gap: 0;
    & > * {
      border-radius: 0;
    }
  }
`
export const ContentWrap = styled.div`
  flex: 1.7;
  background: ${({ theme }) =>
    `url(${theme.bg.threeCircle.src}) no-repeat left top, ${theme.colors.secLightPeach}`};
  h3 {
    color: ${({ theme }) => theme.colors.pryPeach};
  }
  p,
  a {
    color: ${({ theme }) => theme.colors.pryBlack};
  }

  p:first-child {
    font-weight: ${({ theme }) => theme.weight.mid};
  }

  @media (min-width: 500px) {
    background: ${({ theme }) =>
      `url(${theme.bg.twoCircle.src}) no-repeat left bottom, ${theme.colors.secLightPeach}`};
    padding: 88px 95px;
  }
  @media (max-width: 768px) {
    padding: 88px 74px;
  }

  @media (max-width: 500px) {
    flex: 1;
    text-align: center;
  }
`

export const Map = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    height: 320px;
  }
`

export const MapFrame = styled.iframe`
  border: none;
  width: 100%;
  height: 100%;

  border-radius: ${({ theme }) => theme.bRadius};
  @media (max-width: 768px) {
    min-height: 320px;
  }
  @media (max-width: 500px) {
    border-radius: 0;
  }
`

export const AddressWrap = styled.div``
export const ContactWrap = styled.div``
export const Address = styled.p``
export const Contact = styled.a`
  display: block;
`
export const ContactHeader = styled.p``
export const ContactContainer = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 24px;
  @media (max-width: 500px) {
    flex-direction: column;
    gap: 20px;
  }
`
