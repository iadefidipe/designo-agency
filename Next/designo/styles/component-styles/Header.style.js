import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px auto;
    max-width: ${ ({theme}) => theme.maxWidth };
    padding: ${ ({theme}) => theme.genPad } ;

    

    & nav {
        display: flex;
        color: ${ ({theme}) => theme.colors.pryBlack};
    }

    @media (max-width: ${({theme}) => theme.queries.tablet}) { 
        & > nav {
            display: none;
        }
    }
`

export const  StyledHamburger = styled.div`
    display: none;

    @media (max-width: ${({theme}) => theme.queries.tablet}) {

        display: block;
    }
`