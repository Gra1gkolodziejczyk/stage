import styled from "styled-components";

const WrapperTitle = styled.div`
  display: flex;
  justify-content: center;
`;

export const WrapperTop = styled.div`
  background: #f2bf3d;
  border-radius: 30px;
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
`;
export const TitleTop = styled.h2`
  color: white;
  font-size: 20px;
`;
export const TitleColor = styled.h2`
  color: #2a3985;
`;

export const Title = styled.h2`
  padding-left: 30px;
  font-size: 20px;
`;

export const Text = styled.p`
  font-size: 20px;
`;

export const TextAjout = styled.h2`
  font-size: 15px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const WrapperAll = styled.div`
  background-color: white;
  width: 1700px;
  height: 700px;
  border-radius: 30px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const WrapperProgression = styled.div`
  padding-left: 250px;
`;

export const WrapperImp = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Divider = styled.div`
  background-color: #2a3985;
  width: 1000px;
  height: 2px;
`;

export const WrapperContent = styled.div`
  padding-left: 50px;
`;

export const WrapperMenuDeroulant = styled.div`
  display: flex;
  flex-direction: row;
  input {
    background: #f0efe9;
    font-size: 20px;
    padding-left: 30px;
    border: none;
    border-radius: 30px;
    width: 700px;
    height: 70px;
    margin-left: 30px;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

//export const WrapperInput = styled.div``;

export const WrapperDate = styled.div`
  display: flex;
  flex-direction: row;
  input {
    background: #f0efe9;
    font-size: 20px;
    padding-left: 30px;
    border: none;
    border-radius: 30px;
    width: 200px;
    height: 70px;
    margin-left: 30px;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const ButtonLink = styled.button`
  color: white;
  background: #2a3985;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  width: 200px;
  dislpay: flex;
  justify-content: center;
  align-items: center;
  margin: 25px;
`;
export const WrapperCoche = styled.div`
  box-sizing: border-box;
`;

export const WrapperDuCoche = styled.div``;

export const WrapperAjout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 150px;
`;

export default WrapperTitle;
