import styled from "styled-components";

export const SignInContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;

    h2 {
        margin: 10px 0;
    }

    @media screen and (max-width: 600px) {
        width: 80%;

        h2 {
            font-size: 24px;
        }

        span {
            font-size: 16px;
        }
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 600px) {
        flex-direction: column;

        button {
            margin-bottom: 20px;
        }
    }
`;