import { Fragment } from 'react';

import { FooterContainer, LogoContainer, MobileLogoContainer, ShopName } from './footer.styles';

import { ReactComponent as GlitzyLogo } from '../../assets/glitzy-logo.svg';
import {ReactComponent as GlitzyIcon} from '../../assets/glitzy-icon.svg';

const Footer: React.FC = () => {
    return (
        <Fragment>
            <FooterContainer>
                <LogoContainer to="/">
                    <GlitzyLogo />
                </LogoContainer>
                <MobileLogoContainer to="/">
                    <GlitzyIcon />
                </MobileLogoContainer>
                <ShopName>
                    Glitzy Shop, {new Date().getFullYear()}
                </ShopName>
            </FooterContainer>
        </Fragment>
    );
};

export default Footer;
