import '../styles/valores.css';
import Card from './Card';

export default function Valores() {
    return (
        <div className="container-valores">
            <div className="titulo-valores">
                <h2>Valores</h2>
            </div>
            <div className="modals-valores">
                <Card titulo={'Respeito'} conteudo={'Tratamos todos com dignidade, valorizando a diversidade e promovendo um ambiente inclusivo.'} />
            </div>
        </div>
    )
}