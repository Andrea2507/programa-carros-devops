import React, { useState } from 'react';
import Boton from '../botones/boton.jsx';

const API_URL = "http://104.248.75.163:3001";

function FormCrearCarro({ setCarros, carros }) {
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [anio, setAnio] = useState('');
  const [color, setColor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`${API_URL}/carros`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        marca,
        modelo,
        anio,
        color,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCarros([...carros, data]);
        setMarca('');
        setModelo('');
        setAnio('');
        setColor('');
      })
      .catch((err) => console.error('Error al crear carro:', err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Agregar carro</h2>

        <label>Marca</label>
        <input
          type="text"
          value={marca}
          onChange={(e) => setMarca(e.target.value)}
        />
        <br /><br />

        <label>Modelo</label>
        <input
          type="text"
          value={modelo}
          onChange={(e) => setModelo(e.target.value)}
        />
        <br /><br />

        <label>Año</label>
        <input
          type="number"
          min="1900"
          value={anio}
          onChange={(e) => setAnio(e.target.value)}
        />
        <br /><br />

        <label>Color</label>
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <br /><br />

        <Boton texto="Enviar" />
      </form>
    </div>
  );
}

export default FormCrearCarro;
