import React, { useState } from 'react';

const Formulario = () => {
  const [formData, setFormData] = useState({
    folio_1: '',
    pag_1: '',
    folio_2: '',
    pag_2: '',
    fecha: '',
    escritura: '',
    tomo: '',
    partes: '',
    hora: '',
    minutos: '',
    contrato: '',
    entero: '',
    firmas: '',
    lugar: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
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
      folio_1: '',
      pag_1: '',
      folio_2: '',
      pag_2: '',
      fecha: '',
      escritura: '',
      tomo: '',
      partes: '',
      hora: '',
      minutos: '',
      contrato: '',
      entero: '',
      firmas: '',
      lugar: '',
    });
  };

  return (
    <div className="contenedor">
      <div className="card">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Folio 1:</label>
            <input type="number" name="folio_1" value={formData.folio_1} onChange={handleChange} />
          </div>
          <div className="input-group">
            <label>Pag 1:</label>
            <input type="text" name="pag_1" value={formData.pag_1} onChange={handleChange} />
          </div>
          <div className="input-group">
            <label>Folio 2:</label>
            <input type="number" name="folio_2" value={formData.folio_2} onChange={handleChange} />
          </div>
          <div className="input-group">
            <label>Pag 2:</label>
            <input type="text" name="pag_2" value={formData.pag_2} onChange={handleChange} />
          </div>
          <div className="input-group">
            <label>Fecha:</label>
            <input type="date" name="fecha" value={formData.fecha} onChange={handleChange} />
          </div>
          <div className="input-group">
            <label>Escritura:</label>
            <input type="number" name="escritura" value={formData.escritura} onChange={handleChange} />
          </div>
          <div className="input-group">
            <label>Tomo:</label>
            <input type="number" name="tomo" value={formData.tomo} onChange={handleChange} />
          </div>
          <div className="input-group">
            <label>Partes:</label>
            <input type="text" name="partes" value={formData.partes} onChange={handleChange} />
          </div>
          <div className="input-group">
            <label>Hora:</label>
            <input type="number" name="hora" value={formData.hora} onChange={handleChange} />
          </div>
          <div className="input-group">
            <label>Minutos:</label>
            <input type="number" name="minutos" value={formData.minutos} onChange={handleChange} />
          </div>
          <div className="input-group">
            <label>Contrato:</label>
            <input type="text" name="contrato" value={formData.contrato} onChange={handleChange} />
          </div>
          <div className="input-group">
            <label>Entero:</label>
            <input type="text" name="entero" value={formData.entero} onChange={handleChange} />
          </div>
          <div className="input-group">
            <label>Firmas:</label>
            <input type="number" name="firmas" value={formData.firmas} onChange={handleChange} />
          </div>
          <div className="input-group">
            <label>Lugar:</label>
            <input type="text" name="lugar" value={formData.lugar} onChange={handleChange} />
          </div>

          <div className="my-button">
            <button type="submit">Aceptar</button>
            <button type="button" onClick={handleCancel}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
