import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
  background-color: green;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px 0px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 12px 25px 16px 0px;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding-top: 0px;
    padding-bottom: 20px;
  }

  @media screen and (max-width: 599px) {
    display: none;
    padding-top: 8px;
  }
`;

export const MobileLogoContainer = styled(Link)`
  height: 100%;
  width: 40px;
  padding: 0px 25px 20px 0px;

  @media screen and (min-width: 600px) {
    display: none;
  }
`;

export const ShopName = styled.div`
    display: flex;
    font-size: 18px;
    color: white;
    align-items: center;

    @media screen and (max-width: 1000px) {
        font-size: 16px;
    }

    @media screen and (max-width: 600px) {
        font-size: 14px;
    }
`;