import { useEffect, useState } from "react";
import { createContext } from "react";
import { formatAbilities, formatStats, formatTypes, getPokemonDescription } from "../helpers/pokemon";
import axios from "axios";

const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const [pokemonDetail, setpokemonDetail] = useState(null)
  const [showDetailPokemon, setShowDetailPokemon] = useState(false);
  
  const showPokemon = async ( pokemonInfo ) => {
    const {data: dataSpecies} = await axios.get(pokemonInfo.species.url)
    
    console.log(pokemonInfo)

    const {id, name, height, weight, stats, types, abilities} = pokemonInfo
    console.log({
      id,
      name,
      height,
      weight,
      stats: formatStats(stats),
      types: formatTypes(types),
      abilities: formatAbilities(abilities),
      description: getPokemonDescription(dataSpecies),
    })


    setpokemonDetail()
    
    setShowDetailPokemon(true);
  };

  const closePokemonDetail = () => {
    setShowDetailPokemon(false);
  };

  return (
    <PokemonContext.Provider
      value={{
        showDetailPokemon, 
        showPokemon, 
        closePokemonDetail}}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonContext, PokemonProvider };
