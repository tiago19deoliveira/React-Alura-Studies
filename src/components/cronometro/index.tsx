
import Botao from '../Botao'
import Relogio  from './Relogio'

export default function Cronometro(){
    return(
    <div>
        <p>
            EScreve um card e inicie o cronometro 
        </p>
    <div>
     <Relogio/>
    </div>

    <Botao texto='Começar'/>

    </div>
    )
}