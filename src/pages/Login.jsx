import React, { useState,useRef } from "react";
import logo from "..//images/logo.png";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../store/store'


export const Login = () => {
 
  const usuario = useSelector((state) => state.user.value)
  const dispatch  = useDispatch()

  console.log(usuario)


  const navegar = useNavigate();  
  const [clave, setClave] = useState(null)  



  const user = useRef();
  const pass = useRef();

  const get_usuario = (login) => {

    axios
      .get("https://mysql-backend-8bc5e268b39e.herokuapp.com/user", {
        params: { idlogin: login },
      })
      .then((res) => {
        if (res.data[0]){
            console.log('si entro')
            console.log(res.data)
            setClave(res.data[0].password)
            dispatch(setUser(res.data[0].login))
        }else{
            setClave(null)
        }
      });
  };

  const irMenu=()=>{

    const usuario = user.current.value
    const password = pass.current.value

    get_usuario(usuario)


    if (clave){

        if (clave === password){
            navegar("/menu")
        }else{
            navegar("/error")
        }

    }


    
  }


  return (
    <div className="contenedor">
      <div className="card-menu">
        <div className="card-titulo">
          <img src={logo} alt="logo" className="logoTitulo" />
        </div>
        <div className="card-cuerpo-login">
          <div className="input-group">
            <label htmlFor="usuario">Usuario:</label>
            <input type="text" name="usuario" id="usuario" ref={user} />

            <label htmlFor="password">Clave:</label>
            <input type="password" name="password" id="password" ref={pass} />
          </div>
        </div>
        <div className="card-buttonPanel">
          <button className="my-button" onClick={irMenu}>
            {" "}
            Aceptar{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
