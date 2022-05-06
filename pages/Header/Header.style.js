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
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const ImgWrapperRight = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const Text = styled.h2`
  font-size: 20px;
  padding-right: 84px;
  margin-top: 10px;
  font-family: "Lato";
`;

export const ContainerMenu = styled.div`
  background-color: #2a3985;
`;
export const WrapperTitle = styled.div`
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Title = styled.div`
  color: #ffff;
  font-size: 20px;
  font-family: "Lato";
  padding-left: 80px;
`;

export default HeaderWrapper;
