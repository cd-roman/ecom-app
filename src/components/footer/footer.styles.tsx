import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
  background-color: #222222;
  padding-left: 0;
  padding-right: 0;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: -40px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px 0px;
    margin-bottom: -60px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 20px 0px;
  margin-left: 48px;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding-top: 0px;
    padding-bottom: 20px;
    margin-left: 18px;
  }

  @media screen and (max-width: 599px) {
    display: none;
  }
`;

export const MobileLogoContainer = styled(Link)`
  height: 100%;
  width: 40px;
  margin-left: 18px;

  @media screen and (min-width: 600px) {
    display: none;
  }
`;

export const ShopName = styled.div`
    display: flex;
    font-size: 18px;
    color: white;
    align-items: center;
    padding: 20px 0px;
    margin-right: 48px;

    @media screen and (max-width: 1000px) {
        font-size: 16px;
    }

    @media screen and (max-width: 800px) {
      margin-right: 18px;
    }

    @media screen and (max-width: 600px) {
        font-size: 14px;
    }
`;