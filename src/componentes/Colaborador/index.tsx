import './Colaborador.css'

interface ColaboradorProps {
    nome: string;
    corDeFundo: string;
    cargo: string;
    imagem: string;
    data: string;
}

const Colaborador = ({ nome, imagem, cargo, corDeFundo, data }: ColaboradorProps) => {
    const dataLocal = new Date(`${data}T12:00:00Z`); 
    const dataFormatada = new Date(dataLocal).toLocaleDateString("pt-BR");
    return (<div className='colaborador'>
        <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
            <img src={imagem} alt={nome}/>
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
            <h5>{dataFormatada}</h5>
        </div>
    </div>)
}

export default Colaborador