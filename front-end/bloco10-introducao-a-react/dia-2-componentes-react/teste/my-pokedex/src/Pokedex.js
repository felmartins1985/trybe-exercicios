import React from 'react';
// import pokemons from './data';
import Pokemon from './Pokemon';
// import App from './App';
class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;// aqui chega a lista de todos os pokemons
    return (
      <div>
        {pokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
      </div>
    )// peço para cada pokemon passado pelo map, seja criada uma key e crio um props que o parametro seja cada pokemon individualmente
  }
}
export default Pokedex;
