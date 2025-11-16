import React, { useState } from "react";
import Boton from '../botones/boton'

function FormBuscarCarro() {

    const [id, setId] = useState(0);
    const [carro, setCarro] = useState({});
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [anio, setAnio] = useState('');
    const [color, setColor] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();

  
        fetch(`http://localhost:3001/carros/${id}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setCarro(data);
            setMarca(data.marca);
            setModelo(data.modelo);
            setAnio(data.anio);
            setColor(data.color);
            setId(data.id);
        })
        .catch((error) => console.error("Error:", error));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <h2>Buscar carro por id</h2>
                    <label>Id: </label>
                    <input 
                        type="number"
                        min="0"
                        value={id}
                        onChange={(event) => setId(event.target.value)}
                    />
                </div>
                <Boton texto="Buscar Carro"/>
            </form>

            <h3>Id: {id}</h3>
            <h3>Marca: {marca}</h3>
            <h3>Modelo: {modelo}</h3>
            <h3>Año: {anio}</h3>
            <h3>Color: {color}</h3>
        </div>
    );
}

export default FormBuscarCarro;
