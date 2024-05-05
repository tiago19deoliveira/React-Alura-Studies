import React from "react";
import Botao from "../Botao";
import style from './formulario.module.scss'
import { ITarefa } from "../../types/tarefa";

class Formulario extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>}>
{
state={
    tempo: "00:00",
    tarefa:""
}

adicionarTarefa(evento : React.FormEvent<HTMLFormElement>){
    evento.preventDefault()
    this.props.setTarefas(tarefasAntigas =>
         [
            ...tarefasAntigas,
            {...this.state,
            selecionado:false,
            completo: false
            }
        ]
        
    );

    this.setState(
        {
            tarefa: "",
            tempo:"00:00"
        }
    )
}

   
    render() {
        return(

            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>

             <div className={style.inputContainer}>
                <label htmlFor="tarefa">
                Digite um novo estudo 
                </label>

                <input type="text" 
                name="tarefa" 
                id="tarefa"
                value={this.state.tarefa}
                onChange={evento => this.setState({...this.state, tarefa: evento.target.value})}
                placeholder="o que voce deseja estudar?" 
                required/>
             </div>

             <div className={style.inputContainer}>

             <label htmlFor="tempo">
                Tempo
            </label>

            <input type="time" 
            step="1" 
            name="tempo" 
            id="tempo" 
            value={this.state.tempo}
            onChange={evento => this.setState({...this.state, tempo: evento.target.value})}
            max="01:30:00"
            min="00:00:00"
            required/>
        
             </div>

            <div> 
                <Botao type="submit"> adicionar </Botao>
            </div>
           

            </form>
        )
    }
}

export default Formulario