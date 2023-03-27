import styled, { keyframes } from "styled-components";
import campoDebatalhaImg from "../../imgs/telaDeBatalha/telaDeBatalha2.jpg";

export const ContainerBattle = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-size: 100% 80%;
  background-image: url(${campoDebatalhaImg});
  background-repeat: no-repeat;
`;

export const ContainerHpPlayers = styled.div`
  display: flex;
  width: 100%;
  height: 75%;
  /* padding: 1.5rem; */
  align-items: flex-start;
  justify-content: space-between;
`;

export const ContainerHpPlayer1 = styled.div`
  width: 50%;
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 8px;
  background-color: #f8f7d8;
  border: solid 3px black;
  border-radius: 1rem 4px 1rem 4px;
  box-shadow: 12px 12px 2px 1px rgba(0, 0, 0, 0.5);
`;

export const ContainerNomeLevel = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContainerHpBarra = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Hp = styled.p`
  width: 10%;
  height: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: red;
  font-weight: 200;
  font-size: 10px;
  border-radius: 6px 0 0 6px;
  margin-top: 6px;
  background: rgba(0, 0, 0, 0.3);
`;

export const SkillBar = styled.div`
  width: 70%;
  height: 10px;
  border-radius: 6px;
  margin-top: 6px;
  background: rgba(0, 0, 0, 0.1);
`;

const moveVertically = (move) => keyframes`
   100% {
    width: ${move};
    opacity: 1;

   }
   0%{
    
    opacity: 1;
   }
   
`;

export const Skill = styled.span`
  position: relative;
  display: block;
  height: 100%;
  /* width: 80%; */
  width: ${(props) => (props.tamanhoHp >= 100 ? 100 : props.tamanhoHp + "%")};
  border-radius: 6px;
  border: solid 3px black;
  background: #75f3ac;

  animation-duration: 1s;
  animation: ${(props) => moveVertically(props.tamanhoHp + "%")} 0.4s
    ease-in-out backwards;
  opacity: 1;
`;

export const ContainerHpPlayer2 = styled.div`
  width: 50%;
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 8px;
  background-color: #f8f7d8;
  border: solid 3px black;
  border-radius: 1rem 4px 1rem 4px;
  margin-top: auto;
  box-shadow: 12px 12px 2px 1px rgba(0, 0, 0, 0.5);
`;

export const ContainerMoves = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  background: #2a3136;
  padding: 8px;
  gap: 1px;
  z-index: 1;
`;

export const ContainerSkills = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  font-size: 10px;
  font-weight: 200;
  justify-content: space-around;
  align-items: center;
  background: #f1f3f4;
  border: solid 2px #6e6683;
  z-index: 1;
`;

export const ContainerType = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f1f3f4;
  border: solid 2px #6e6683;
  font-size: 10px;
  font-weight: 200;
  z-index: 1;
`;

const progress = keyframes`
   from {
    transform: translateX(100px);
   }
   to{
    transform: translateX(0);
   }
`;

const progress2 = keyframes`
   from {
    transform: translateX(-100px);
   }
   to{
    transform: translateX(0);
   }
`;

const damage = keyframes`
   from {
    opacity: 0;
   }
   to{
    opacity: 1;
   }
`;

export const AtaqueAnimacaoP1 = styled.img`
  width: 450px;
  height: 450px;
  position: absolute;
  left: 100px;
  bottom: 0px;
  animation: ${progress} 0.2s ease-in-out forwards;
`;
export const AtaqueAnimacaoP2 = styled.img`
  width: 200px;
  height: 200px;
  position: absolute;
  right: 100px;
  top: 80px;
  opacity: 1;
  animation: ${progress2} 0.2s ease-in-out backwards;
`;

export const PokemonPlay01 = styled.img`
  width: 300px;
  height: 300px;
  position: absolute;
  left: 10%;
  bottom: 0%;
  animation: ${progress} 0.2s ease-in-out forwards;
`;

export const PokemonPlay02 = styled.img`
  width: 150px;
  height: 150px;
  position: absolute;
  right: 10%;
  top: 40%;
  opacity: 1;
  animation: ${damage} 0.2s ease-in-out forwards;
`;

export const AtaqueSofrido = styled.img`
  width: 200px;
  height: 200px;
  position: absolute;
  right: 100px;
  top: 80px;
  opacity: 0;
  animation: ${damage} 0.2s ease-in-out forwards;
`;
