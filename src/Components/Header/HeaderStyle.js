import styled from "styled-components";

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  background: white;
  justify-content: space-between;
  height: 5vh;
  border: solid 1px black;
  padding: 0 1rem;
`;

export const ButtonPokedex = styled.button`
  width: 20%;
  height: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  color: white;
  border: none;
  border-radius: 8px;
  background: #33a4f5;
  padding: 4px 10px;
`;

export const Span = styled.span`
  width: 20%;
`;

export const PokemonImg = styled.img`
  width: 30%;
  max-width: 360px;
  max-height: 100%;
`;
