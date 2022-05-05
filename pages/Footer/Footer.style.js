import styled from "styled-components";

const FooterWrapper = styled.div`
  background-color: #3b3361;
  color: white;
  display: flex;
  margin-top: 510px;
`;

export const ImageWrapper = styled.div`
  padding-left: 75px;
  display: flex;
  justify-content: flex-start;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 160px;
`;

export const Text = styled.h2`
  width: 285px;
  height: 60px;
  font-size: 20px;
  padding: 30px;
`;

export const TextC = styled.h2`
  padding-left: 30px;
  height: 20px;
  font-size: 14px;
  display: flex;
  align-items: flex-end;
`;

export default FooterWrapper;
