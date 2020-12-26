import {useState } from "react";

function Delete(props) {
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");

  const borraNombre = (e) => {
    setNombre(e.target.value);
  };

  const eliminar =()=>{
        console.log(nombre)
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
          setMensaje(datos.mensaje);
          console.log(datos.datos)
        });
  
      }
    
    
  
  if (mensaje === "") {
    return (
      <div>
        <h2>
          <strong>No intentes atraparme, ya he aprendido a volar</strong>
        </h2>
        <p>
          ¿Has encontrado el amor? ¿O te has dado cuenta de que solx se está de
          maravilla?
        </p>
        <p>
          Si ya no quieres continuar con nosotros sólo tienes que hacer click a
          continuación.
        </p>
        <input
          type="text"
          value={nombre}
          onChange={borraNombre}
          placeholder="Nombre"
        ></input>
        <button onClick={eliminar}>Darme de baja</button>
      </div>
    );
  } else {
    return <h2>{mensaje}</h2>;
  }
}

export default Delete;
