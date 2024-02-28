import { useState } from "react";
import Card from "./Card";
import "../App.css"

const Form = () => {
const [name, setName] = useState("");
const [cancion, setCancion] = useState("");
const [genero, setGenero] = useState("");   

const [show, setShow] = useState(false);
const [error, setError] = useState(false);

const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim().length >= 3 && cancion.length >=6){
    setShow(true);
    setError(false);
    } else {
    setError(true);
    }
};

return (
    <div className="form">
    {
        show ? null :
        <span>Complete el Formulario</span>
    }

    {show ? null :
    <form className="form-submit" onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input type="text" onChange={(event) => setName(event.target.value)} />

        <label>Cancion Favorita</label>
        <input type="text" onChange={(event) => setCancion(event.target.value)} />

        <label>Genero Favorito</label>
        <input type="text" onChange={(event) => setGenero(event.target.value)} />

        <button>Enviar</button>
    </form>
    }

    {show && (
    <Card name={name} cancion={cancion} genero={genero} />
    )}


    
    {error && <strong style={{color: "red"}}>Por favor chequea que la información sea correcta</strong>}
    </div>
);
};

export default Form;
