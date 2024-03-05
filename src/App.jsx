import Pokemones from './componentes/Pokemones'
import Aside from './componentes/Aside'
import ModalPokemon from './componentes/ModalPokemon'
import usePokemonContext from './hooks/usePokemonContext'


function App() {
  const { showDetailPokemon, closePokemonDetail } = usePokemonContext();
  console.log(showDetailPokemon)

  return (
    <section className="bg-[#F6F8FC] h-screen font-outfit overflow-y-auto">
      <main className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px]">
        <Pokemones />
        <Aside />
        <ModalPokemon showModal={showDetailPokemon} onCloseModal={closePokemonDetail}/>
      </main>
    </section>
  );
}

export default App
