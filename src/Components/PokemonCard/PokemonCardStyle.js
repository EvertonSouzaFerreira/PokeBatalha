import styled from "styled-components";
import pokebola from "../../imgs/pokebola.png";

export const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  height: 70vh;
  padding: 0.5rem;
  gap: 2.5rem 1rem;
`;

export const ContainerCard = styled.div`
  position: relative;
  display: flex;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 1rem;
  color: white;
  width: 100%;
  min-width: 300px;
  border: solid 1px black;
  min-width: 200px;
  height: 100px;

  background: ${(props) => props.color};
  background-image: url(${pokebola});
  background-repeat: no-repeat;
  background-position: right;
`;

export const ContainerType = styled.div`
  display: flex;
  gap: 0.1rem;
`;

export const CardType = styled.img`
  width: 50%;
  min-width: 65px;
  height: 25px;
`;

export const ImgPokemon = styled.img`
  position: absolute;
  width: 40%;
  height: 90%;
  bottom: 50px;
  right: 0px;
`;

export const ContainerInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ContainerNameId = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const ContainerButtonImg = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;

  background-size: right;
  background-position: center;
  width: 100%;
`;

export const Button = styled.button`
  width: 100%;
  max-width: 60px;
  height: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background: #ffffff;
  border-radius: 8px;
`;
