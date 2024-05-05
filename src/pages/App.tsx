
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

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista
      tarefas={tarefas}
      selecionaTarefa={selecionaTarefa}
      />
      <Cronometro/>
    </div>
     
  );
}

export default App;
