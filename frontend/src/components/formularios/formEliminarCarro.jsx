import Boton from "../botones/boton";

const API_URL = "http://104.248.75.163:3010";

function FormEliminarCarro({ carro, onEliminar, onCerrar }) {
  const eliminarCarro = (e) => {
    e.preventDefault();
    const id = Number(carro.id ?? carro);

    fetch(`${API_URL}/carros/${id}`, { method: "DELETE" })
      .then(() => {
        onEliminar(id);
        onCerrar();
      })
      .catch(console.error);
  };

  return (
    <div>
      <form onSubmit={eliminarCarro}>
        <p>
          ¿Seguro que deseas eliminar el carro{" "}
          <b>{carro.marca} {carro.modelo}</b>?
        </p>

        <Boton type="submit" texto="Eliminar" />
        <button type="button" onClick={onCerrar}>Cancelar</button>
      </form>
    </div>
  );
}

export default FormEliminarCarro;
