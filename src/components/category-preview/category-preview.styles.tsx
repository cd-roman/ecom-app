import styled from "styled-components";

import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  h2 {
    text-align: center;
  }

  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;

export const Title = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    font-size: 24px;
  }
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  width: 100%;

  @media screen and (max-width: 980px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 15px;
    grid-row-gap: 25px;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-row-gap: 25px;
  }
`;
