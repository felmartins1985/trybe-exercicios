import './App.css';
import React from 'react';
import pokemons from './data';
import Pokedex from './Pokedex';
// import Pokemon from './Pokemon';

class App extends React.Component {
  render(){
    return(
      <div>
      <h1> Pokedex:</h1>
      <Pokedex pokemons={pokemons}/> 
      </div>
      // a props acima recebe o array de objetos dos pokemons
      // por estar importando do data, nao precisa definir os pokemons dentro do render
    )
  }
}
export default App;
