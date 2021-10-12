import icon from "../public/assets/shared/desktop/icon-right-arrow.svg"
import Image from 'next/image'
import Link from 'next/link'

import React from 'react'
import { CardContainer, CardCta, CardHeader } from '../styles/styled-components/ProjectCard.style'



const ProjectCards = ({header,link,cta,image}) => {
    return (
        <Link href={link} passHref ><CardContainer image={image} >
            
        
            <CardHeader  > {header} </CardHeader>

            <CardCta> {cta} <span> <Image src={icon} alt="" /> </span> </CardCta> 
        </CardContainer></Link>
        
    )
}

export default ProjectCards
