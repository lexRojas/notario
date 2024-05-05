import reportIco from "./images/report.svg";
import calculosIco from "./images/calculos.svg";
import { Link } from "react-router-dom";

function App() {



  return (
    <div className="contenedor">
      <div className="card-menu">
        <div className="card-titulo">
          <h1>Herramientas Notario</h1>
        </div>
        <div className="card-cuerpo">
          <div className="card-item">
            <Link to="/indice">
              {" "}
              <img src={reportIco} alt="Reportes"  ></img>{" "}
            </Link>
            <span>Indice</span>
          </div>
          <div className="card-item">
            <Link to='/calculos' > 
              <img src={calculosIco} alt="Calculos" >

                
              </img>
            </Link>
            <span>Calculos</span>
          </div>

     
        </div>
      </div>
    </div>
  );
}

export default App;
