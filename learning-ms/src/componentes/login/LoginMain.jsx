import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import logo from "../../utils/LearningPlatform-bg-white.png";
import {useState} from "react";

const LoginMain = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = (e) =>{
        e.preventDefault(alert(`Mi email es ${email} y mi contraseña es ${password}`));

    }

  return (
    <Container fluid className="container-login">
      <Container className="container-formulario">
        <img src={logo} alt="logo-base" className="logo-login" />
        <Form className="formulario-login">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo Electronico</Form.Label>
            <Form.Control
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button
            onClick={handleClick}
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