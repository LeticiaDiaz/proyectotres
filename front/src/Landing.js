import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./App.css";

function Landing() {
  return (
    <div>
      <div className="bg">
        <Container>
          <h2 style={{ color: "#FFFFFF" }}>
            <strong>
              Cada mes 300 conversaciones comienzan en HiPeople <br /> Mas de
              500 parejas se han conocido a través de HiPeople en España <br />{" "}
              Cada mes más de 200 historias reales empiezan en HiPeople
            </strong>
          </h2>
        </Container>
      </div>
    </div>
  );
}

export default Landing;
