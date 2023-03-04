import React from "react";
import NavbarMain from "../../navbar/NavbarMain";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

const AlumnoEvalucionMain = () => {
    return (
        <>
<NavbarMain/>
<Container className="container-datos-ai">
<div className="contenidoAlumno">
    <h1 className="alumno-name-ai">Linda Rosado</h1>
<a className="alumno-gh-ai" href="https://github.com/Lindarosado16" target="_blank" rel="noreferrer">https://github.com/Lindarosado16</a>
</div>

</Container>
<Container className="container-data-table-ai">
<Table  borderless hover variant="lght" size="md" >
      <thead className="cabecera-tabla-alumno-individual">
        <tr>
          <th>Modulo</th>
          <th>Semana</th>
          <th>Asistencia 1</th>
          <th>Asistencia 2</th>
          <th>Tarea</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Intro</td>
          <td>1</td>
          <td>Yes</td>
          <td>No</td>
          <td>Done</td>
        </tr>

        <tr>
          <td>Intro</td>
          <td>2</td>
          <td>Yes</td>
          <td>No</td>
          <td>Done</td>
        </tr>

        <tr>
          <td>HTML/CSS</td>
          <td>1</td>
          <td>Yes</td>
          <td>No</td>
          <td>Done</td>
        </tr>
        
      </tbody>
    </Table>
</Container>
        </>
    ) ;
} ;
export default AlumnoEvalucionMain