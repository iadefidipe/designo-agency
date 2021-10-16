import React from 'react'
import { AboutImage, AboutSection, ImageDiv, InnerDiv, ns, StyledAbout } from '../styles/styled-components/page style/about.style'
import data from '../data/aboutData'

const about = () => {
    return (
        <StyledAbout>
            <AboutSection>

                <InnerDiv>
                    <h1>{data.sectionOne.header}</h1>
                    <p>{data.sectionOne.content.p1}</p>
                </InnerDiv>

                <ImageDiv>
                    
                    <AboutImage src={data.sectionOne.image.imgDesktop} alt={data.sectionOne.image.imgAlt} srcset={`${data.sectionOne.image.imgMobile} 400w, ${data.sectionOne.image.imgTablet} 768w, ${data.sectionOne.image.imgDesktop} 1440w`} layout='fill'   />
                </ImageDiv>

                

            </AboutSection>
        </StyledAbout>
    )
}

export default about
