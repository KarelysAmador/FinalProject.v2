import React from 'react';
import './App.css';
import LoginMain from "./componentes/login/LoginMain.jsx";
import AlumnoEvalucionMain from './componentes/alumnos/alumno-evaluacion/AlumnoEvaluacionMain.jsx';
import ManagerEvaluacionGrupalMain from './componentes/manager/Manager-Evaluacion-Grupal/ManagerEvaluacionGrupalMain.jsx';
import ManagerEvaluacionIndividualMain from './componentes/manager/Manager-Evaluacion-Individual/ManagerEvaluacionIndividualMain.jsx';

const App = () => {
  return (
    <div className="App">
      <ManagerEvaluacionIndividualMain/>

    </div>
  );
};

export default App;
