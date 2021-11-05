import styled from "styled-components";
import Image from "next/image";

export const ListContainer = styled.div`
  display: flex;
  margin: ${({ theme }) => theme.genPad};
  justify-content: space-between;
  gap: 20px;

  @media (max-width: ${({theme}) => theme.queries.tablet}) {
    flex-direction: column;
    gap: 32px;
  }
`;

export const ListWrap = styled.div`
  display: grid;
  place-items: center;
  gap: 32px;

  h3 {
    color: ${({ theme }) => theme.colors.pryBlack};
    text-transform: uppercase;
  }
`;

export const ImageWrap = styled.div`
  background: url(${({ theme }) => theme.bg.smCircle.src}) no-repeat;
  @media (max-width: ${({theme}) => theme.queries.tablet}) {
    flex: 1;
  }
`;

export const ListImage = styled(Image)``;
