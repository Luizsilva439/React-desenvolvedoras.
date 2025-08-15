import './style.css'

import Header from '../../components/Header'
import Titulo from '../../components/Titulo'


function Duns(){
    return(
        <div>
            <Header endereco='/android' content='Criando o DUNS Number'/>

            <main>

                <div >
                    <Titulo content="Mas afinal, o que é esse número DUNS?" />
                    <p>"D-U-N-S" (que significa Data Universal Numbering System), é um sistema usado para manter informações atualizadas de mais de 280 milhões de empresas globais. É um sistema proprietário desenvolvido e regulamentado pela Dun & Bradstreet (D&B). Ele atribui um identificador numérico exclusivo - conhecido como número DUNS - para cada empresa. É como se fosse o nosso CNPJ brasileiro, mas em escala mundial.</p>
                </div>

                <div>
                    <Titulo content="Por que preciso de um número DUNS?" />
                </div>


                
            </main>

        </div>
    )   
}

export default Duns