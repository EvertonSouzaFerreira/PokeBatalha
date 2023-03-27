import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PokedexCtx } from "../../PokedexContexto";
import { getPokemonHp } from "../../contents/pokemonHp";
import TelaVencedor from "../TelaVencedor/TelaVencedor";

import { useSpring, animated } from "@react-spring/web";

import "../../App.css";

import {
  ContainerBattle,
  ContainerHpPlayer1,
  ContainerHpPlayer2,
  ContainerHpPlayers,
  ContainerMoves,
  ContainerSkills,
  ContainerType,
  SkillBar,
  Skill,
  ContainerNomeLevel,
  ContainerHpBarra,
  Hp,
} from "./TelaBatalhaStyle";

function TelaDeBatalha() {
  const {
    pokemosBatalha,
    setPokemonsBatalha,
    startEndBatalha,
    setStartEndBatalha,
    pokemonParaCapturar,
    setPokemonParaCapturar,
    messagemVencedor,
    setMessagemVencedor,
    setStartBatalha,
  } = useContext(PokedexCtx);

  const [playerTime, setPlayerTime] = useState(1);
  const [player1, setPlayer1] = useState(pokemosBatalha[0]);
  const [player2, setPlayer2] = useState(pokemosBatalha[1]);

  const [pokemonTurn, setPokmonTurn] = useState(pokemosBatalha[0].data);

  const players = [];
  players.push(player1, player2);

  const [vencedor, setVencedor] = useState(players[0]);
  const [perdedor, setPerdedor] = useState(players[1]);

  const [poke01, setPoke01] = useSpring(() => ({
    width: "50%",
    height: "50%",
    position: "absolute",
    left: "0px",
    bottom: "8%",
    opacity: "1",
    config: { duration: 100 },
  }));

  const [poke02, setPoke02] = useSpring(() => ({
    width: "30%",
    height: "30%",
    position: "absolute",
    right: "20px",
    top: "10%",
    opacity: "1",
    config: { duration: 100 },
  }));
  const handleAtaque = (ataque, defesa, specialAttack, specialDefesa) => {
    setPokmonTurn(pokemosBatalha[playerTime].data);

    if (players[playerTime].HP <= 0) return;
    if (playerTime === 1) {
      handleAtaquePlayer01();
      setPlayer2((pa) => {
        setPlayerTime(0);
        const newHP =
          pa.HP -
          (
            (((2 * 6) / 5 + 2) * ataque * specialAttack) / defesa / 50 +
            2
          ).toFixed(0);

        console.log(newHP);
        if (newHP <= 0) {
          setVencedor(players[0]);
          setPerdedor(players[1]);

          setTimeout(() => {
            setStartEndBatalha(true);
            setMessagemVencedor(
              "Parabens Voce ganhou o direito de capiturar este Pokemon"
            );
          }, 500);
        }
        return {
          ...pa,
          HP: newHP,
        };
      });
    } else {
      if (players[playerTime].HP <= 0) return;
      handleAtaquePlayer02();
      console.log("jogador1", player1.HP);
      setPlayer1((po) => {
        setPlayerTime(1);
        const newHP =
          po.HP -
          (
            (((2 * 6) / 5 + 2) * ataque * specialAttack) / defesa / 50 +
            2
          ).toFixed(0);
        console.log(newHP);
        if (newHP <= 0) {
          setVencedor(players[1]);
          setPerdedor(players[0]);

          setTimeout(() => {
            setStartEndBatalha(true);
            setMessagemVencedor(
              "Nao foi desta vez tente usar um pokemon de outro Type para derrotalo"
            );
          }, 500);
        }
        return {
          ...po,
          HP: newHP,
        };
      });
    }
  };

  const handleLeave = () => {
    setPokemonsBatalha("");
    setStartEndBatalha(false);
    setStartBatalha(false);
  };
  const handleAtaquePlayer01 = () => {
    setPoke01({
      left: "50px",
      onRest: () => setTimeout(() => setPoke01({ left: "5px" }), 100),
    });
    setPoke02({
      opacity: "0",
      onRest: () => setTimeout(() => setPoke02({ opacity: "1" }), 10),
    });
  };
  const handleAtaquePlayer02 = () => {
    setPoke02({
      right: "50",
      onRest: () => setTimeout(() => setPoke02({ right: "30px" }), 100),
    });
    setPoke01({
      opacity: "0",
      onRest: () => setTimeout(() => setPoke01({ opacity: "1" }), 10),
    });
  };

  return (
    <ContainerBattle>
      {startEndBatalha && (
        <TelaVencedor
          players={players}
          handleLeave={handleLeave}
          messagemVencedor={messagemVencedor}
          vencedor={vencedor}
          perdedor={perdedor}
        />
      )}
      <ContainerHpPlayers>
        <ContainerHpPlayer1>
          <ContainerNomeLevel>
            <h6>{player1.data.name.toUpperCase()}</h6>
            <p style={{ fontSize: 10 }}>Lv26</p>
          </ContainerNomeLevel>
          <ContainerHpBarra>
            <Hp>HP</Hp>
            <SkillBar>
              <Skill
                tamanhoHp={getPokemonHp(
                  player1.HP.toFixed(0),
                  pokemosBatalha[0].data.stats[0].base_stat
                )}
              ></Skill>
            </SkillBar>
          </ContainerHpBarra>
        </ContainerHpPlayer1>
        {
          <animated.img
            style={poke01}
            src={pokemosBatalha[0].data.sprites.back_default}
          />
        }
        {
          <animated.img
            style={poke02}
            src={pokemosBatalha[1].data.sprites.front_default}
          />
        }
        {/* {movimento? <PokemonPlay01 className={atkSofrindo && 'opasidade'} src={pokemosBatalha[0].data.sprites.back_default}/>: <AtaqueAnimacaoP1 src={pokemosBatalha[0].data.sprites.back_default}/>}
            {movimento2? <PokemonPlay02 src={pokemosBatalha[1].data.sprites.front_default}/>: <AtaqueAnimacaoP2 src={pokemosBatalha[1].data.sprites.front_default}/>} */}
        <ContainerHpPlayer2>
          <ContainerNomeLevel>
            <h6>{pokemosBatalha[1].data.name.toUpperCase()}</h6>
            <p style={{ fontSize: 10 }}>Lv26</p>
          </ContainerNomeLevel>
          <ContainerHpBarra>
            <Hp>HP</Hp>
            <SkillBar>
              <Skill
                tamanhoHp={getPokemonHp(
                  player2.HP.toFixed(0),
                  pokemosBatalha[1].data.stats[0].base_stat
                )}
              ></Skill>
            </SkillBar>
          </ContainerHpBarra>
        </ContainerHpPlayer2>
      </ContainerHpPlayers>
      <ContainerMoves>
        <ContainerSkills>
          <ul>
            <li
              onClick={() =>
                handleAtaque(
                  pokemonTurn.stats[1].base_stat,
                  pokemonTurn.stats[2].base_stat,
                  pokemonTurn.stats[3].base_stat,
                  pokemonTurn.stats[4].base_stat
                )
              }
              style={{ marginBottom: "5px", cursor: "pointer" }}
            >
              {pokemonTurn.moves[0].move.name.toUpperCase()}
            </li>
            <li
              onClick={() =>
                handleAtaque(
                  pokemonTurn.stats[1].base_stat,
                  pokemonTurn.stats[2].base_stat,
                  pokemonTurn.stats[3].base_stat,
                  pokemonTurn.stats[4].base_stat
                )
              }
              style={{ cursor: "pointer" }}
            >
              {pokemonTurn.moves[1].move.name.toUpperCase()}
            </li>
          </ul>
          <ul>
            <li style={{ marginBottom: "5px", cursor: "pointer" }}>
              {pokemonTurn.moves[2].move.name.toUpperCase()}
            </li>
            <li style={{ cursor: "pointer" }}>
              {pokemonTurn.moves[3].move.name.toUpperCase()}
            </li>
          </ul>
        </ContainerSkills>
        <ContainerType>
          <p>TYPE/{pokemosBatalha[0].data.types[0].type.name.toUpperCase()}</p>
          <Link to='/' onClick={handleLeave} style={{ color: "red" }}>
            Leave
          </Link>
        </ContainerType>
      </ContainerMoves>
    </ContainerBattle>
  );
}

export default TelaDeBatalha;

//o problema esta no HP
