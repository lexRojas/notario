import React, { useEffect, useState } from "react";
import axios from "axios";

export const TablaIndice = (props) => {
  const [datos, setdatos] = useState([]);
  const URL = "https://mysql-backend-8bc5e268b39e.herokuapp.com/";

  let { fechaInicio } = props;
  let { fechaFinal } = props;

  useEffect(() => {
    const endpoint = URL + "indice_by_dates";
    const getInfo = async () => {
      await axios
        .get(endpoint, {
          params: {
            fecha_inicio: fechaInicio,
            fecha_final: fechaFinal,
          }
        })
        .then((res) => {
          console.log('set de datos ....')
          console.log(res.data);
          setdatos(res.data);
        })
        .catch((error) => {
          alert(error);
        });
    };

    getInfo();
  }, [fechaFinal, fechaInicio]);

  if (datos.length > 0) {
    return (
      <div className="table-contenedor">
        <table id="tabla-index">
          <thead className="table-encabezado">
            <tr>
              <th className="col-narrow">TOMO</th>
              <th className="col-narrow">FOL.INICIAL</th>
              <th className="col-narrow">FOL.FINAL</th>
              <th className="col-narrow">NUMERO</th>
              <th className="col-narrow">FECHA</th>
              <th className="col-narrow">HORA</th>
              <th className="col-wide">ACTO O CONTRATO</th>
              <th className="col-wide-xl">PARTES</th>
            </tr>
          </thead>
          <tbody>
            {datos.map(
              ({
                ValoresUsuales
               }) => (
                <tr key={ValoresUsuales.escritura}>
                  <td> {ValoresUsuales.tomo} </td>
                  <td> {ValoresUsuales.folio_1 + ValoresUsuales.pag_1.substring(0, 1)} </td>
                  <td> {ValoresUsuales.folio_2 + ValoresUsuales.pag_2.substring(0, 1)} </td>
                  <td> {ValoresUsuales.escritura} </td>
                  <td> {ValoresUsuales.fecha} </td>
                  <td> {ValoresUsuales.hora + ":" + ValoresUsuales.minutos} </td>
                  <td> {ValoresUsuales.contrato} </td>
                  <td> {ValoresUsuales.partes} </td>
                </tr>
              )
            )}
            <tr>
              <td colSpan={8}> Ultima Línea </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div className="table-contenedor">
        <table id="tabla-index">
          <thead className="table-encabezado">
            <tr>
              <th className="col-narrow">TOMO</th>
              <th className="col-narrow">FOL.INICIAL</th>
              <th className="col-narrow">FOL.FINAL</th>
              <th className="col-narrow">NUMERO</th>
              <th className="col-narrow">FECHA</th>
              <th className="col-narrow">HORA</th>
              <th className="col-wide">ACTO O CONTRATO</th>
              <th className="col-wide-xl">PARTES</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="nocartule-title" colSpan={8}>
                {" "}
                -- NO CARTULE ESTA QUINCENA --{" "}
              </td>
            </tr>
            <tr>
              <td colSpan={8}> Ultima Línea </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
};
