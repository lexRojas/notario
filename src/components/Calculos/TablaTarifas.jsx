

export const TablaTarifas = (props) => {
  const registros = props.registros;

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
