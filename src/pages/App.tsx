
import React from 'react';
import Lista from '../components/Listas';
import Formulario from '../components/Formulario';
import style from "./App.module.scss"
import Cronometro from '../components/cronometro';


function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario/>
      <Lista/>
      <Cronometro/>
    </div>
     
  );
}

export default App;
