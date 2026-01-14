import "../styles/footer.css"

export default function Footer() {
    return(
        <div className="container-footer">
            <div className="acessos-footer">
                <a className="acessos-footer-a" href=""> 
                    <img className="acessos-footer-logos" src="../../public/facebooklogo.png" alt="" />
                </a>
                <a href="">
                    <img className="acessos-footer-logos" src="../../public/instalogo.png" alt="" />
                </a>
                <a href="">
                    <img className="acessos-footer-logos" src="../../public/gmaillogo.png" alt="" />
                </a>
            </div>
        </div>
    )
}