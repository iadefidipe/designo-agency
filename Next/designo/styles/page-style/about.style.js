import styled from "styled-components";
import Image from "next/image";

export const StyledAbout = styled.div`
  /* padding: 100px 0; */
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 160px;
`;
