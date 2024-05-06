
import React from 'react';
import Lista from '../components/Listas';
import Formulario from '../components/Formulario';
import style from "./App.module.scss"
import Cronometro from '../components/cronometro';
import { useState } from 'react';
import { ITarefa } from '../types/tarefa';

function App() {

  const [tarefas, setTarefas]= useState<ITarefa[]>([])
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa)
  {
   setSelecionado(tarefaSelecionada);
   setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa =>({
    ...tarefa, 
    selecionado: tarefa.id === tarefaSelecionada.id
   })));
  }

  function finalizarTarefa(){
   if(selecionado){
    setSelecionado(undefined)
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefas=>
      {
        if(tarefas.id===selecionado.id){
          return{
            ...tarefas,
            selecionado:false,
            completado:true
          }
        }
        return tarefas;
      }
    ))
   } 
    
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista
      tarefas={tarefas}
      selecionaTarefa={selecionaTarefa}
      />
      <Cronometro 
      selecionado={selecionado} 
      finalizarTarefa={finalizarTarefa}/>
    </div>
     
  );
}

export default App;
