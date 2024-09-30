import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/modalPanel.css";

export const IndiceBrowser = (props) => {
  const [datos, setdatos] = useState([]);
  const URL = "https://mysql-backend-8bc5e268b39e.herokuapp.com/";

  useEffect(() => {
    const endpoint = URL + "indice";
    const getInfo = async () => {
      await axios
        .get(endpoint)
        .then((res) => {
          console.log("set de datos ....");
          console.log(res.data);
          setdatos(res.data);
        })
        .catch((error) => {
          alert(error);
        });
    };

    getInfo();
  }, []);

  if (datos.length > 0) {
    return (
      <div className="modal">
        <div className="modal-content">
          <div className="table-container">
            <table id="">
              <thead className="">
                <tr>
                  <th className="">NUMERO</th>
                  <th className="">ACTO O CONTRATO</th>
                  <th className="">PARTES</th>
                </tr>
              </thead>
              <tbody>
                {datos.map(({ id, escritura, contrato, partes }) => (
                  <tr key={id}>
                    <td> {escritura} </td>
                    <td> {contrato} </td>
                    <td> {partes} </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="modal">
        <div className="modal-content">
          <table id="tabla-index">
            <thead className="">
              <tr>
                <th className="">NUMERO</th>
                <th className="">ACTO O CONTRATO</th>
                <th className="">PARTES</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="" colSpan={8}>
                  {" "}
                  -- NO HAY ESCRITURAS --{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
};
