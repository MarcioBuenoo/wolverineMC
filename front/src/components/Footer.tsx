import "../styles/footer.css"

export default function Footer() {
    return(
        <div className="container-footer">
            <div className="acessos-footer">
                <a className="acessos-footer-a" href=""> 
                    <img className="acessos-footer-logos" src="../../public/facebooklogo.png" alt="" />
                </a>
                <a className="acessos-footer-a" href="">
                    <img className="acessos-footer-logos" src="../../public/instalogo.png" alt="" />
                </a>
                <a className="acessos-footer-a" href="">
                    <img className="acessos-footer-logos" src="../../public/gmaillogo.png" alt="" />
                </a>
            </div>
            <div className="contatos-footer">
                <h2 className="contatos-footer-h2">Contatos</h2>
                <a className="contatos-footer-a" href="">
                    <img className="contatos-footer-image" src="" alt="" /> Clovis "Cabelo" - Presidente Fundador
                </a>
                <a className="contatos-footer-a" href="">
                    <img className="contatos-footer-image" src="" alt="" /> José "Zezão" - Vice-Presidente
                </a>
                <a className="contatos-footer-a" href="">
                    <img className="contatos-footer-image" src="" alt="" /> Márcio "Marcião" - Diretor Regional - Jacareí
                </a>
                <a className="contatos-footer-a" href="">
                    <img className="contatos-footer-image" src="" alt="" /> Andersons - Diretor Disciplinar
                </a>
            </div>
        </div>
    )
}