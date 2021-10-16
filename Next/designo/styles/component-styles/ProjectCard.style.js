import styled from "styled-components"


export const CardContainer = styled.div`
    display: grid;
    place-content: center;
    place-items: center;
    text-transform: uppercase;
    text-align: center;
    background: url(${({image}) => image.src}) no-repeat ;
    background-size: cover;
    border-radius: 15px;
    padding: 20px 0;
    
`

export const CardHeader = styled.h2`
    
`
export const CardCta = styled.a`
    
`