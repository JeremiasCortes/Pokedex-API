import Pokemones from './componentes/Pokemones'
import Aside from './componentes/Aside'


function App() {
  return (
    <section>
      <main className='max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 h-screen'>
        <Pokemones></Pokemones>
        <Aside></Aside>a
      </main>
    </section>
  )
}

export default App
