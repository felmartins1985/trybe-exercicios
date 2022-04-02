import React from 'react';
// import Pokedex from './Pokedex';
// import pokemons from './data';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
      <div>
        <p>{name}</p>
        <p>{type}</p>
        <p>{`Average Weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        <img src={image} alt={`${name} sprite`} />
      </div>
    )
  }
}
export default Pokemon;