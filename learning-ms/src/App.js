import React from 'react';
import './App.css';
import LoginMain from "./componentes/login/LoginMain.jsx";
import AlumnoEvalucionMain from './componentes/alumnos/alumno-evaluacion/AlumnoEvaluacionMain.jsx';
import ManagerEvaluacionGrupalMain from './componentes/manager/Manager-Evaluacion-Grupal/ManagerEvaluacionGrupalMain.jsx';
import AutoCloseExample from './componentes/manager/Manager-Evaluacion-Grupal/botonesdropdown.jsx';
import Table from './componentes/manager/Manager-Evaluacion-Grupal/tablaevaluacion.jsx';
import Button from './componentes/manager/Manager-Evaluacion-Grupal/botonguardar.jsx';
import TypesExample from './componentes/manager/Manager-Evaluacion-Grupal/botonguardar.jsx';

const App = () => {
  return (
    <div className="App">
      <LoginMain />
    </div>
  );
};

export default App;
