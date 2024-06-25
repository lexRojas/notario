import React, { useState, useEffect }  from "react";
import Filtro from "../components/Calculos/Filtro";
import { TablaTarifas } from "../components/Calculos/TablaTarifas";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Calculos = () => {

  const navegar = useNavigate()

  const URL = "https://mysql-backend-8bc5e268b39e.herokuapp.com/";

  const [id_acto, setId_acto] = useState(-1);
  const [monto, setMonto] = useState(0);
  const [calcular_flag, setCalcular_Flag] = useState(false);
  const [registros, setRegistros] = useState(null);

  const calcular = () => {
    setCalcular_Flag(true)
  };

  const irMenu=()=>{
    navegar("/")
  }
 

  useEffect(() => {
    if (calcular_flag) {
      axios
        .get(URL+"get_monto", {
          params: { id_acto: id_acto, monto: monto },
          headers: {
            'Cache-Control': 'no-store',
            'Pragma': 'no-cache',
            'Expires': '0'
          }
        })
        .then((res) => {
          setRegistros(res.data);
          setCalcular_Flag(false)
        });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [calcular]);

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
            {registros?(<TablaTarifas registros={registros} />):(<></>) }
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
