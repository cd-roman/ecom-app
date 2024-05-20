import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  algin-items: center;
  margin-top: 80px;
  background-color: #222222;
  padding: 0px;
  width: 100%;
  box-sizing: border-box;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px 0px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 20px 0px 0px 60px;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0px 0px 0px 20px;
  }

  @media screen and (max-width: 599px) {
    display: none;
  }
`;

export const MobileLogoContainer = styled(Link)`
  height: 100%;
  width: 40px;
  padding-left: 24px;

  @media screen and (min-width: 600px) {
    display: none;
  }
`;

export const ShopName = styled.div`
  display: flex;
  font-size: 18px;
  color: white;
  align-items: center;
  padding: 0px 60px 0px 0px;

  @media screen and (max-width: 1000px) {
    font-size: 16px;
  }

  @media screen and (max-width: 800px) {
    padding-right: 24px;
  }

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;
