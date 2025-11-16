function TablaCarros({ carros, onEditar, onEliminar }) {
  return (
    <div>
   
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Año</th>
            <th>Color</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {carros.map((carro) => (
            <tr key={carro.id}>
              <td>{carro.id}</td>
              <td>{carro.marca}</td>
              <td>{carro.modelo}</td>
              <td>{carro.anio}</td>
              <td>{carro.color}</td>
              <td>
                <button onClick={() => onEditar(carro)}>Actualizar</button>
                <button onClick={() => onEliminar(carro)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaCarros;
