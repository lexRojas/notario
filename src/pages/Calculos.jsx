import React, { useState } from "react";
import Filtro from "../components/Calculos/Filtro";
import { TablaTarifas } from "../components/Calculos/TablaTarifas";
import { useNavigate } from "react-router-dom";

const Calculos = () => {

  const navegar = useNavigate()


  const [id_acto, setId_acto] = useState(-1);
  const [monto, setMonto] = useState(0);
  const [calcular_flag, setCalcular_Flag] = useState(false);


  const calcular = () => {
    setCalcular_Flag(true)
  };

  const irMenu=()=>{
    navegar("/")
  }


  return (
    <div className="contenedor">
      <div className="card">
        <div className="card-titulo">
          <h1>Calculadora Notarial</h1>
        </div>
        <div className="card-cuerpo">
            <Filtro setId_acto={setId_acto} setMonto={setMonto}/>
        </div>
        <div className="card-cuerpo">
            {calcular_flag?(<TablaTarifas id_acto={id_acto} monto={monto} calcular ={calcular_flag}/>):(<></>) }
        </div>
        <div className="card-buttonPanel">
        <button className="my-button" onClick={calcular}>
          {" "}
          Calcular{" "}
        </button>
        <button 
                  className="my-button"
                  onClick={irMenu}
                > Cancelar </button>
      </div>
      </div>
    </div>
  );
};

export default Calculos;
