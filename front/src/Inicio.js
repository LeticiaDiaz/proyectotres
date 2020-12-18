import { useState } from "react";

function Inicio(props) {
  const [nombre, setNombre] = useState("");
  const [sexo, setSexo] = useState("");
  const [edad, setEdad] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [buscando, setBuscando] = useState("");
  const [aficiones, setAficiones] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [foto, setFoto] = useState("");
  const [email, setEmail] = useState("");

  const registroNombre = (e) => {
    setNombre(e.target.value);
  };
  const registroSexo = (e) => {
    setSexo(e.target.value);
  };
  const registroEdad = (e) => {
    setEdad(e.target.value);
  };
  const registroCiudad = (e) => {
    setCiudad(e.target.value);
  };
  const registroBuscando = (e) => {
    setBuscando(e.target.value);
  };
  const registroAficiones = (e) => {
    setAficiones(e.target.value);
  };
  const registroFoto = (e) => {
    setFoto(e.target.value);
  };
  const registroEmail = (e) => {
    setEmail(e.target.value);
  };

  function registrar() {
    fetch("http://localhost:3001/nuevousuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: nombre,
        sexo: sexo,
        edad: edad,
        ciudad: ciudad,
        buscando: buscando,
        aficiones: aficiones,
        foto: foto,
        email: email,
      }),
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (datos) {
        setMensaje(datos.mensaje);
        console.log(datos)
      });
  }

  if (mensaje == "") {
    return (
      <div>
        <h2>
          <strong>¿Qué hace alguien como tú en un sitio como este?</strong>
        </h2>
        <p>
          ¡Queremos conocerte mejor! Háblanos un poco de ti, dónde vives, qué te
          gusta hacer en tu tiempo libre... Cuanto más nos cuentes, ¡más fácil
          será buscar gente afín a ti!
        </p>
        <input
          type="text"
          value={nombre}
          onChange={registroNombre}
          placeholder="Nombre"
        ></input>
        <select onChange={registroSexo}>
          <option disabled selected>
            Sexo
          </option>
          <option value="Hombre">Hombre</option>
          <option value="Mujer">Mujer</option>
        </select>
        <input
          type="text"
          value={edad}
          onChange={registroEdad}
          placeholder="Edad"
        ></input>
        <select onChange={registroCiudad}>
          <option disabled selected>
            Vivo en...
          </option>
          <option value="Madrid">Madrid</option>
          <option value="Barcelona">Barcelona</option>
        </select>
        <select onChange={registroBuscando}>
          <option disabled selected>
            Estoy buscando...
          </option>
          <option value="Hombre">Hombre</option>
          <option value="Mujer">Mujer</option>
        </select>
        <select onChange={registroAficiones}>
          <option disabled selected>
            Aficiones
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
        </select>
        <button onClick={registrar}>Registrarme</button>
      </div>
    );
  } else {
    return <h2>{mensaje}</h2>;
  }
}

export default Inicio;
