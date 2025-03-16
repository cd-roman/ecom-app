import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: 20px;
  text-align: center;
`;

export const NotFoundTitle = styled.h1`
  font-size: 120px;
  margin-bottom: 24px;
  
  @media screen and (max-width: 800px) {
    font-size: 80px;
  }
`;

export const NotFoundSubtitle = styled.p`
  font-size: 24px;
  margin-bottom: 24px;
  max-width: 600px;
  
  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
`;

export const NotFoundText = styled.p`
  font-size: 18px;
  margin-bottom: 32px;
  max-width: 600px;
  
  @media screen and (max-width: 800px) {
    font-size: 16px;
  }
`;
