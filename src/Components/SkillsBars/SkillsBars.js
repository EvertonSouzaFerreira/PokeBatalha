import React from "react";
import { getPokemonStatos } from "../../contents/statos";
import {
  ContainerBar,
  TitleText,
  ContainerSkills,
  TitleSkill,
  SkillBar,
  Skill,
  Tooltip,
} from "./SkillsBarsStyle";

function SkillsBars(props) {
  console.log(props.pokemonDetil.data.stats[1].base_stat);
  return (
    <ContainerBar>
      <TitleText>Base Stats</TitleText>
      <ContainerSkills>
        <TitleSkill>HP</TitleSkill>
        <SkillBar>
          <Skill
            width={props.pokemonDetil.data.stats[0].base_stat}
            color={getPokemonStatos(props.pokemonDetil.data.stats[0].base_stat)}
          >
            <Tooltip>{props.pokemonDetil.data.stats[0].base_stat} </Tooltip>
          </Skill>
        </SkillBar>
      </ContainerSkills>
      <ContainerSkills>
        <TitleSkill>Attack</TitleSkill>
        <SkillBar>
          <Skill
            width={props.pokemonDetil.data.stats[1].base_stat}
            color={getPokemonStatos(props.pokemonDetil.data.stats[1].base_stat)}
          >
            <Tooltip>{props.pokemonDetil.data.stats[1].base_stat}</Tooltip>
          </Skill>
        </SkillBar>
      </ContainerSkills>
      <ContainerSkills>
        <TitleSkill>Defense</TitleSkill>
        <SkillBar>
          <Skill
            width={props.pokemonDetil.data.stats[2].base_stat}
            color={getPokemonStatos(props.pokemonDetil.data.stats[2].base_stat)}
          >
            <Tooltip>{props.pokemonDetil.data.stats[2].base_stat}</Tooltip>
          </Skill>
        </SkillBar>
      </ContainerSkills>
      <ContainerSkills>
        <TitleSkill>Sp.Atk</TitleSkill>
        <SkillBar>
          <Skill
            width={props.pokemonDetil.data.stats[3].base_stat}
            color={getPokemonStatos(props.pokemonDetil.data.stats[3].base_stat)}
          >
            <Tooltip>{props.pokemonDetil.data.stats[3].base_stat}</Tooltip>
          </Skill>
        </SkillBar>
      </ContainerSkills>
      <ContainerSkills>
        <TitleSkill>Sp.Def</TitleSkill>
        <SkillBar>
          <Skill
            width={props.pokemonDetil.data.stats[4].base_stat}
            color={getPokemonStatos(props.pokemonDetil.data.stats[4].base_stat)}
          >
            <Tooltip>{props.pokemonDetil.data.stats[4].base_stat}</Tooltip>
          </Skill>
        </SkillBar>
      </ContainerSkills>
      <ContainerSkills>
        <TitleSkill>Speed</TitleSkill>
        <SkillBar>
          <Skill
            width={props.pokemonDetil.data.stats[5].base_stat}
            color={getPokemonStatos(props.pokemonDetil.data.stats[5].base_stat)}
          >
            <Tooltip>{props.pokemonDetil.data.stats[5].base_stat} </Tooltip>
          </Skill>
        </SkillBar>
      </ContainerSkills>
      {/* <TitleSkill>Total: {props.soma}</TitleSkill> */}
    </ContainerBar>
  );
}

export default SkillsBars;
