import styled from "styled-components";

export const StyledMenu = styled.div`



    @media (min-width: ${({theme}) => theme.queries.tablet}) {
        display: none;
    }

   

    @media (max-width: ${({theme}) => theme.queries.tablet}) {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 105px;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1000;


        & > div {
            padding: ${ ({theme}) => theme.genPad } ;
            background: ${ ({theme}) => theme.colors.pryBlack};
            height: 235px;
        }

        & nav {
            padding: 50px 0;
            flex-direction: column;
            align-items: flex-start;
            color: ${ ({theme}) => theme.colors.pryWhite};
            font-size: 1.5rem;
        }
    }
` 