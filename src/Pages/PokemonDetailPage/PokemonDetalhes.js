import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Link, useParams } from "react-router-dom";
import { getImagenByName } from "../../contents/pokemons";
// import { ContainerCard } from '../../Components/PokemonCard/PokemonCardStyle'
import { getPokemonTypeToBackGrond } from "../../contents/backgrond";
import { getPokemonType } from "../../contents/type";
import { getPokemonStatos } from "../../contents/statos";

//componentes
import SkillsBars from "../../Components/SkillsBars/SkillsBars";

import {
  ContainerCardDetil,
  One,
  One2,
  Two,
  Three,
  ImgDetil,
  ImgPokeDetil,
  ContainerSkills,
  TituloSkills,
  Move,
  ContainerMoves,
  CardType,
  ContainerType,
  ContainerInfos,
  ContainerNameId,
} from "./PokemonDetalheStyle";

import { PokedexCtx } from "../../PokedexContexto";

function PokemonDetalhes() {
  const [pokedex, setPokedex] = useState(false);

  var soma = 0;
  const { id } = useParams();
  const {
    setStartEndBatalha,
    setPokemonsBatalha,
    pokemonDetil,
    setPokemonDetil,
  } = useContext(PokedexCtx);
  // const [pokemonDetil, setPokemonDetil] = useState()
  console.log(pokemonDetil);

  const fetchPokemonDetail = async () => {
    const response = await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .catch((err) => {
        console.log("Err ", err);
      });
    setPokemonDetil(response);
  };

  useEffect(() => {
    if (id && id !== "") fetchPokemonDetail();
  }, [id]);

  if (!pokemonDetil) {
    return null;
  }

  const handleDetil = () => {
    setPokemonDetil(null);
    setPokedex(false);
    setPokemonsBatalha("");
    setStartEndBatalha(false);
  };

  return (
    <>
      {/* <h1 style={{margin: '2rem', marginLeft: '3rem'}}>Detalhes</h1> */}
      <ContainerCardDetil
        color={getPokemonTypeToBackGrond(pokemonDetil.data.types[0].type.name)}
      >
        {/* <One> <ImgDetil src={pokemonDetil.data.sprites.front_default}></ImgDetil>{}</One>
        <One2><ImgDetil src={pokemonDetil.data.sprites.back_default}></ImgDetil></One2> */}
        <Two>
          <ContainerInfos>
            <ContainerNameId>
              <h6>#{pokemonDetil.data.id}</h6>
              <h6>{pokemonDetil.data.name}</h6>
            </ContainerNameId>
            <ContainerType>
              <CardType
                src={getPokemonType(pokemonDetil.data.types[0].type.name)}
              />
              {pokemonDetil.data.types.length >= 2 ? (
                <CardType
                  src={getPokemonType(pokemonDetil.data.types[1].type.name)}
                />
              ) : (
                ""
              )}
            </ContainerType>
          </ContainerInfos>
          <ContainerSkills>
            <TituloSkills>Moves:</TituloSkills>
            <ContainerMoves>
              <Move>{pokemonDetil.data.moves[0].move.name}</Move>
              <Move>{pokemonDetil.data.moves[1].move.name}</Move>
              <Move>{pokemonDetil.data.moves[2].move.name}</Move>
              <Move>{pokemonDetil.data.moves[3].move.name}</Move>
            </ContainerMoves>
          </ContainerSkills>
          <ImgPokeDetil
            src={getImagenByName(pokemonDetil.data.name)}
          ></ImgPokeDetil>
        </Two>
        <Three>
          {pokemonDetil.data.stats.forEach((item) => {
            soma = soma + item.base_stat;
          })}
          <SkillsBars pokemonDetil={pokemonDetil} soma={soma} />
        </Three>
      </ContainerCardDetil>
    </>
  );
}

export default PokemonDetalhes;
