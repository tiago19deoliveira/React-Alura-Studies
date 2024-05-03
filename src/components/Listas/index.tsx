
import React from "react";
import style from './lista.module.scss'
import Item from "./Item/item";

function Lista(){
  const tarefas =[{
    tarefa: 'React',
    tempo: '02:00:00',
  },{
    tarefa: 'JavaScript',
    tempo: '01:00:00'
  },{
    tarefa: 'TypeScript',
    tempo:'04:00:00'
    },{
        tarefa: 'Banco De Dados',
        tempo : '10:00:00'
    }]

 return (
    <aside className={style.listaTarefas}>
     <h2>Estudos do Dia</h2>
     <ul>
       {tarefas.map((item,index) => (
       <Item
       key={index}
       {...item}
       />
        ))}</ul> 
  </aside>
)

}

export default Lista