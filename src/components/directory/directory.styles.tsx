import styled from "styled-components";

export const DirectoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 16px;

  & > :nth-child(n) {
    grid-column: span 2;
  }

  & > :nth-child(n + 4) {
    grid-column: span 3;
  }


  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);

    & > :nth-child(n) {
      grid-column: span 1;
    }

    & > :nth-child(5) {
      grid-column: span 2;
    }
  }


  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);

    & > :nth-child(n) {
      grid-column: span 1;
    }

    & > :nth-child(5) {
      grid-column: span 2;
    }
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));

    & > :nth-child(n) {
      grid-column: span 1;
    }
  }
`;