import styled from "styled-components";


export const ContainerSquares = styled.div`
    width: 100%;
    height: 100%;
    position: sticky;
    top: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 22;
`;

export const VsImg = styled.img`
    width: 100px;
    height: 100px;
    position: absolute;
    z-index: 5;
`;

export const Square1 = styled.div`
    width: 72%;
    height: 100%;
    left: 0;
    display: block;
    position: absolute;
    clip-path: polygon(0 0, 100% 0%, 40% 100%, 0% 100%);
    background: ${props => props.color};
`;

export const Square2 = styled.div`
    width: 72%;
    height: 100%;
    right: 0;
    position: absolute;
    clip-path: polygon(60% 0%, 100% 0%, 100% 100%, 0% 100%);
    background: ${props => props.color};
`;


export const SquareImg1 = styled.img`
    width: 50%;
    height: 50%;
    z-index: 1;
`;

export const SquareImg2 = styled.img`
    width: 50%;
    height: 50%;
    z-index: 1;
`;