import { useState } from "react";

function Search(props) {
  const [sexo, setSexo] = useState();
  const [edad, setEdad] = useState();
  const [ciudad, setCiudad] = useState();
  const [aficion, setAficion] = useState();

  const eligeSexo = (e) => {
    setSexo(e.target.value);
  };
  const eligeEdad = (e) => {
    setEdad(e.target.value);
  };
  const eligeCiudad = (e) => {
    setCiudad(e.target.value);
  };
  const eligeAficion = (e) => {
    setAficion(e.target.value);
  };


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
        value={edad}
        onChange={eligeEdad}
        placeholder="Edad mínima"
      ></input>
      <input
        type="Text"
        value={edad}
        onChange={eligeEdad}
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
      </div>
  );
  }

export default Search;
