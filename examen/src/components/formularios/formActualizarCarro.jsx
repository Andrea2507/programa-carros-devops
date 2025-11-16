import { useState } from "react";
import Boton from "../botones/boton";

function FormActualizarCarro({ carro, onActualizar, onCerrar }) {
  const [marca, setMarca] = useState(carro.marca);
  const [modelo, setModelo] = useState(carro.modelo);
  const [anio, setAnio] = useState(carro.anio);
  const [color, setColor] = useState(carro.color);

  const actualizarCarro = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/carros/${carro.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        marca: marca,
        modelo: modelo,
        anio: anio,
        color: color,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        onActualizar(data);
        onCerrar();
      })
      .catch(console.error);
  };

  return (
    <div>
      <form onSubmit={actualizarCarro}>
        <h1>Actualizar carro</h1>
        <label>Marca</label>
        <br />
        <input
          type="text"
          value={marca}
          onChange={(e) => setMarca(e.target.value)}
        />
        <br />

        <label>Modelo</label>
        <br />
        <input
          type="text"
          value={modelo}
          onChange={(e) => setModelo(e.target.value)}
        />
        <br />

        <label>Año</label>
        <br />
        <input
          type="number"
          value={anio}
          onChange={(e) => setAnio(e.target.value)}
        />
        <br />

        <label>Color</label>
        <br />
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <br />

        <Boton type="submit" texto="Actualizar" />
        <Boton onClick={onCerrar} texto="Cancelar" />
      </form>
    </div>
  );
}

export default FormActualizarCarro;
