import './App.css';
import { useState, useEffect } from 'react';
import TablaCarros from './components/tablas/tabla';
import FormCrearCarro from './components/formularios/formCrearCarro';
import FormActualizarCarro from './components/formularios/formActualizarCarro';
import FormEliminarCarro from './components/formularios/formEliminarCarro';
import FormBuscarCarro from './components/formularios/formBuscar'; // 👈 agregado

function App() {
  const [carros, setCarros] = useState([]);
  const [carroSeleccionado, setCarroSeleccionado] = useState(null);
  const [carroEliminar, setCarroEliminar] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/carros")
      .then((r) => r.json())
      .then((data) => setCarros(data))
  }, []);

  const actualizarCarro = (carroActualizado) => {
    setCarros((prev) =>
      prev.map((c) => (c.id === carroActualizado.id ? carroActualizado : c))
    );
  };

  const eliminarCarro = (id) => {
    setCarros((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lista de Carros </h1>

        <TablaCarros
          carros={carros}
          onEditar={setCarroSeleccionado}
          onEliminar={setCarroEliminar}
        />

        <div className="formularios">
          <FormCrearCarro setCarros={setCarros} carros={carros} />

           
          {carroSeleccionado && (
            <FormActualizarCarro
              carro={carroSeleccionado}
              onActualizar={actualizarCarro}
              onCerrar={() => setCarroSeleccionado(null)}
            />
          )}
         
          {carroEliminar && (
            <FormEliminarCarro
              carro={carroEliminar}
              onEliminar={eliminarCarro}
              onCerrar={() => setCarroEliminar(null)}
            />
          )}

        
 
        </div>
      </header>
    </div>
  );
}

export default App;
