import { useState } from 'react'
import './style.css'
import Img from '../../assets/fulltime.png'
import Botao from '../../components/Botao'


function Home() {
  const [count, setCount] = useState(0)

  return (
      <div className='container'>
        
        <div className='box_content'>
          <img src={Img}/>
          <h1>Criando as lojas desenvlvedoras.</h1>
          <Botao nome="Começar" endereco='/duns'></Botao>
        </div>
      </div>
  )
}

export default Home
