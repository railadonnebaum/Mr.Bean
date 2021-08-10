import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,}
  from 'react-router-dom';
import "./Fonts/Quicksand-Regular.ttf"
import './Fonts/Quicksand-Medium.ttf'
import './Fonts/Quicksand-Bold.ttf'
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

ReactDOM.render(
  <React.StrictMode>
     <Router>
    <App /></Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
