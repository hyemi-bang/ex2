import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Mybutton from './chap01/Mybutton';
import DrinkList from './chap01/DrinkList';
import Clock from './chap02/Clock';

const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(() => {
  root.render(
    <React.StrictMode>
      <Clock/>
    </React.StrictMode>
  );
}, 1000);

/*
root.render(
  <React.StrictMode>
    <Mybutton />
    <DrinkList />
  </React.StrictMode>
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
