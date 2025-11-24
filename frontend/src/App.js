import './App.css';
import { useState, useEffect } from 'react';
import TablaCarros from './components/tablas/tabla';
import FormCrearCarro from './components/formularios/formCrearCarro';
import FormActualizarCarro from './components/formularios/formActualizarCarro';
import FormEliminarCarro from './components/formularios/formEliminarCarro';


const API_URL = "http://104.248.75.163:3010";

function App() {
  const [carros, setCarros] = useState([]);
  const [carroSeleccionado, setCarroSeleccionado] = useState(null);
  const [carroEliminar, setCarroEliminar] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/carros`)
      .then((r) => r.json())
      .then((data) => setCarros(data))
      .catch((err) => console.error("Error al cargar carros:", err));
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
        <h1>  App nuevos carros</h1>

        {/* Tabla de carros */}
        <TablaCarros
          carros={carros}
          onEditar={setCarroSeleccionado}
          onEliminar={setCarroEliminar}
        />

        {/* Formularios */}
        <div className="formularios">
          
          {/* Crear */}
          <FormCrearCarro setCarros={setCarros} carros={carros} />

          

          {/* Actualizar */}
          {carroSeleccionado && (
            <FormActualizarCarro
              carro={carroSeleccionado}
              onActualizar={actualizarCarro}
              onCerrar={() => setCarroSeleccionado(null)}
            />
          )}

          {/* Eliminar */}
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
