import styled from "styled-components";

import { 
    BaseButton, 
    GoogleSignInButton, 
    InvertedButton
  } from "../../components/button/button.styles";

export const ButtonContainer = styled.div`
    ${BaseButton}, 
    ${GoogleSignInButton}, 
    ${InvertedButton} {
    margin-left: auto;
    margin-right: auto;
    }
`;