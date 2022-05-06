import styled from "styled-components";

const WrapperContent = styled.div``;

export const WrapperContentLeft = styled.div`
  img {
    width: 280px;
    display: flex;
    justify-content: center;
  }
`;

export const WrapperImageTop = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const WrapperImageBottom = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  align-items: flex-end;
`;

export const Text = styled.p`
  font-size: 28px;
  text-align: center;
  margin: 10px;
`;

export const Button = styled.div`
  background-color: #5e3f8e;
  color: white;
  border-radius: 20px;
  width: 300px;
  height: 200px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  margin-right: 20px;
`;

export const WrapperButton = styled.div`
  display: flex;
  filter: drop-shadow(3px 4px 4px rgba(90, 58, 140, 0.5));
`;

export const WrapperContentRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const WrapperContentMiddle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`;

export default WrapperContent;
