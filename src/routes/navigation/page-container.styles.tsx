import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const ContentWrapper = styled.div`
  padding: 20px 60px 0px;
  flex: 1;

  @media screen and (max-width: 800px) {
    padding: 20px 24px 0px;
  }

  @media screen and (max-width: 800px) {
    padding: 20px 24px 0px;
  }

  @media screen and (max-width: 400px) {
    padding: 20px 16px 0px;
  }
`;
