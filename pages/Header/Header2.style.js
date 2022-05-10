import styled from "styled-components";

const HeaderWrapper = styled.div``;

export const WrapperImage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  a {
    display: flex;
    flex-direction: row;
  }
`;

export const WrapperTitle = styled.div`
  background-color: #2a3985;
  color: white;
  display: flex;
  flex-direction: row;
`;

export const ContainerMenu = styled.div``;

export const Title = styled.h2`
  color: white;
  padding-left: 40px;
`;

export const Text = styled.h2`
  padding-right: 10px;
`;

export default HeaderWrapper;
