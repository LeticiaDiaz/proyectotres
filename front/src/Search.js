import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Card,
  CardDeck,
  Modal,
  Alert,
} from "react-bootstrap";
import "./App.css";

function Search(props) {
  const [modalShow, setModalShow] = useState(false);
  const [sexo, setSexo] = useState("");
  const [respuesta, setRespuesta] = useState([]);
  const [edadTop, setEdadtop] = useState();
  const [edadDown, setEdaddown] = useState();
  const [ciudad, setCiudad] = useState("");
  const [aficiones, setAficiones] = useState("");
  const [buscando, setBuscando] = useState("");
  const [foto, setFoto] = useState("");
  const [email, setEmail] = useState("");
  const [feedBack, setFeedback] = useState("");

  const eligeSexo = (e) => {
    setSexo(e.target.value);
  };
  const eligeEdadtop = (e) => {
    setEdadtop(e.target.value);
  };
  const eligeEdaddown = (e) => {
    setEdaddown(e.target.value);
  };
  const eligeCiudad = (e) => {
    setCiudad(e.target.value);
  };
  const eligeAficion = (e) => {
    setAficiones(e.target.value);
  };
  const eligeBuscando = (e) => {
    setBuscando(e.target.value);
  };

  const buscar = () => {
    respuestaHTML = "";
    setFeedback("");
    fetch("http://localhost:3001/buscar/usuarios", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sexo: sexo,
        edadTop: parseInt(edadTop),
        edadDown: parseInt(edadDown),
        ciudad: ciudad,
        aficiones: aficiones,
        buscando: buscando,
      }),
    })
      .then(function (res) {
        return res.json();
      })
      .then((datos) => {
        if (datos.error) {
          setFeedback(<Alert variant="danger">{datos.mensaje}</Alert>);
          setRespuesta(datos.datos);
        } else {
          setRespuesta(datos.datos);
        }
      });
  };

  function FormularioContacto(props) {
    const [asunto, setAsunto] = useState("");

    const manageAsunto = (e) => {
      setAsunto(e.target.value);
    };
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Contactar
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Asunto:</Form.Label>
                <Form.Control
                  as="input"
                  onChange={manageAsunto}
                  value={asunto}
                />
              </Form.Group>
            </Form.Row>
            <Form.Group>
              <Form.Label>Mensaje:</Form.Label>
              <Form.Control as="textarea" rows={8} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Enviar</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  var respuestaHTML = respuesta.map((lista) => {
    return (
      <Card>
        <Card.Img style={{ maxWidth: 250 }} variant="top" src={lista.foto} />
        <Card.Body>
          <Card.Title>{lista.nombre}</Card.Title>
          <Card.Text>
            <p> Edad: {lista.edad} </p>
            <p> Ciudad: {lista.ciudad} </p>
            <p> Buscando: {lista.buscando} </p>
            <p> Aficiones: {lista.aficiones}</p>
          </Card.Text>
          <Button onClick={() => setModalShow(true)} variant="primary">
            Contactar
          </Button>
        </Card.Body>
      </Card>
    );
  });

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h2>
              <strong>Descubrir</strong>
            </h2>
            <p>
              Guarda tus búsquedas para encontrar fácilmente a lxs solterxs
              afines a ti.
            </p>
            <Form>
              <Form.Group>
                <Form.Control as="select" onChange={eligeSexo}>
                  <option disabled selected>
                    Soy...
                  </option>
                  <option value="Hombre">Hombre</option>
                  <option value="Mujer">Mujer</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Control as="select" onChange={eligeBuscando}>
                  <option disabled selected>
                    Estoy buscando...
                  </option>
                  <option value="Hombre">Hombre</option>
                  <option value="Mujer">Mujer</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput2">
                <Form.Control
                  value={edadDown}
                  onChange={eligeEdaddown}
                  type="text"
                  placeholder="Edad mínima"
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput2">
                <Form.Control
                  value={edadTop}
                  onChange={eligeEdadtop}
                  type="text"
                  placeholder="Edad máxima"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control as="select" onChange={eligeCiudad}>
                  <option disabled selected>
                    Que viva en...
                  </option>
                  <option value="Madrid">Madrid</option>
                  <option value="Barcelona">Barcelona</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Control as="select" onChange={eligeAficion}>
                  <option disabled selected>
                    Que le guste...
                  </option>
                  <option value="Deporte">Hacer deporte</option>
                  <option value="Peliculas">Ir al cine</option>
                  <option value="Musica">Escuchar música</option>
                  <option value="Compras">Ir de compras</option>
                  <option value="Teatro">Ir al teatro</option>
                  <option value="Fiesta">Salir de fiesta</option>
                  <option value="Leer">Leer</option>
                  <option value="Viajar">Viajar</option>
                  <option value="Videojuegos">Jugar a videojuegos</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Button onClick={buscar}>Buscar</Button>
              </Form.Group>
              <Form.Group>{feedBack}</Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <CardDeck> {respuestaHTML} </CardDeck>
        </Row>
      </Container>
      <FormularioContacto show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default Search;
