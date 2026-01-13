import './styles/app.css'
import Header from './components/Header'
import Introducao from './components/Introduçao'
import Missao from './components/Missao'

function App() {
  return (
    <div className='index-div'>
      <Header />
      <Introducao />
      <Missao />
    </div>
  )
}

export default App
