import '../styles/header.css'

export default function Header() {
    return (
        <nav className='header-container'>
            <img className='header-imagem' src="/wolverineMC.png" alt="Logo do M.C" />
            <a className='header-buttons' href="">Missão</a>
            <a className='header-buttons' href="">Visão</a>
            <a className='header-buttons' href="">Valores</a>
            <a className='header-buttons-2nd' href="">Entre em Contato</a>
        </nav>
    )
}

