import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  @media screen and (max-width: 1400px) {
    width: 65%;
  }

  @media screen and (max-width: 1150px) {
    width: 75%;
  }

  @media screen and (max-width: 800px) {
    width: 80%;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;

  @media screen and (max-width: 800px) {
    font-size: 16px;
  }


  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }

  @media screen and (max-width: 1400px) {
    &:last-child {
      width: 10%;
    }
  }

  @media screen and (max-width: 1000px) {
    font-size: 16px;
  }

  @media screen and (max-width: 600px) {
    &:first-child {
      display: none;
    }

    &:last-child {
      width: auto;
    }
  }

  @media screen and (max-width: 400px) {
    font-size: 14px;
  }
`;

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;

  @media screen and (max-width: 800px) {
    font-size: 26px;
  }

  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
`;