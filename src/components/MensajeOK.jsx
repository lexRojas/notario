import "../styles/modalPanel.css";
import logoOk from "../images/ok.png";

export const MensajeOK = () => {

  return (
        <div className="modal">
          <div className="modal-menssage">
            <img src={logoOk} alt="Ok" />
            <span> Guardado !</span>
          </div>
        </div>
  );
};
