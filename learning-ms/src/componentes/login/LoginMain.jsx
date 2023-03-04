import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import logo from "../../utils/LearningPlatform-bg-white.png";

const LoginMain = () => {
  return (
    <Container fluid className="container-login">
      <Container className="container-formulario">
        <img src={logo} alt="logo-base" className="logo-login" />
        <Form className="formulario-login">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo Electronico</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button
            className="formulario-button-login"
            variant="primary"
            type="submit"
          >
            Iniciar sesión
          </Button>
          <br></br>
          <a href="">¿Olvidaste tu contraseña?</a>
        </Form>
      </Container>
    </Container>
  );
};
export default LoginMain;
