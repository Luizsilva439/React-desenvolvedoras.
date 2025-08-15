import './style.css'

import Botao from '../../components/Botao'
import fulltime from '../../assets/fulltime.png'


function Header(props){

    const style = {
    fontSize: props.fontSize || '30px',  // Se não passar fontSize, vai usar o valor padrão de 16px
    };

    return(
        <header>
            <img src={fulltime} className='imagem'/>
            <h1 style={style}>{props.content}</h1>
            <Botao nome='Proxima etapa' endereco={props.endereco}  />
        </header>
    )
    
}

export default Header