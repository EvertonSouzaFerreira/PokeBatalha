import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { getPokemonType } from "../../contents/type";
import { getImagenByName } from "../../contents/pokemons";
import { getPokemonTypeToBackGrond } from "../../contents/backgrond";
import ModalLutadores from "../ModalLutadores/ModalLutadores";

import tituloPokemon from "../../Components/AparelhoPokedex/imagens/be5185a1fd0db1dfeb4c71610c19d6af.png";

import {
  ContainerCards,
  ContainerCard,
  CardType,
  ImgPokemon,
  ContainerType,
  ContainerInfos,
  ContainerNameId,
  ContainerButtonImg,
  Button,
} from "./PokemonCardStyle";

import { PokedexCtx } from "../../PokedexContexto";

function PokemonCard() {
  const {
    setPokemons,
    pokemons,
    pokedexList,
    setPokedexList,
    handleLutadores,
    pokemosBatalha,
    setStartBatalha,
  } = useContext(PokedexCtx);
  const [nomesPokemons, setNomesPokemons] = useState([]);

  useEffect(() => {
    const fetchPokmons = async () => {
      await axios
        .get(`https://pokeapi.co/api/v2/pokemon?limit=20`)
        .then((res) => setNomesPokemons(res.data.results))
        .catch((err) => console.log(err));
    };
    fetchPokmons();
  }, []);

  useEffect(() => {
    if (pokemons) {
      var endpoint = [];
      for (var i = 1; i <= nomesPokemons.length; i++) {
        endpoint.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      }
      axios
        .all(endpoint.map((endpoint) => axios.get(endpoint)))
        .then((res) => setPokemons(res))
        .catch((err) => setPokemons(err));
    }
  }, [nomesPokemons]);

  const handleCapturar = (pokemon) => {
    setPokedexList([...pokedexList, pokemon]);
  };

  const handleStart = () => {
    setStartBatalha(true);
  };

  return (
    <>
      {pokemosBatalha.length > 1 && (
        <Link onClick={handleStart} to='/batalha'>
          <ModalLutadores />
        </Link>
      )}
      {/* <h1 style={{margin: '1rem', color: 'white'}}>Todos Pokemons</h1> */}
      <img style={{ width: "70%", height: "30%" }} src={tituloPokemon}></img>

      <ContainerCards>
        {pokemons.map((pokemon, index) => {
          return (
            <ContainerCard
              color={getPokemonTypeToBackGrond(pokemon.data.types[0].type.name)}
              key={index}
            >
              <ContainerInfos>
                <ContainerNameId>
                  <div>#{pokemon.data.id}</div>
                  <h5>{pokemon.data.name}</h5>

                  <ContainerType>
                    <CardType
                      src={getPokemonType(pokemon.data.types[0].type.name)}
                    />
                    {pokemon.data.types.length >= 2 ? (
                      <CardType
                        src={getPokemonType(pokemon.data.types[1].type.name)}
                      />
                    ) : (
                      ""
                    )}
                  </ContainerType>
                </ContainerNameId>
                <Link
                  style={{ fontSize: "12px" }}
                  to={`/pokemon/${pokemon.data.id}`}
                >
                  Detalhes{" "}
                </Link>
              </ContainerInfos>

              <ContainerButtonImg>
                <ImgPokemon src={getImagenByName(pokemon.data.name)} />
                {/* <Button onClick={() => handleCapturar(pokemon)}>Capturar!</Button> */}
                <Button onClick={() => handleLutadores(pokemon)}>
                  Batalha
                </Button>
              </ContainerButtonImg>
            </ContainerCard>
          );
        })}
      </ContainerCards>
    </>
  );
}

export default PokemonCard;

// style={{backgroundColor: getPokemonTypeToBackGrond(pokemon.data.types[0].type.name)}}
