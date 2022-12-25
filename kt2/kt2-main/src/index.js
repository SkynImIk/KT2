import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './components/css/css-aos.css';
import './components/css/css-bootstrap-datepicker.css';
import './components/css/css-bootstrap.min.css';
import './components/css/css-jquery-ui.css';
import './components/css/css-jquery.fancybox.min.css';
import './components/css/css-owl.carousel.min.css';
import './components/css/css-owl.theme.default.min.css';
import './components/css/css-style.css';
import './components/css/font-flaticon.css';
import './components/css/icomoon-style.css';

//<link href="https://fonts.googleapis.com/css?family=Oswald:400,700%7CMuli:300,400,700,900" rel="stylesheet"></link>





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />




  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();