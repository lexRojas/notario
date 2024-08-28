import React from "react";
import reportIco from "..//images/report.svg";
import calculosIco from "..//images/calculos.svg";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

export const Menu = () => {
  const usuario = useSelector((state) => state.user.value);

  console.log(usuario);

  if (usuario) {
    return (
      <div className="contenedor">
        <div className="card-menu">
          <div className="card-titulo">
            <h1>Herramientas Notario</h1>
          </div>
          <div className="card-cuerpo">
            <div className="card-item">
              <Link to="/indice">
                {" "}
                <img src={reportIco} alt="Reportes"></img>{" "}
              </Link>
              <span>Indice</span>
            </div>
            <div className="card-item">
              <Link to="/calculos">
                <img src={calculosIco} alt="Calculos"></img>
              </Link>
              <span>Calculos</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="contenedor">
        <div className="card-menu">
          <h1>Error no puede ingresar</h1>
        </div>
      </div>
    );
  }
};
