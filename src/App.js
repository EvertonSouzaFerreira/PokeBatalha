import {PokedexProvaider} from './PokedexContexto'
import {BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

//Global-Style
import GlobalStyle from './globalStyles';

//Componentes
import Header from './Components/Header/Header';
import PokemonCard from './Components/PokemonCard/PokemonCard';
import PokemonDetalhes from './Pages/PokemonDetailPage/PokemonDetalhes';
import PokedexPage from './Pages/PokedexPage/PokedexPage';
import TelaDeBatalha from './Components/TelaBatalha/TelaDeBatalha';
import AparelhoPokedex from './Components/AparelhoPokedex/AparelhoPokedex';




function App() {
  return (
    <PokedexProvaider>
        <GlobalStyle/>
        
       
        
        <AparelhoPokedex/>
        
        
        
    </PokedexProvaider>
    
  );
}

export default App;


//fazendo a barra mover suavimente