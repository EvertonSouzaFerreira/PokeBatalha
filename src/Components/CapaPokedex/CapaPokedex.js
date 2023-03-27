import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import PokedexPage from "../../Pages/PokedexPage/PokedexPage";
import PokemonDetalhes from "../../Pages/PokemonDetailPage/PokemonDetalhes";
import PokemonCard from "../PokemonCard/PokemonCard";
import TelaDeBatalha from "../TelaBatalha/TelaDeBatalha";
import fundo from "../../Components/AparelhoPokedex/imagens/fundo-pokedex.jpg";

import { PokedexCtx } from "../../PokedexContexto";
import Header from "../Header/Header";

function CapaPokedex() {
  const {
    pokemonDetil,
    setPokemonDetil,
    setStartEndBatalha,
    setPokemonsBatalha,
    flip,
    setFlip,
  } = useContext(PokedexCtx);

  const [className, setClassName] = useState("card");

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

  useEffect(() => {
    setTimeout(() => {
      if (!flip) {
        setClassName("card nivel-z-index-capa");
      } else {
        setClassName("card");
      }
    }, 200);
  }, [flip]);

  const handleFlip = () => {
    setFlip(!flip);
  };
  const handleTest = () => {
    alert("test");
  };

  return (
    <div className={className}>
      <div
        onClick={handleFlip}
        className={flip ? "card-inner flip" : `card-inner`}
      >
        <div className='front-face'>
          <div id='triangulo-para-direita'></div>
          <div className='porta-frente-footer'></div>
        </div>
        <div className='back-face'>
          <div className='back-face-content'>
            <div className='inputName'>
              <img style={{ width: "100%", height: "100%" }} src={fundo}></img>
            </div>

            <div onClick={handleTest} className='blues-btns'>
              <div onClick={handleDetil} className='min-blue-btns'></div>
              <div onClick={handlePokedex} className='min-blue-btns'>
                {" "}
              </div>
              <div className='min-blue-btns'></div>
              <div className='min-blue-btns'></div>
              <div className='min-blue-btns'></div>
              <div className='min-blue-btns'></div>
              <div className='min-blue-btns'></div>
              <div className='min-blue-btns'></div>
              <div className='min-blue-btns'></div>
              <div className='min-blue-btns'></div>
            </div>
            <div className='with-btns'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CapaPokedex;
