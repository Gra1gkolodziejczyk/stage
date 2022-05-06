import styled from "styled-components";

const WrapperContent = styled.div``;

export const WrapperInscription = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 250px 0 0 0 ;
`;
export const Title = styled.h2`
    font-size: 20px;

`;
export const Subtitle = styled.h4`
    font-size: 17px;
`;
export const WrapperInput = styled.div`
    input {
        height: 50px;
        width: 500px;
        border-radius: 10px;
    }
`;
export const WrapperButton = styled.div``;

export const Button = styled.button`
    background-color: #2A3985;
    border-radius: 30px;
    width: 200px;
`;
export const Text = styled.p`
    color: white;
`;

export default WrapperContent;