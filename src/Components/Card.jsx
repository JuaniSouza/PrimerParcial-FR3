import "../App.css"

const Card = ({name, cancion, genero}) => {
  return (
    <div className="card">
      {<h2>Datos que ingreso:</h2>}
      {name && <span><strong>Nombre:</strong> {name}</span>}
      {cancion && <span><strong>Cancion Favorita:</strong> {cancion}</span>}
      {genero && <span><strong>Genero:</strong> {genero}</span>}
    </div>
  );
};

export default Card;
