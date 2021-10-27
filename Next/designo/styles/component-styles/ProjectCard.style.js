import styled from "styled-components"


export const CardContainer = styled.div`
    
    background: url(${({image}) => image.src}) no-repeat ;
    background-size: cover;
    border-radius: 15px;
    &>div{
        height: 100%;
        display: grid;
        place-content: center;
        place-items: center;
        text-transform: uppercase;
        text-align: center;
        border-radius: 15px;
        &:hover{
            background-color: #e77f6a5c ;
        }        
    }   
`

export const CardHeader = styled.h2``
export const CardCta = styled.a``