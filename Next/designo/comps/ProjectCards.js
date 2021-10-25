import icon from "../public/assets/shared/desktop/icon-right-arrow.svg"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import {
  CardContainer,
  CardCta,
  CardHeader,
} from "../styles/component-styles/ProjectCard.style"

const ProjectCards = ({ header, link, cta, image }) => {
  return (
    <>
      <Link href={`/portfolios/${link}`} passHref>
        <CardContainer image={image}>
          <div>
            <CardHeader> {header} </CardHeader>
            <CardCta>
              {" "}
              {cta}{" "}
              <span>
                {" "}
                <Image src={icon} alt='' />{" "}
              </span>{" "}
            </CardCta>
          </div>
        </CardContainer>
      </Link>
    </>
  )
}

export default ProjectCards
