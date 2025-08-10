import { Link } from "react-router-dom"
import './style.css' 

function Botao(props){
    return(
        <div>
            <Link className='Botao' to={props.endereco}>{props.nome}</Link>
        </div>
    )
}

export default Botao