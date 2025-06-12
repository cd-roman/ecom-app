import { PageContainer, ContentWrapper } from "./page-container.styles";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutStart } from "../../store/user/user.action";

import GlitzyLogo from "../../assets/glitzy-logo.svg?react";
import GlitzyIcon from "../../assets/glitzy-icon.svg?react";

import Footer from "../../components/footer/footer.component";

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
  MobileLogoContainer,
} from "./navigation.styles";

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());

  return (
    <PageContainer>
      <ContentWrapper>
        <NavigationContainer>
          <LogoContainer to="/">
            <GlitzyLogo className="logo" />
          </LogoContainer>
          <MobileLogoContainer to="/">
            <GlitzyIcon className="logo" />
          </MobileLogoContainer>
          <NavLinks>
            <NavLink to="/shop">SHOP</NavLink>

            {currentUser ? (
              <NavLink as="span" to="" onClick={signOutUser}>
                SIGN OUT
              </NavLink>
            ) : (
              <NavLink to="/auth">SIGN IN</NavLink>
            )}
            <CartIcon />
          </NavLinks>
          {isCartOpen && <CartDropdown />}
        </NavigationContainer>
        <Outlet />
      </ContentWrapper>
      <Footer />
    </PageContainer>
  );
};

export default Navigation;
