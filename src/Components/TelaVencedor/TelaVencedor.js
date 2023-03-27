import React, { useContext, useEffect, useState } from "react";
import { getPokemonTypeToBackGrond } from "../../contents/backgrond";
import {
  ContainerTelaVencedor,
  ImgPokemon,
  Modal,
  Button,
} from "./TelaVencedorSyle";
import { getImagenByName, pokemons } from "../../contents/pokemons";
import { PokedexCtx } from "../../PokedexContexto";
import { Link } from "react-router-dom";

function TelaVencedor({
  perdedor,
  vencedor,
  messagemVencedor,
  handleLeave,
  players,
}) {
  const {
    pokedexList,
    setPokedexList,
    pokemosBatalha,
    setStartEndBatalha,
    setStartBatalha,
  } = useContext(PokedexCtx);

  const [jogadorGanhou, setJogadorGanhou] = useState(false);

  const handleCapturar = (pokemon) => {
    setPokedexList([...pokedexList, pokemon]);
    setStartEndBatalha(false);
    setStartBatalha(false);
    console.log(pokemon);
  };
  console.log(jogadorGanhou);

  useEffect(() => {
    console.log("vencedor:", vencedor.data.name);
    console.log("perdedor:", perdedor.data.name);
    console.log("players[0]:", players[0].data.name);
    console.log("players[1]:", players[1].data.name);
    if (vencedor.data.name === players[0].data.name) {
      setJogadorGanhou(true);
    }
    if (vencedor.data.name === players[1].data.name) {
      setJogadorGanhou(false);
    }
  }, [vencedor]);

  // console.log(vencedor.data.name)
  // console.log(pokemosBatalha[0].data.name)
  // console.log(pokemosBatalha[1].data.name)
  // console.log(perdedor.data.name)
  return (
    <Modal>
      <ContainerTelaVencedor
        color={getPokemonTypeToBackGrond(
          pokemosBatalha[1].data.types[0].type.name
        )}
      >
        {messagemVencedor}
        <ImgPokemon src={getImagenByName(pokemosBatalha[1].data.name)} />
        {/* {vencedor.data.id === pokemosBatalha[0].data.id? <Button> <Link to='/pokedex' onClick={() => handleCapturar(pokemosBatalha[1].data)}>Capturar</Link></Button>:<Button><Link to='/' onClick={handleLeave} style={{color:'red'}}>Leave</Link></Button>} */}
        {/* {jogadorGanhou? <Button> <Link to='/pokedex' onClick={() => handleCapturar(perdedor.data)}>Capturar</Link></Button>:<Button><Link to='/' onClick={handleLeave} style={{color:'red'}}>Leave</Link></Button>} */}
        {!jogadorGanhou ? (
          <Button>
            <Link to='/' onClick={handleLeave} style={{ color: "red" }}>
              Leave
            </Link>
          </Button>
        ) : (
          <Button>
            {" "}
            <Link to='/pokedex' onClick={() => handleCapturar(perdedor.data)}>
              Capturar
            </Link>
          </Button>
        )}
      </ContainerTelaVencedor>
    </Modal>
  );
}

export default TelaVencedor;

// vou ter que fazer uma condicional para aparecer deacordo com o vencedor ou perdedor

//gostaria de compartilhar mais um projeto com todos da rede, esta aplicação eu recomendo para todos que já fizeram um a pokedex normal, nesta nova versão você primeiro tem que derrotar seu oponente para depois capturar. foi muito divertido e muito proveitoso pensar em uma logica um pouco diferente
