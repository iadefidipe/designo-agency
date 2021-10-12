import styled from "styled-components";
import Image from 'next/image'

export const CardContainer = styled.div`
    

    @media (max-width:768px){
        display: flex;
        gap: 55px;
        align-items: center;

    }

    @media (max-width:500px), (min-width:768px){
        display: grid;
        place-items: center;
        gap: 48px;

    }

`

export const InnerDiv = styled.div`
background: url(${({bg}) => bg.src}) no-repeat ;
    @media (max-width:768px){
        flex:1;

    }

`

export const CardImage = styled(Image)`



`

export const CardContent = styled.div`

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
gap: 32px;

    @media (max-width:768px){
        flex:1.5;
        gap: unset;
        align-items: flex-start;
        justify-content: flex-start;
        text-align: left;

    }

    @media (max-width:500px), (min-width:768px){
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        gap: 32px;
    }


h3{
    text-transform: uppercase;
}


`