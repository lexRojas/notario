/* eslint-disable no-unused-vars */
const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ];

  export function getMes (fecha) {

    let f = new Date(fecha);


    let m = f.getMonth();


    return meses[m];
  };

  export function getQuincena(fecha){
    let f = new Date(fecha);

    let d = f.getDay();

    if (d <= 15) {
      return "primera";
    } else {
      return "segunda";
    }
  };

  export function getAno(fecha){
    let f = new Date(fecha);

    let y = f.getFullYear();

    return y;
  };


  export function getMesNumber(mes){

    let index =0;
    let result=0;
    meses.forEach(element => {
      if (element===mes){
        result= index;
      }
      index+=1;
    });

    return result;


  }