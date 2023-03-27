import React, {createContext, useState} from "react";


export const PokedexCtx = createContext();

export function PokedexProvaider(props){

    const [pokemons, setPokemons] = useState([])
    const [pokemonDetil, setPokemonDetil] = useState(null)
    const [pokedexList, setPokedexList] = useState([])
    const [pokemosBatalha, setPokemonsBatalha] = useState([])
    const [startEndBatalha, setStartEndBatalha] = useState(false)
    const [pokemonParaCapturar, setPokemonParaCapturar] = useState(false)
    const [messagemVencedor, setMessagemVencedor] = useState(null)
    const [startBatalha, setStartBatalha] = useState(false)
    const [flip, setFlip] = useState(false)

   const handleLutadores = (lutador) => {
       let novo={
            ...lutador,
            HP:lutador.data.stats[0].base_stat
        }
        setPokemonsBatalha([...pokemosBatalha, novo])
    
   }
   

    return(
        <PokedexCtx.Provider
            value={{
                pokemons,
                setPokemons,
                pokemonDetil,
                setPokemonDetil,
                pokedexList,
                setPokedexList,
                handleLutadores,
                pokemosBatalha,
                setPokemonsBatalha,
                startEndBatalha,
                setStartEndBatalha,
                pokemonParaCapturar,
                setPokemonParaCapturar,
                setMessagemVencedor,
                messagemVencedor,
                setStartBatalha,
                startBatalha,
                flip,
                setFlip
            }}
        >
    
            {props.children}
        </PokedexCtx.Provider>)
}