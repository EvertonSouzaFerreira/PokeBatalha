import styled from "styled-components";

import pokebola from '../../imgs/pokebola.png'


export const Modal = styled.div`
    width: 100%;
    height: 100%;
    z-index: 2;
    display: block;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0, .8);
`;

export const ContainerTelaVencedor = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-radius: 1rem;
    color: white;
    width: 240px;
    min-width: 100px;
    border: solid 1px black;
    min-width: 200px;
    height: 210px;
    background: ${props => props.color};
    
`;

export const ContainerButtonImg = styled.div`
    display: flex;
    margin-bottom: 1rem;
    flex-direction: column-reverse;
    align-items: center;
    background-image: url(${pokebola});
    background-repeat: no-repeat;
    background-size: right;
    background-position: center;
    width: 50%;
`;

export const ImgPokemon = styled.img`
    position:absolute;
    width: 93px;
    height: 93px;
    bottom: 50%;
    top: 50%;
    right: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;


export const Button = styled.button`
    width: 146px;
    height: 38px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 10px;
    background: #FFFFFF;
    border-radius: 8px;
`;