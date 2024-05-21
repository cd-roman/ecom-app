import {
  FooterContainer,
  FooterContent,
  LogoContainer,
  MobileLogoContainer,
  ShopName,
} from "./footer.styles";

import { ReactComponent as GlitzyLogoWhite } from "../../assets/glitzy-logo-white.svg";
import { ReactComponent as GlitzyIcon } from "../../assets/glitzy-icon.svg";

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
