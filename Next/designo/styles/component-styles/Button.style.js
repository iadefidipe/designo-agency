import styled from "styled-components"

export const StyledButton = styled.button`
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
  color: ${({ theme, color }) =>
    color === "dark" ? theme.colors.pryBlack : theme.colors.pryWhite};
  background: ${({ theme, color }) =>
    color === "dark" ? theme.colors.pryWhite : theme.colors.pryPeach};

  &:hover {
    color: ${({ theme }) => theme.colors.pryWhite};
    background: ${({ theme }) => theme.colors.secPeach};
  }
`
