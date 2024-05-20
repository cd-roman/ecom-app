import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 36px 0px 60px;
  align-items: center;
  align-content: center;
  margin: 0;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px 0px 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 40px;
  width: 136px;

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

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 60px 10px 0px;
  cursor: pointer;

  &:hover {
    color: #357ae8;
  }

  @media screen and (max-width: 800px) {
    padding-right: 32px;
  }

  @media screen and (max-width: 400px) {
    padding-right: 20px;
    font-size: 16px;
  }
`;
