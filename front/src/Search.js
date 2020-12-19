import { useEffect, useState } from "react";

function Search(props) {
  const [sexo, setSexo] = useState("")
  const [respuesta, setRespuesta] = useState("");
  const [edadTop, setEdadtop] = useState(0);
  const [edadDown, setEdaddown] = useState(0);
  const [ciudad, setCiudad] = useState("");
  const [aficiones, setAficiones] = useState("");
  const [imprimir, setImprimir] = useState("")
  const [llamada, setLlamada] = useState("")
  
  const eligeSexo = (e) => {
    setSexo(e.target.value)
  }
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

  useEffect(()=>{
    fetch("http://localhost:3001/buscar/usuarios", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sexo: sexo,
      edadTop: edadTop,
      edadDown: edadDown,
      ciudad: ciudad,
      aficiones: aficiones,
    }),
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (datos) {
      setRespuesta(datos)
      console.log("respuesta OK")
      const contactos = respuesta.map(function(lista) {
        return <li>{lista}</li>
      })
      setImprimir(contactos)
    });
  },[llamada])

 const buscar = () => {
    setLlamada(true)
  }


  return (
    <div>
      <h2>
        <strong>¿Qué clase de aventura has venido a buscar?</strong>
      </h2>
      <p>
        ¡Pide por esa boquita! Nosotros te haremos una selección de lo mejorcito
        que tenemos.{" "}
      </p>
      <select onChange={eligeSexo}>
        <option disabled selected>
          Estoy buscando...
        </option>
        <option value="Hombre">Hombre</option>
        <option value="Mujer">Mujer</option>
      </select>
      <input
        type="Text"
        value={edadTop}
        onChange={eligeEdadtop}
        placeholder="Edad mínima"
      ></input>
      <input
        type="Text"
        value={edadDown}
        onChange={eligeEdaddown}
        placeholder="Edad máxima"
      ></input>
      <select onChange={eligeCiudad}>
        <option disabled selected>
          Que viva en...
        </option>
        <option value="Madrid">Madrid</option>
        <option value="Barcelona">Barcelona</option>
      </select>
      <select onChange={eligeAficion}>
        <option disabled selected>
          Que le guste...
        </option>
        <option value="Deporte">Hacer deporte</option>
        <option value="cine">Ir al cine</option>
        <option value="Musica">Escuchar música</option>
        <option value="Compras">Ir de compras</option>
        <option value="Teatro">Ir al teatro</option>
        <option value="Fiesta">Salir de fiesta</option>
        <option value="Leer">Leer</option>
        <option value="Viajar">Viajar</option>
        <option value="Videojuegos">Jugar a videojuegos</option>
      </select>
      <button onClick={buscar}>Buscar</button>
      <div>
        <div>{imprimir}</div>
      </div>
      </div>
      
  );
  }

export default Search;
