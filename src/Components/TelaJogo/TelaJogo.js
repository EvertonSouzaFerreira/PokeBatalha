import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PokedexPage from '../../Pages/PokedexPage/PokedexPage'
import PokemonDetalhes from '../../Pages/PokemonDetailPage/PokemonDetalhes'
import PokemonCard from '../PokemonCard/PokemonCard'
import TelaDeBatalha from '../TelaBatalha/TelaDeBatalha'
import CapaPokedex from '../CapaPokedex/CapaPokedex'
import Header from '../Header/Header'

import { PokedexCtx } from '../../PokedexContexto'

function TelaJogo() {

  const {pokemonDetil, setPokemonDetil, startEndBatalha, setPokemonsBatalha, startBatalha, setStartBatalha} = useContext(PokedexCtx)

  console.log(startEndBatalha);
  return (
    <div className="container-tela">
        <div className="tela">
            <div className='telaJogo'>
                   {/* <PokemonCard/> */}
                   <BrowserRouter>
        {startBatalha? '': <Header/>}
        
        <Routes>
          <Route exact path='/' element={<PokemonCard/>}/>
          <Route path='/pokedex' element={<PokedexPage/>}/>
          <Route path='/pokemon/:id' element={<PokemonDetalhes/>}/>
          <Route path='/batalha' element={<TelaDeBatalha/>} />
          <Route path='/' element={<CapaPokedex/>}/>
        </Routes>
        

        
        </BrowserRouter>
            </div>
        </div>
        <div className="btns-primeir-tela ">

          <div className="btn-round "></div>
          <div className="btn-start-select"></div>

          <div className="btn-setas"> 
            <div className="btn-top"></div>
            <div className="btn-botton"></div>
            <div className="btn-right"></div>
            <div className="btn-left"></div>
            <div className="btn-meio"></div>
          </div>
        </div>
      </div>
  )
}

export default TelaJogo