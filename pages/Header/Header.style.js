import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: "row";
  align-items: center;
  justify-content: space-between;
`;

export const ImgWrapperLeft = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: 110px;
`;

export const ImgWrapperRight = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 10px;
`;

export const Text = styled.h2`
  font-size: 20px;
  padding-right: 84px;
  margin-top: 10px;
`;

export const ContainerMenu = styled.div`
  background-color: #2a3985;
`;
export const WrapperTitle = styled.div`
  display: flex;
  align-items: flex-start;
`;
export const Title = styled.div`
  color: #ffff;
  font-size: 20px;
  margin: 17px 53px 17px 48px;
`;

export default HeaderWrapper;
