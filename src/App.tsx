import{ ZENELISTA } from './adat'
import './App.css'
import Zenek from './component/Zenek'

function App() {

  return (
    <>
      <header><h1>Zene</h1></header>
      <article>
        <Zenek lista = {ZENELISTA}/>
      </article>
      <footer><p>Molnár Beatrix</p></footer>
    </>
  )
}

export default App
