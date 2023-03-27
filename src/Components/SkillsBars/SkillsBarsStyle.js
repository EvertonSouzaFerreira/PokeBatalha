import styled, { keyframes } from "styled-components";

export const ContainerBar = styled.div`
  position: relative;
  width: 100%;
`;

export const TitleText = styled.h6`
  text-align: center;
  font-size: 5px;
`;

export const ContainerSkills = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const TitleSkill = styled.span`
  display: block;
  font-size: 10px;
  font-weight: 100;
  color: #333;
`;

export const SkillBar = styled.div`
  width: 100%;
  height: 4px;
  border-radius: 6px;
  /* margin-top: 6px; */
  background: rgba(0, 0, 0, 0.1);
`;

const progress = keyframes`
   0% {
    width: 0;
    opacity: 1;
   }
   100%{
    opacity: 1;
   }
`;

export const Skill = styled.span`
  position: relative;
  display: block;
  height: 100%;
  width: ${(props) => (props.width >= 100 ? 100 : props.width + "%")};
  border-radius: 6px;
  background: ${(props) => props.color};
  animation: ${progress} 0.4s ease-in-out forwards;
  opacity: 0;
`;

export const Tooltip = styled.span`
  & {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10px;
    width: 10px;
    position: absolute;
    right: -14px;
    top: -20px;
    font-size: 9px;
    font-weight: 500;
    color: #fff;
    padding: 2px 6px;
    border-radius: 3px;
    background-color: crimson;
    z-index: 1;
  }
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -2px;
    height: 5px;
    width: 5px;
    z-index: -1;
    background: crimson;
    transform: translateX(-50%) rotate(45deg);
  }
`;
