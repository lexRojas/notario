import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './styles/normalize.css' // se deben de aplicar primero
import './styles/styles.css'

import App from './App';
import { Filtro } from './pages/Filtro';
import {IndicePage} from './pages/IndicePage'
import Calculos from './pages/Calculos'
import { Menu } from './pages/Menu';


const router = createBrowserRouter(
  //Creo el object router con las rutas
  [
    { path: "/", element: <App/> },
    { path: "/menu", element: <Menu/> },
    { path: "/indice", element: <Filtro/> },
    { path: "/reporte", element: <IndicePage/> },
    { path: "/calculos", element: <Calculos/> },
  ]
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);
