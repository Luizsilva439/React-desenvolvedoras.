import './style.css'

import Botao from '../../components/Botao'
import fulltime from '../../assets/fulltime.png'


function Header(props){
    return(
        <header>
            <img src={fulltime}/>
            <h1>{props.content}</h1>
            <Botao nome='Proxima etapa' endereco={props.endereco}/>
        </header>
    )
    
}

export default Header