import React from "react";
import { Link } from "react-router-dom";
import "../css/introduction.css";

const Introduction = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="text text-center d-flex flex-column justify-content-center align-items-evenly">
        <h1 className="text-light">
          QUIERES INGRESAR AL MERCADO DIGITAL MAS GRANDE DEL MUNDO
        </h1>
        <p className="text-light px-5">
          LA APLICACION TOP 1 EN VENTAS DE EQUIPOS TECNOLOGICOS
        </p>
      </div>
      <Link to="/signup">
        <button className="button mt-4 p-2 d-flex justify-content-center align-items-center">
          <p>EMPIEZA HOY</p>
        </button>
      </Link>
    </div>
  );
};

export default Introduction;
