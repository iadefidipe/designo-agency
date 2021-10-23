import React from "react"
import {
  CtaContainer,
  CtaDiv,
  CtaHeader,
} from "../styles/component-styles/Cta.style"
import { ctaData } from "../data/ctaData"
import Button from "./Button"

const Cta = () => {
  return (
    <CtaContainer bg={ctaData.bg}>
      <CtaDiv>
        <CtaHeader>{ctaData.header}</CtaHeader>
        <p>{ctaData.subHeader}</p>
      </CtaDiv>

      <CtaDiv>
        <Button
          color={"dark"}
          text={ctaData.button.title}
          link={ctaData.button.link}
        />
      </CtaDiv>
    </CtaContainer>
  )
}

export default Cta
