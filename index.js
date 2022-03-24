import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// 라우터를 사용하기 위해 가져온 임포트, yarn add react-router-dom@5.2.1설치 (버전은 컴퓨터마다 다름)
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  // 앱을 브라우저 라우터로 감싸주기
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
