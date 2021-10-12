import React from 'react'
import { CardContainer, CardContent, CardImage, InnerDiv } from '../styles/styled-components/QualitiesCard.style'

const QualitiesCard = ({src,alt,header,des, bg}) => {
    return (
        <CardContainer>

            <InnerDiv bg={bg}>
                <CardImage src={src} alt={alt} />

            </InnerDiv>

            

            <CardContent>
                <h3>{header}</h3>
                <p>{des}</p>
            </CardContent>

        </CardContainer>
    )
}

export default QualitiesCard
