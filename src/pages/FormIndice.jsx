import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IndiceBrowser } from "../components/IndiceBrowser";
import axios from "axios";
import { MensajeOK } from "../components/MensajeOK";

const Formulario = () => {
  const navegar = useNavigate();
  const URL = "https://mysql-backend-8bc5e268b39e.herokuapp.com/";
  const [verBrowser, setverBrowser] = useState(false);
  const [showMessage, setVisibleMensaje] = useState(false);
  const [editando, setEditando] = useState(false);

  const [formData, setFormData] = useState({
    id: "",
    folio_1: "",
    pag_1: "",
    folio_2: "",
    pag_2: "",
    fecha: "",
    escritura: "",
    tomo: "",
    partes: "",
    hora: "",
    minutos: "",
    contrato: "",
    entero: "",
    firmas: "",
    lugar: "",
  });

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
          setVisibleMensaje(true);

          setTimeout(() => {
            setVisibleMensaje(false);

            setFormData({
              folio_1: "",
              pag_1: "",
              folio_2: "",
              pag_2: "",
              fecha: "",
              escritura: "",
              tomo: "",
              partes: "",
              hora: "",
              minutos: "",
              contrato: "",
              entero: "",
              firmas: "",
              lugar: "",
            });
          }, 3000);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      console.log(formData)
      await axios
        .post(endpointPost,formData)
        .then((res) => {
          setVisibleMensaje(true);

          setTimeout(() => {
            setVisibleMensaje(false);

            setFormData({
              folio_1: "",
              pag_1: "",
              folio_2: "",
              pag_2: "",
              fecha: "",
              escritura: "",
              tomo: "",
              partes: "",
              hora: "",
              minutos: "",
              contrato: "",
              entero: "",
              firmas: "",
              lugar: "",
            });
          }, 3000);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  const handleCancel = () => {
    // Lógica para manejar la acción de cancelar
    setFormData({
      folio_1: "",
      pag_1: "",
      folio_2: "",
      pag_2: "",
      fecha: "",
      escritura: "",
      tomo: "",
      partes: "",
      hora: "",
      minutos: "",
      contrato: "",
      entero: "",
      firmas: "",
      lugar: "",
    });

    navegar("/menu");
  };

  const browser = () => {
    setverBrowser(true);
  };

  return (
    <div className="contenedor">
      {showMessage ? (
        <div>
          <MensajeOK />
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
          <form className="form_indice" onSubmit={handleSubmit}>
            <div className="titulo_form card-titulo">
              <h1>Ingreso de Indices</h1>
            </div>

            <button
              type="button"
              className="boton_load_index my-button h-80"
              onClick={browser}
            >
              Cargar Escritura
            </button>
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
              <input
                type="number"
                name="escritura"
                value={formData.escritura}
                onChange={handleChange}
              />
            </div>

            <div className="input-group folio_num_inicio">
              <label>Folio 1:</label>
              <input
                type="number"
                name="folio_1"
                value={formData.folio_1}
                onChange={handleChange}
              />
            </div>
            <div className="input-group folio_fv_inicio">
              <label>Pag 1:</label>
              <input
                type="text"
                name="pag_1"
                value={formData.pag_1}
                onChange={handleChange}
              />
            </div>
            <div className="input-group folio_num_final">
              <label>Folio 2:</label>
              <input
                type="number"
                name="folio_2"
                value={formData.folio_2}
                onChange={handleChange}
              />
            </div>
            <div className="input-group folio_fv_final">
              <label>Pag 2:</label>
              <input
                type="text"
                name="pag_2"
                value={formData.pag_2}
                onChange={handleChange}
              />
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
              <input
                className="h-100"
                type="text"
                name="partes"
                value={formData.partes}
                onChange={handleChange}
              />
            </div>
            <div className="input-group contrato">
              <label>Contrato:</label>
              <input
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

            <div className="button_panel  card-buttonPanel">
              <button className="my-button" type="submit">
                Guardar
              </button>
              <button
                className="my-button"
                type="button"
                onClick={handleCancel}
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
