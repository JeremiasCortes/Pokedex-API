import { useState } from 'react'
import Pokemones from './componentes/Pokemones'
import Aside from './componentes/Aside'


function App() {
  const [count, setCount] = useState(0)

  return (
    <section>
      <main>
        <Pokemones></Pokemones>
        <Aside></Aside>
      </main>
    </section>
  )
}

export default App
