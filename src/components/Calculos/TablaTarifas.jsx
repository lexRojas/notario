import axios from "axios";
import React, { useEffect, useState } from "react";

export const TablaTarifas = (props) => {
  const id_acto = props.id_acto;
  const monto = props.monto;
  const calcular = props.calcular;

  const [registros, setRegistros] = useState(null);

  useEffect(() => {
    if (calcular) {
      axios
        .get("http://18.222.180.241:8000/get_monto", {
          params: { id_acto: id_acto, monto: monto },
        })
        .then((res) => {
          setRegistros(res.data);
        });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [calcular]);

  return (
    <>
      <table id="tabla-tarifas">
        <thead>
          <tr>
            <th>ID</th>
            <th>Descripción</th>
            <th>Tarifa</th>
          </tr>
        </thead>
        <tbody>
          {registros?(registros.map(({ id, descripcion, tarifa }) => (
            <tr key={id}>
              <td className="text-center">{id}</td>
              <td className="text-center">{descripcion}</td>
              <td className="text-right">{ tarifa.toLocaleString(undefined, {minimumFractionDigits: 2})}</td>
            </tr>
          ))):(  
            <tr key='1'>
              <td>--</td>
              <td>--</td>
              <td>--</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};
