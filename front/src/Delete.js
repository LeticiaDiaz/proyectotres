import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Col, Row, Container, Button, Alert } from "react-bootstrap";
import "./App.css";

function Delete(props) {
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");

  const borraNombre = (e) => {
    setNombre(e.target.value);
  };

  const eliminar = () => {
    console.log(nombre);
    fetch("http://localhost:3001/eliminarusuario", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nombre: nombre }),
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (datos) {
        datos.error
          ? setMensaje(<Alert variant="danger">{datos.mensaje}</Alert>)
          : setMensaje(<Alert variant="success">{datos.mensaje}</Alert>);
        console.log(datos.datos);
      });
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h2>
              <strong>Suspensión de tu perfil</strong>
            </h2>
            <p>
              ¡Atención! Si te marchas de HiPeople dejarás de tener acceso a:
            </p>
            <p>Toda la información o el contenido presente en tu perfil.</p>
            <p>Todos tus contactos.</p>
            <p>Todo el historial de tus mensajes enviados y recibidos.</p>
            <p> <strong>Si ya no quieres continuar con nosotros sólo tienes que poner tu nombre a continuación</strong></p>
            <Form>
              <Form.Group>
                <input
                  type="text"
                  value={nombre}
                  onChange={borraNombre}
                  placeholder="Nombre"
                ></input>
              </Form.Group>
              <Form.Group>
                <Button onClick={eliminar}>Darme de baja</Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>{mensaje}</Row>
      </Container>
    </>
  );
}

export default Delete;
