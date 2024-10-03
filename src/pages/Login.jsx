import React, { useRef } from "react";
import logo from "..//images/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { useDispatch } from "react-redux";
import { setUser } from "../store/store";

export const Login = () => {
  const dispatch = useDispatch();

  const navegar = useNavigate();

  const user = useRef();
  const pass = useRef();

  const get_usuario = async (login, password) => {
    await axios
      .get("https://mysql-backend-8bc5e268b39e.herokuapp.com/users_login", {
        params: { idlogin: login },
      })
      .then((res) => {
        if (res.data) {
          dispatch(setUser(res.login));

          if (res.data.password === password) {
            navegar("/menu");
          } else {
            navegar("/error");
          }
        } else {
          navegar("/error");
        }
      })
      .catch((e) => {
        console.log(e);
        navegar("/error");
      });
  };

  const irMenu = async () => {
    await get_usuario(user.current.value, pass.current.value);
  };

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
        <div>
          <span>Version 2-oct-2024 pantalla</span>
        </div>
      </div>
    </div>
  );
};
