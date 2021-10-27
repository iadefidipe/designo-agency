import styled from 'styled-components'

export const CtaContainer = styled.div`
 
 background: url(${ ({bg}) => bg.src }) no-repeat right center;
 background-color:  ${ ({theme}) => theme.colors.pryPeach };

 border-radius: 15px;
 width: 100%;
 min-height: 292px;
 padding: 20px 95px;
 display: flex;
 align-items: center;

 @media (max-width: ${ ({theme}) => theme.queries.deskMini } ){
     flex-direction: column;
     justify-content: center;
     text-align: center;
    padding: 57px 0;
    gap: 32px;

 }
`

export const CtaHeader = styled.h2`
width: 70%;
`

export const CtaDiv = styled.div`
color: ${ ({theme}) => theme.colors.pryWhite };

 &:first-child{
     
     flex: 1.1;
     display: flex;
    flex-direction: column;
    gap: 1rem;
     

    @media (max-width: ${ ({theme}) => theme.queries.deskMini } ){
        
        justify-content: center;
        align-items: center;
        h2{
            width: 50%;
        }

        p{
            width: 70%;
        }
    }

    @media (max-width: ${ ({theme}) => theme.queries.mobile } ){
        h2,p{
            width: 100%;
        }
    }
 }

 &:last-child{
     
     flex: 1;
     display: grid;
     place-content: end;
     
 }
`
