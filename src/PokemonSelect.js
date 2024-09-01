import React, { useState } from "react";

import pokemonList from "./pokemonList";
import { choice } from "./helpers";


const API_BASE_URL = 'https://pokeapi.co/api/v2/'

/* Select element to choose from common pokemon. */
function PokemonSelect({ add, pokemon = pokemonList }) {
  const [pokeIdx, setPokeIdx] = useState(0);

  const handleChange = evt => {
    setPokeIdx(evt.target.value);
  };

  return (
    <div>
      <select onChange={handleChange}>
        {pokemon.map((p, idx) => (
          <option key={idx} value={idx}>
            {p}
          </option>
        ))}
      </select>

      <button onClick={() => add(API_BASE_URL, `pokemon/${pokemon[pokeIdx]}/`)}>Catch one!</button>
      <button onClick={() => add(API_BASE_URL, `pokemon/${choice(pokemon)}/`)}>I'm feeling lucky</button>
    </div >
  );
}

export default PokemonSelect;



