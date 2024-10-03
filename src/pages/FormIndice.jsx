import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IndiceBrowser } from "../components/IndiceBrowser";
import axios from "axios";
import { MensajeOK } from "../components/MensajeOK";
import { getFecha__yyMMdd, getHora, getMinutos } from "../tools/tools";

const Formulario = () => {
  const navegar = useNavigate();
  const URL = "https://mysql-backend-8bc5e268b39e.herokuapp.com/";
  const [verBrowser, setverBrowser] = useState(false);
  const [showMessage, setVisibleMensaje] = useState(false);
  const [editando, setEditando] = useState(false);
  const [tipoMensaje, setTipoMensaje] = useState("OK");
  const [mensaje, setMensaje] = useState("");
  const [formError, setFormError] = useState({});

  const [formData, setFormData] = useState({
    folio_1: "1",
    pag_1: "Frente",
    folio_2: "1",
    pag_2: "Vuelto",
    fecha: getFecha__yyMMdd(),
    escritura: "1",
    tomo: "1",
    partes: "",
    hora: getHora().toString(),
    minutos: getMinutos().toString(),
    contrato: "",
    entero: "",
    firmas: "1",
    lugar: "",
  });

  const fijarValoresPorDefecto = () => {
    setFormData({
      folio_1: "1",
      pag_1: "Frente",
      folio_2: "1",
      pag_2: "Vuelto",
      fecha: getFecha__yyMMdd(),
      escritura: "1",
      tomo: "1",
      partes: "",
      hora: getHora().toString(),
      minutos: getMinutos().toString(),
      contrato: "",
      entero: "",
      firmas: "1",
      lugar: "",
    });
  };

  const loadRecord = (registro) => {
    console.log(registro);

    const miRegistro = {
      id: registro.id,
      folio_1: registro.folio_1,
      pag_1: registro.pag_1,
      folio_2: registro.folio_2,
      pag_2: registro.pag_2,
      fecha: registro.fecha,
      escritura: registro.escritura,
      tomo: registro.tomo,
      partes: registro.partes,
      hora: registro.hora,
      minutos: registro.minutos,
      contrato: registro.contrato,
      entero: registro.entero,
      firmas: registro.firmas,
      lugar: registro.lugar,
    };

    setFormData(miRegistro);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    setFormError({ ...formError, [name]: value === "2" ? true : false });
    console.log(formError);
  };

  const presentarMensaje = () => {
    setVisibleMensaje(true);

    setTimeout(() => {
      setVisibleMensaje(false);
      fijarValoresPorDefecto();
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const id = formData.id;
    const endpointPatch = `${URL}indice/?id=${id}`;
    const endpointPost = `${URL}indice/?indice=${formData}`;

    if (editando) {
      await axios
        .patch(endpointPatch, formData)
        .then((res) => {
          setTipoMensaje("OK");
          presentarMensaje();
        })
        .catch((e) => {
          setTipoMensaje("Error");
          console.log(e);
          setMensaje(e.message);
          presentarMensaje();
        });
    } else {
      console.log(formData);
      await axios
        .post(endpointPost, formData)
        .then((res) => {
          setTipoMensaje("OK");
          presentarMensaje();
        })
        .catch((e) => {
          console.log(e);
          setTipoMensaje("Error");
          setMensaje(e.message);
          presentarMensaje();
        });
    }
  };

  const handleCancel = () => {
    // Lógica para manejar la acción de cancelar
    fijarValoresPorDefecto();
    navegar("/menu");
  };

  const browser = () => {
    setverBrowser(true);
  };

  return (
    <div className="contenedor">
      {showMessage ? (
        <div>
          <MensajeOK tipoMensaje={tipoMensaje} mensaje={mensaje} />
        </div>
      ) : (
        <></>
      )}

      {verBrowser ? (
        <div>
          {" "}
          <IndiceBrowser
            setverBrowser={setverBrowser}
            loadRecord={loadRecord}
            setEditando={setEditando}
          />{" "}
        </div>
      ) : (
        <></>
      )}
      <div className="card-form-indice">
        <div className="card-cuerpo">
          <form className="form_indice">
            <div className="titulo_form card-titulo">
              <h1>Ingreso de Indices</h1>
            </div>

            <div className="input-group tomo">
              <label>Tomo:</label>
              <input
                type="number"
                name="tomo"
                value={formData.tomo}
                onChange={handleChange}
              />
            </div>
            <div className="input-group escritura">
              <label>Escritura:</label>
              <div id="searchTextField">
                <input
                  id="searchField"
                  type="number"
                  name="escritura"
                  min="1"
                  value={formData.escritura}
                  onChange={handleChange}
                />
                <button
                  id="searchButton"
                  type="button"
                  className="boton_load_index  "
                  onClick={browser}
                >
                  <img
                    src="https://img.icons8.com/material-outlined/24/ffffff/search--v1.png"
                    alt="Buscar"
                  />
                </button>
              </div>
              <div className="form__errorLabel">
                {formError.escritura && <span>Error en la escritura </span>}
              </div>
            </div>
            <div className="folios">
              <div className="input-group folio_num_inicio">
                <label>Folio Inicio:</label>
                <input
                  type="number"
                  name="folio_1"
                  value={formData.folio_1}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group folio_fv_inicio">
                <label>Página Inicio :</label>

                <select
                  name="pag_1"
                  value={formData.pag_1}
                  onChange={handleChange}
                >
                  <option value="Frente">Frente</option>
                  <option value="Vuelto">Vuelto</option>
                </select>
              </div>
              <div className="input-group folio_num_final">
                <label>Folio Final:</label>
                <input
                  type="number"
                  name="folio_2"
                  value={formData.folio_2}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group folio_fv_final">
                <label>Página Final:</label>

                <select
                  name="pag_2"
                  value={formData.pag_2}
                  onChange={handleChange}
                >
                  <option value="Frente">Frente</option>
                  <option value="Vuelto">Vuelto</option>
                </select>
              </div>
            </div>
            <div className="input-group lugar">
              <label>Lugar:</label>
              <input
                type="text"
                name="lugar"
                value={formData.lugar}
                onChange={handleChange}
              />
            </div>

            <div className="input-group fecha">
              <label>Fecha:</label>
              <input
                type="date"
                name="fecha"
                value={formData.fecha}
                onChange={handleChange}
              />
            </div>

            <div className="input-group firmas_frm">
              <label>Firmas:</label>
              <input
                type="number"
                name="firmas"
                min="1"
                max="20"
                step="1"
                value={formData.firmas}
                onChange={handleChange}
              />
            </div>
            <div className="input-group hora">
              <label>Hora:</label>
              <input
                type="number"
                name="hora"
                min="1"
                max="23"
                step="1"
                value={formData.hora}
                onChange={handleChange}
              />
            </div>
            <div className="input-group minutos">
              <label>Minutos:</label>
              <input
                type="number"
                name="minutos"
                min="1"
                max="59"
                step="1"
                value={formData.minutos}
                onChange={handleChange}
              />
            </div>

            <div className="input-group partes">
              <label>Partes:</label>
              <textarea
                className="h-100"
                type="text"
                name="partes"
                value={formData.partes}
                onChange={handleChange}
              />
            </div>
            <div className="input-group contrato ">
              <label>Contrato:</label>
              <textarea
                className="h-100"
                type="text"
                name="contrato"
                value={formData.contrato}
                onChange={handleChange}
              />
            </div>
            <div className="input-group entero">
              <label>Entero:</label>
              <input
                type="text"
                name="entero"
                value={formData.entero}
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
        <div className="card-buttonPanel">
          <button className="my-button" type="submit" onClick={handleSubmit}>
            Guardar
          </button>
          <button className="my-button" type="button" onClick={handleCancel}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
