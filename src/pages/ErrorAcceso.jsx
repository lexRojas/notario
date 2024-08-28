import React from "react";
import logo from '../images/logo.png'

export const ErrorAcceso = () => {
  return (
    <div className="contenedor">
      <div className="card-menu">
        <div className="card-titulo">
            <img src={logo} alt="logo" className="logoTitulo" />
          <h2>Error no puede ingresar</h2>
        </div>
      </div>
    </div>
  );
};
