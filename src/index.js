import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
// import "bulma/css/bulma.css";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
axios.defaults.withCredentials = true;


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();