import styled from "styled-components";

export const AuthenticationContainer = styled.div`
    display: flex;
    width: 900px;
    justify-content: space-around;
    margin: 30px auto;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        width: 80%;
    }
`;