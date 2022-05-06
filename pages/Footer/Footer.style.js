import styled from "styled-components";

const FooterWrapper = styled.div`
  background-color: #3b3361;
  color: white;
  display: flex;  
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
`;

/*export const TextWrapper = styled.div`
  min-width: 285px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;*/

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`;

export const Text = styled.h2`
  height: 60px;
  font-size: 20px;
`;

export default FooterWrapper;
