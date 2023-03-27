import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button, ContainerButtonImg, ContainerCard, ContainerCards, ImgPokemon } from '../../Components/PokemonCard/PokemonCardStyle'
import { ContainerPokedex } from './PokedexPageStyle'
import { getPokemonTypeToBackGrond } from '../../contents/backgrond'
import { getImagenByName } from '../../contents/pokemons'
import { getPokemonType } from '../../contents/type'
import { PokedexCtx } from '../../PokedexContexto'
import { CardType, ContainerInfos, ContainerNameId, ContainerType } from '../PokemonDetailPage/PokemonDetalheStyle'

function PokedexPage() {

    const {pokedexList, setPokedexList} = useContext(PokedexCtx)

    const handleDelete = (poke) => {
       const pokemonFilter = pokedexList.filter((pokemon) => pokemon.id !== poke.id)
       setPokedexList(pokemonFilter)

    }


  return (
    <ContainerPokedex>
    {pokedexList.map((pokemon, index) => {
        return(
            
             <ContainerCard color={getPokemonTypeToBackGrond(pokemon.types[0].type.name)}  key={index}>
                
                <ContainerInfos>
                    <ContainerNameId>
                        <div >#{pokemon.id}</div>
                        <h2>{pokemon.name}</h2>
                    
                    
                    <ContainerType>
                        <CardType src={getPokemonType(pokemon.types[0].type.name)}/>
                        {pokemon.types.length >=2? <CardType src={getPokemonType(pokemon.types[1].type.name)}/>:''}
                    </ContainerType>
                    </ContainerNameId>
                    <Link to={`/pokemon/${pokemon.id}`}>Detalhes</Link>
                </ContainerInfos>
                
                <ContainerButtonImg>
                    <ImgPokemon src={getImagenByName(pokemon.name)}/>
                    <Button onClick={() => handleDelete(pokemon)} style={{backgroundColor:'#FF6262'}}>Excluir!</Button>
                </ContainerButtonImg>
                
               
             </ContainerCard>
             
        )            
    })}    
    </ContainerPokedex> 
  )
}

export default PokedexPage