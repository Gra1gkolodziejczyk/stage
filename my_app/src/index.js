import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
<BrowserRouter>
    <Routes>
      <Route path="/" >
        <App />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
reportWebVitals();
