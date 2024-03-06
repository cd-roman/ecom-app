import styled from "styled-components";

export const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;

    h2 {
        margin: 10px 0;
    }

    @media screen and (max-width: 1000px) {
        margin-top: 80px;
    }

    @media screen and (max-width: 600px) {
        width: 80%;
        margin-top: 40px;
        
        h2 {
            font-size: 24px;
        }

        span {
            font-size: 16px;
        }
    }
`;