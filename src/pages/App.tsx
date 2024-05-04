
import React from 'react';
import Lista from '../components/Listas';
import Formulario from '../components/Formulario';
import style from "./App.module.scss"



function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario/>
      <Lista/>
    </div>
     
  );
}

export default App;
