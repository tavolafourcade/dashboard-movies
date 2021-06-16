import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/app.css';
import SideBar from './components/SideBar';
import ContentWrapper from './components/ContentWrapper';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div id="wrapper">
      <SideBar/>
      <ContentWrapper/>
    </div>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
