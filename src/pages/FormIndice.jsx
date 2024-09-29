import React, { useState } from "react";

const Formulario = () => {
  const [formData, setFormData] = useState({
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
    chk_nuevo: false,
    chk_conducente: false,
    chk_firma_elec: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar el envío del formulario
    console.log(formData);
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
      chk_nuevo: false,
      chk_conducente: false,
      chk_firma_elec: false,
    });
  };

  return (
    <div className="contenedor">
      <div className="card">
        <div className="card-titulo">
          <h1>Ingreso de Indices</h1>
        </div>
        <div className="card-cuerpo">
          <form className="form_indice" onSubmit={handleSubmit}>
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
                value={formData.firmas}
                onChange={handleChange}
              />
            </div>
            <div className="input-group hora">
              <label>Hora:</label>
              <input
                type="number"
                name="hora"
                value={formData.hora}
                onChange={handleChange}
              />
            </div>
            <div className="input-group minutos">
              <label>Minutos:</label>
              <input
                type="number"
                name="minutos"
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

            <div className="input-group checks">
              <div className="check-item">
                <input
                  type="checkbox"
                  name="chk_nuevo"
                  checked={formData.chk_nuevo}
                  onChange={handleChange}
                />
                <span> Doc. Nuevo</span>
              </div>
              <div className="check-item">
                <input
                  type="checkbox"
                  name="chk_conducente"
                  checked={formData.chk_conducente}
                  onChange={handleChange}
                />
                <span> En conducente</span>
              </div>
              <div className="check-item">
                <input
                  type="checkbox"
                  name="chk_firma_elec"
                  checked={formData.chk_firma_elec}
                  onChange={handleChange}
                />
                <span> Firma Electronica</span>
              </div>
            </div>
            <div className="button_panel  card-buttonPanel">
              <button className="my-button" type="submit">
                Aceptar
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
