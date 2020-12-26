import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import "./App.css";

function Cabecera() {
    return(

        <Navbar id="navbar" variant="dark">
        <Navbar.Brand href="#home">HiPeople</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="./Inicio">Hola</Nav.Link>
          <Nav.Link href="./Search">Enséñame</Nav.Link>
          <Nav.Link href="./Delete">Adiós</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
    )
}

export default Cabecera;
