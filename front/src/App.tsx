import './styles/app.css'
import Header from './components/Header'
import Introducao from './components/Introduçao'
import Missao from './components/Missao'
import Visao from './components/Visao'
import Valores from './components/Valores'

function App() {
  return (
    <div>
      <Header />
      <Introducao />
      <Missao />
      <Visao />
      <Valores />
    </div>
  )
}

export default App
