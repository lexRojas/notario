import "../styles/modalPanel.css";
import logoOk from "../images/ok.png";
import logoCancel from "../images/cancel.svg";

export const MensajeOK = (props) => {
  const { tipoMensaje, mensaje } = props;

  return (
    <div className="modal">
      <div className="modal-menssage">
        {tipoMensaje === "OK" ? (
          <img src={logoOk} alt="Ok" />
        ) : (
          <img src={logoCancel} alt="Ok" />
        )}

        {tipoMensaje === "OK" ?(<span> Guardado !</span>) :(<span> {mensaje} </span>)}
      </div>
    </div>
  );
};
