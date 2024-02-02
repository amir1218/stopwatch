import React from 'react';
import {createRoot} from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Stopwatch from './components/Stopwatch.js';
//import reportWebVitals from './reportWebVitals';

const root = createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    <Stopwatch />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
