import styled from "styled-components";

export const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.colors.pryBlack};
  padding: 144px 0 50px;
`;
export const FooterContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.genPad};

  & nav {
    color: ${({ theme }) => theme.colors.pryWhite};

    &:hover {
      border-bottom: none;
    }
  }

  & > * {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: ${({theme}) => theme.queries.tablet}) {
    text-align: center;
    padding: 166px 0 50px;

    & > *,
    & nav {
      flex-direction: column;
    }

    & nav {
      padding-top: 31px;
    }
  }

  @media (max-width: ${({theme}) => theme.queries.mobile}) {
    padding: 235px 0 50px;
  }
`;

export const FooterHeader = styled.div`
  align-items: center;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.secDarkGrey}`};
  padding: 30px 0;

  @media (max-width: ${({theme}) => theme.queries.tablet}) {
    border-bottom: none;

    & > div {
      width: 100%;
      padding-bottom: 20px;
      border-bottom: ${({ theme }) => `1px solid ${theme.colors.secDarkGrey}`};
    }
  }
`;

export const FooterContent = styled.div`
  color: ${({ theme }) => theme.colors.secLightGrey};
  margin-top: 31px;

  @media (max-width: ${({theme}) => theme.queries.tablet}) {
    gap: 40px;
  }
`;

export const FooterAddress = styled.div`
  & p:first-child {
    font-weight: ${({ theme }) => theme.weight.mid};
  }
`;

export const FooterContact = styled.div`
  & p {
    font-weight: ${({ theme }) => theme.weight.mid};
  }
`;

export const FooterSocial = styled.div`
  align-self: flex-end;
  display: flex;
  gap: 16px;

  @media (max-width: ${({theme}) => theme.queries.tablet}) {
    align-self: center;
  }
`;
