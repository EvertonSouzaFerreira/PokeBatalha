import React, { useContext } from 'react'
import { getPokemonTypeToBackGrond } from '../../contents/backgrond'
import { getImagenByName } from '../../contents/pokemons'
import VS from '../../imgs/imagensAtaques/vs.png'
import { PokedexCtx } from '../../PokedexContexto'

import {ContainerSquares, Square1, Square2, SquareImg1, SquareImg2, VsImg} from './ModalLutadoresStyle'

function ModalLutadores() {

  const {pokemosBatalha} = useContext(PokedexCtx)

  return (
    <ContainerSquares>
        <VsImg src={VS}></VsImg>
        <Square1  color={getPokemonTypeToBackGrond(pokemosBatalha[0].data.types[0].type.name)}/>
          <SquareImg1 src={getImagenByName(pokemosBatalha[0].data.name)}/>
        <Square1/>
        <Square2 src={getImagenByName(pokemosBatalha[1].data.name)} color={getPokemonTypeToBackGrond(pokemosBatalha[1].data.types[0].type.name)}/>
          <SquareImg2 src={getImagenByName(pokemosBatalha[1].data.name)}/>
        <Square2/>
    </ContainerSquares>
  )
}

export default ModalLutadores