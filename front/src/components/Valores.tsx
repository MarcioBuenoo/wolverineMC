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
                <Card titulo={'Irmandade'} conteudo={'Agimos com honestidade e ética em todas as nossas interações, somos uma família.'} />
                <Card titulo={'Liberdade'} conteudo={'Prezamos pelos direitos individuais, ser livre.'} />
                <Card titulo={`Solidariedade`} conteudo={'Apoiamos uns aos outros, promovendo um ambiente de cooperação e ajuda mútua.'} />
            </div>
        </div>
    )
}