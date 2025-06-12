import {
  FooterContainer,
  FooterContent,
  LogoContainer,
  MobileLogoContainer,
  ShopName,
} from "./footer.styles";

import GlitzyLogoWhite from "../../assets/glitzy-logo-white.svg?react";
import GlitzyIcon from "../../assets/glitzy-icon.svg?react";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <LogoContainer to="/">
          <GlitzyLogoWhite />
        </LogoContainer>
        <MobileLogoContainer to="/">
          <GlitzyIcon />
        </MobileLogoContainer>
        <ShopName>Glitzy Shop, {new Date().getFullYear()}</ShopName>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
