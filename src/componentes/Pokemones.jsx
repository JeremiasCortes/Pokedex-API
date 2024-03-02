import { IconSearch } from "@tabler/icons-react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import PokemonList from "./PokemonList";

const Pokemones = () => {
  const [todosLosPokemons, setTodosLosPokemons] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=898")
      .then(({ data }) => setTodosLosPokemons(data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="p-4 py-5">
      <form>
        <div className="bg-white p-4 flex rounded-2xl text-lg">
          <input
            className="outline-none flex-1"
            type="text"
            placeholder="Busca tu pokemon"
          ></input>
          <button className="bg-red-500 p-2 rounded-xl shadow-lg shadow-red-500/50 hover:bg-red-400 transition-colors">
            <IconSearch color="white" stroke={3}/>
          </button>
        </div>
      </form>
      <PokemonList pokemons={todosLosPokemons} />
    </section>
  );
};

export default Pokemones;
