import React, { useContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PokedexPage from '../../Pages/PokedexPage/PokedexPage'
import PokemonDetalhes from '../../Pages/PokemonDetailPage/PokemonDetalhes'
import PokemonCard from '../PokemonCard/PokemonCard'

import CapaPokedex from '../CapaPokedex/CapaPokedex'
import TelaDeBatalha from '../TelaBatalha/TelaDeBatalha'
import TelaJogo from '../TelaJogo/TelaJogo'
import './style2.css'

import { PokedexCtx } from '../../PokedexContexto'

function AparelhoPokedex() {
  const {flip, setFlip} = useContext(PokedexCtx)

  const [boxRotation, setBoxRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (flip) return
    const xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 15;
    setBoxRotation({ x: xAxis, y: yAxis });
    console.log(boxRotation);
  }

  const { x, y } = boxRotation;
  const styles = {transform: `rotateY(${x}deg) rotateX(${y}deg)`}


  return (
  <div className='containerBox' onMouseMove={handleMouseMove}>
      <div className="box" style={styles}>
      <div className="box__face box__face--back"></div>
      <div className="box__face box__face--front">


<div className="container">

    <div className="blue-btn"></div>
    
      <div className="container-minilight">
        <div className="red-light"></div>
        <div className="yellow-light"></div>
        <div className="green-light"></div>
      </div>
      
      <TelaJogo/>
      <CapaPokedex/>
        
    </div>


      </div>
      <div className="box__face box__face--left"></div>
      <div className="box__face box__face--right"></div>
      <div className="box__face box__face--top"></div>
      <div className="box__face box__face--bottom"></div>
    </div>
  </div>  
    
  )
}

export default AparelhoPokedex