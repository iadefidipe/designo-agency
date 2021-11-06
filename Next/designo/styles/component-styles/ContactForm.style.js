import styled, { css } from "styled-components"

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;

  input,
  textarea {
    flex: 1;
    border: none;
    width: 100%;
    background: transparent;
    color: ${({ theme }) => theme.colors.pryWhite};
    font-size: 15px;
    padding: 11px;

    &:focus,
    &::selection {
      outline: none;
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.secLightGrey};
      font-weight: ${({ theme }) => theme.weight.mid};
    }

    @media (max-width: ${({ theme }) => theme.queries.tablet}) {
      flex-direction: column;
      width: 100%;
    }
    @media (max-width: ${({ theme }) => theme.queries.deskMid}) {
      border-bottom: 1px solid ${({ theme }) => theme.colors.pryWhite};
  }
  }
`
export const Error = styled.div`
  flex: 1;
  font-size: 12px;
`
export const FormInput = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.pryWhite};

  @media (max-width: ${({ theme }) => theme.queries.deskMid}) {
    display: block;
    border-bottom: none;
  }
`

export const FormButton = styled.button`
  align-self: flex-end;
  border: none;
  width: 152px;
  height: 56px;
  text-align: center;
  border-radius: 8px;
  text-transform: uppercase;
  font-size: 0.9375rem;
  font-weight: ${({ theme }) => theme.weight.mid};
  letter-spacing: 1px;
  transition: all 250ms ease-in-out;
  color: ${({ theme }) => theme.colors.pryBlack};
  background: ${({ theme }) => theme.colors.pryWhite};

  &:hover {
    color: ${({ theme }) => theme.colors.pryWhite};
    background: ${({ theme }) => theme.colors.secPeach};
  }
  @media (max-width: ${({ theme }) => theme.queries.mobileL}) {
    align-self: center;
  }
`

export const HiddenLabel = styled.label`
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important;
`
// export const Notification = styled.div`
//   width: 200px;
//   height: 80px;
//   background-color: ${ ({theme}) => theme.n };
// `
