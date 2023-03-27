import styled from "styled-components";

import pokebola from "../../imgs/pokebola.png";

export const ContainerCardDetil = styled.div`
  position: relative;
  padding: 3px;
  display: flex;
  flex-direction: row-reverse;
  border-radius: 1rem;
  color: white;
  width: 100%;
  height: 85%;
  justify-content: space-between;
  align-content: center;
  border: solid 1px black;
  gap: 5px;
  background: ${(props) => props.color};
`;

// export const One = styled.div`
//     width: 282px;
//     height: 282px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background-color: white;
//     border-radius: 8px;
// `;
// export const ImgDetil = styled.img`
//     width: 10%;
// `;

// export const One2 = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background-color: white;
//     border-radius: 8px;
// `;
export const Two = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  align-items: center;
  position: relative;
  background-image: url(${pokebola});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  grid-column: 2;
  grid-row: 1 / 1;
`;
export const Three = styled.div`
  width: 100%;
  height: 100%;
  color: black;
  background-color: white;
  grid-column: 1;
  padding: 0 0.8rem;
  border-radius: 8px;
`;

export const ImgPokeDetil = styled.img`
  width: 18%;
  position: absolute;
  bottom: 10%;
  right: 10%;
  /* transform: skew(30deg, 20deg); */
  transform: scale(2);
`;

export const ContainerType = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

export const CardType = styled.img`
  width: calc(50% - 0.5rem);
  height: 20px;
`;

export const ContainerInfos = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const ContainerNameId = styled.div`
  display: flex;

  flex-direction: row;
  gap: 0.2rem;
`;

export const ContainerSkills = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 1px;
  background: #ffffff;
  border-radius: 8px;
`;

export const TituloSkills = styled.h5`
  color: black;
`;

export const ContainerMoves = styled.ul`
  display: flex;
  width: 100%;
  height: 15%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: auto;
  gap: 5px;
`;

export const Move = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  background: #ececec;
  border: 1px dashed rgba(0, 0, 0, 0.14);
  border-radius: 5px;
  color: black;
`;
