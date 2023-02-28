import React from 'react';
import './App.css';
import LoginMain from "./componentes/login/LoginMain.jsx";
import AlumnoEvalucionMain from './componentes/alumnos/alumno-evaluacion/AlumnoEvaluacionMain.jsx';
import ManagerEvaluacionGrupalMain from './componentes/manager/Manager-Evaluacion-Grupal/ManagerEvaluacionGrupalMain.jsx';

function App() {
  return (
    <div className="App">
     
     <ManagerEvaluacionGrupalMain/>
     
    </div>
  );
}

export default App;
