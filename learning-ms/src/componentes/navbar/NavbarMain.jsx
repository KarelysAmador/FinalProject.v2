import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import imgLogo from '../../utils/LearningPlatform-bg-black.png'
import AlumnoEvalucionMain from "../alumnos/alumno-evaluacion/AlumnoEvaluacionMain.jsx";

const NavbarMain = () => {
    return (
       <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
            <img
            src={imgLogo}
            alt="logo-learning"
            width="120"
            />
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
  <Nav className="me-auto">
    <Nav.Link href="#home">Gestión de Alumnos</Nav.Link>
    <Nav.Link href="#link">Gestión de Grupos</Nav.Link>
    <NavDropdown title="Evaluación" id="basic-nav-dropdown">
      <NavDropdown.Item href="#action/1.2" >Individual</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2">Grupal</NavDropdown.Item>
    </NavDropdown>
  </Nav>
</Navbar.Collapse>
      </Container>
    </Navbar>
    ) ;
} ;
export default NavbarMain