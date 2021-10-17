import styled from "styled-components";


export const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    gap: 2.625rem;

    &> a{
        font-size: 0.875rem;
        text-transform: uppercase;
        letter-spacing: 2px;
        border-bottom: 1px solid none;

        &:hover{
            border-bottom: ${ ({theme}) => `1px solid ${theme.colors.pryBlack}`};

        }
    }
`