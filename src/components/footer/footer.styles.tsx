import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  height: 80px;
  margin-top: 80px;
  background-color: #222222;
  width: 100%;
  padding: 0px 60px;

  @media screen and (max-width: 800px) {
    padding: 0px 24px;
  }

  @media screen and (max-width: 400px) {
    padding: 0px 16px;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const LogoContainer = styled(Link)`
  align-content: center;
  height: 100%;

  @media screen and (max-width: 800px) {
    align-content: center;
  }

  @media screen and (max-width: 599px) {
    display: none;
  }
`;

export const MobileLogoContainer = styled(Link)`
  align-content: center;
  height: 100%;
  width: 40px;

  @media screen and (min-width: 600px) {
    display: none;
  }
`;

export const ShopName = styled.div`
  font-size: 18px;
  color: white;
  align-content: center;

  @media screen and (max-width: 1000px) {
    font-size: 16px;
  }

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;
