import styled from "styled-components";

export const CategoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    @media screen and (max-width: 800px) {
        align-items: center;
    }
`;

export const CategoryItemsPreview = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 50px;

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 15px;
        grid-row-gap: 25px;
      }
    
      @media screen and (max-width: 500px) {
        grid-template-columns: 1fr;
        grid-row-gap: 25px;
      }
`;

export const CategoryTitle = styled.h2`
    
    font-size: 36px;
    margin-bottom: 25px;
    text-align: center;

    @media screen and (max-width: 500px) {
        font-size: 28px;
    }
`;