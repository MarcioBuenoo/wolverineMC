import './styles/app.css'
import Header from './components/Header'
import Introducao from './components/Introduçao'
import Missao from './components/Missao'
import Visao from './components/Visao'
import Valores from './components/Valores'
import Footer from './components/Footer'

function App() {
  return (
    <div className='index-div'>
      <Header />
      <Introducao />
      <Missao />
      <Visao />
      <Valores />
      <Footer />
    </div>
  )
}

export default App
