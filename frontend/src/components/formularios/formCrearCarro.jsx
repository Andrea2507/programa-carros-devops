import React, { useState } from 'react';
import Boton from '../botones/boton.jsx';

const API_URL = "http://104.248.75.163:3010";

function FormCrearCarro({ setCarros, carros }) {
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [anio, setAnio] = useState('');
  const [color, setColor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("📤 ENVIANDO:", { marca, modelo, anio, color });

    fetch(`${API_URL}/carros`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ marca, modelo, anio, color }),
    })
      .then(async (response) => {
        console.log("📥 STATUS:", response.status);

        let data;
        try {
          data = await response.json();
        } catch (err) {
          console.error("❌ ERROR AL PARSEAR JSON:", err);
          throw err;
        }

        console.log("📥 DATA RESPONSE:", data);
        return data;
      })
      .then((data) => {
        if (!data || !data.id) {
          console.error("❌ ERROR: el backend no devolvió un objeto válido:", data);
          return;
        }

        setCarros([...carros, data]);

        setMarca('');
        setModelo('');
        setAnio('');
        setColor('');

        console.log("✅ CARRO AGREGADO CORRECTAMENTE");
      })
      .catch((err) => {
        console.error("❌ ERROR FETCH:", err);
      });
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
