import { useState } from "react";
import "../styles/style.css";

export const Card = ({
  imagen,
  titulo,
  descripcion,
  precio,
  handleAgregar,
  handleQuitar,
}) => {
  const [added, setAdded] = useState(false);

  const clickAgregar = () => {
    handleAgregar();
    setAdded(true);
  };
  const clickQuitar = () => {
    handleQuitar();
    setAdded(false);
  };

  return (
    <div className="tarjeta">
      <img
        src={imagen}
        alt={titulo}
        title={titulo}
        className="tarjeta-imagen"
      />

      <div className="tarjeta-contenido">
        <h3 className="tarjeta-titulo">{titulo}</h3>
        <p className="tarjeta-descripcion">{descripcion}</p>
        <p className="tarjeta-precio">${precio}</p>

        {added ? (
          <button type="button" className="boton-quitar" onClick={clickQuitar}>
            Quitar del Carito
          </button>
        ) : (
          <button
            type="button"
            className="boton-agregar"
            onClick={clickAgregar}
          >
            Agregar del Carito
          </button>
        )}
      </div>
    </div>
  );
};
