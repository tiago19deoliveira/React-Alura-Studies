
import React from "react";
import style from './lista.module.scss'
import Item from "./Item/item";
import {useState} from "react";

function Lista(){
 const [tarefas, setTarefas]= useState([{
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
  }])
 
 return (
    <aside className={style.listaTarefas}>
     <h2 onClick={()=>{setTarefas([...tarefas, {tarefa:"Estudar País", tempo:"03:00:00"}])}
     } >Estudos do Dia</h2>
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