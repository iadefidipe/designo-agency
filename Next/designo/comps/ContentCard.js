import React, { useState, useEffect } from "react"
import {
  CardContainer,
  CardContent,
  ContentWrap,
  ImageContainer,
  ImageWrap,
  CardImage,
} from "../styles/component-styles/ContentCard.style"

const ContentCard = ({ data, light, reverse, hero }) => {
  const [size, setSize] = useState(1000)

  const checkSize = () => {
    setSize(window.innerWidth)
  }

  //TODO: Monitor the screen size to enable image responsiveness
  useEffect(() => {
    window.addEventListener("resize", checkSize)
    return () => {
      window.removeEventListener("resize", checkSize)
    }
  })

  return (
    <>
      {data && (
        <CardContainer hero={hero} light={light} reverse={reverse}>
          <CardContent light={light} reverse={reverse}>
            <ContentWrap light={light} reverse={reverse}>
              <h1>{data.header}</h1>
              <p>{data.content.p1}</p>
              <p>{data.content.p2}</p>
            </ContentWrap>
          </CardContent>

          <ImageContainer light={light} reverse={reverse}>
            <ImageWrap light={light} reverse={reverse}>
              {size <= 375 && (
                <CardImage
                  light={light}
                  reverse={reverse}
                  src={data.image.imgMobile}
                  alt={data.image.imgAlt}
                  layout='fill'
                ></CardImage>
              )}
              {size > 372 && size <= 768 && (
                <CardImage
                  light={light}
                  reverse={reverse}
                  src={data.image.imgTablet}
                  alt={data.image.imgAlt}
                  layout='fill'
                ></CardImage>
              )}
              {size > 768 && (
                <CardImage
                  light={light}
                  reverse={reverse}
                  src={data.image.imgDesktop}
                  alt={data.image.imgAlt}
                  layout='fill'
                ></CardImage>
              )}
            </ImageWrap>
          </ImageContainer>
        </CardContainer>
      )}
    </>
  )
}

export default ContentCard

{
  /* <>
{data && (
  <ContentContainer gap={gap}>
    <ContentWrap reverse={reverse} light={light}>
      <Content light={light}>
        <ContentHeader>{data.header}</ContentHeader>
        <ContentText>{data.content.p1}</ContentText>
        <ContentText>{data.content.p2}</ContentText>
      </Content>
      <ContentImageWrap>
        {size <= 372 && (
          <ContentImage
            src={data.image.imgMobile}
            alt={data.image.imgAlt}
          ></ContentImage>
        )}
        {size > 372 && size <= 720 && (
          <ContentImage
            src={data.image.imgTablet}
            alt={data.image.imgAlt}
          ></ContentImage>
        )}
        {size > 720 && (
          <ContentImage
            src={data.image.imgDesktop}
            alt={data.image.imgAlt}
          ></ContentImage>
        )}
      </ContentImageWrap>
    </ContentWrap>
  </ContentContainer>
)}
</> */
}
