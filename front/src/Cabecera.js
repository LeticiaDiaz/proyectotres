import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav} from "react-bootstrap";
import "./App.css";

function Cabecera() {
    return(

        <Navbar id="navbar" variant="dark">
        <Navbar.Brand href="/">HiPeople</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="./Inicio">Mi perfil</Nav.Link>
          <Nav.Link href="./Search">Búsqueda</Nav.Link>
          <Nav.Link href="./Delete">Adiós</Nav.Link>
        </Nav>
      </Navbar>
    )
}

export default Cabecera;
