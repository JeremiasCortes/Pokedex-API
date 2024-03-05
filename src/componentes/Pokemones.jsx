import { IconSearch } from "@tabler/icons-react";
import axios from "axios";
import { useRef, useState } from "react";
import { useEffect } from "react";
import PokemonList from "./PokemonList";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const CANTIDAD_LIMITE_INICIAL = 40
const INCREMENTO_DEL_LIMITE = 20

const Pokemones = () => {
  const [todosLosPokemons, setTodosLosPokemons] = useState([]);
  const  [busquedaPokemonName, setBusquedaPokemonName] = useState("");
  const [limite, setLimite] = useState(CANTIDAD_LIMITE_INICIAL);

  const  targetObserver = useRef(null);
  const entry = useIntersectionObserver(targetObserver, {});
  const isVisible = !!entry?.isIntersecting

  const pokemonByName = todosLosPokemons.filter(elPokemon => 
    elPokemon.name.includes(busquedaPokemonName));

  
  const handleChangePokemonName = (e) => setBusquedaPokemonName(e.target.value.toLowerCase())
  //? Forma no controlada
  // const handleSubmit = (a) => {
  //   a.preventDefault();
  //   setBusquedaPokemonName(a.target.pokemonName.value.toLowerCase());
  // }

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=898")
      .then(({ data }) => setTodosLosPokemons(data.results))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (isVisible){
    const maximoPokemons = pokemonByName.length;
    const newLimit = limite + INCREMENTO_DEL_LIMITE;
    newLimit > maximoPokemons ? setLimite(maximoPokemons): setLimite(newLimit)
    }
  }, [isVisible])

  useEffect(() => {
    setLimite(CANTIDAD_LIMITE_INICIAL)
  }, [busquedaPokemonName])

  return (
    <section className="p-4 py-5">
      <form>
        <div className="bg-white p-4 flex rounded-2xl text-lg">
          <input
            className="outline-none flex-1"
            type="text"
            autoComplete="off"
            placeholder="Busca tu pokemon"
            name="pokemonName"
            onChange={handleChangePokemonName}
          ></input>
          <button className="bg-red-500 p-2 rounded-xl shadow-lg shadow-red-500/50 hover:bg-red-400 transition-colors">
            <IconSearch color="white" stroke={3}/>
          </button>
        </div>
      </form>
      <PokemonList pokemons={pokemonByName.slice(0, limite)} />

      {/*Objeto de referencia como un ubservador*/}
      <span ref={targetObserver}></span>
    </section>
  );
};

export default Pokemones;
