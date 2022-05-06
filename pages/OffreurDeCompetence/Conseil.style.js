import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 72.5vh;
`;

export const Conseils = styled.div``;

export const ConseilsCard = styled.div`
  display: flex;
  border: black 1px solid;
  border-radius: 20px;
  width: 30%;
  margin: 0 20px;
  margin-top: 5%;
  height: 400px;
`;

export const Text = styled.h2`
  display: flex;
  align-items: center;
  text-align: center;
`;

export const TextTop = styled.h2`
  margin: 10px 300px;
  padding: 10px 10px;
  color: white;
  border-radius: 20px;
  background-color: #f2bf3d;
`;

export const WrapperConseilsCard = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button``;

export default Container;
