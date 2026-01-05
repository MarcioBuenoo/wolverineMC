import '../styles/header.css'

export default function Header() {
    return (
        <nav>
            <a href="">Home</a>
            <a href="">Missão</a>
            <a href="">Visão</a>
            <a href="">Valores</a>
            <a href="" className='hidden-button'>Entre em contato</a>
        </nav>
    )
}

