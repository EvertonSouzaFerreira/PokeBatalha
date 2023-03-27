import React, { useContext, useState } from "react";
import NomePokemon from "../../imgs/NomePokemon.png";
import { Link } from "react-router-dom";
//StyleComponents
import {
  ContainerHeader,
  ButtonPokedex,
  Span,
  PokemonImg,
} from "./HeaderStyle";

import { PokedexCtx } from "../../PokedexContexto";
import Ember from "../AtakEmber";

function Header() {
  const {
    setStartEndBatalha,
    pokemonDetil,
    setPokemonDetil,
    setPokemonsBatalha,
  } = useContext(PokedexCtx);

  const [pokedex, setPokedex] = useState(false);

  const handleDetil = () => {
    setPokemonDetil(null);
    setPokedex(false);
    setPokemonsBatalha("");
    setStartEndBatalha(false);
  };
  const handlePokedex = () => {
    setPokedex(true);
    setPokemonsBatalha("");
    setStartEndBatalha(false);
  };

  return (
    <ContainerHeader>
      {/* <Ember/> */}
      {pokemonDetil || pokedex ? (
        <Link to='/'>
          <h6 onClick={handleDetil}>Todos Pokemons</h6>{" "}
        </Link>
      ) : (
        <Span />
      )}
      <PokemonImg src={NomePokemon}></PokemonImg>
      {!pokedex ? (
        <ButtonPokedex>
          <Link onClick={handlePokedex} to={"/pokedex"}>
            <h6 style={{ width: "90%" }}>Pokedex</h6>
          </Link>{" "}
        </ButtonPokedex>
      ) : (
        <Span />
      )}
    </ContainerHeader>
  );
}

export default Header;
