import Pokemones from './componentes/Pokemones'
import Aside from './componentes/Aside'


function App() {
  return (
    <section className='bg-[#F6F8FC] h-screen font-Sans overflow-y-auto'>
      <main className='max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px]'>
        <Pokemones></Pokemones>
        <Aside></Aside>
      </main>
    </section>
  )
}

export default App
