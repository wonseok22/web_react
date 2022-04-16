import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import "./style.scss";
import App from "./App";

const rootNode = document.getElementById('root');

ReactDOM.createRoot(rootNode).render(
    <BrowserRouter>
      <React.StrictMode>
        <App/>
      </React.StrictMode>
    </BrowserRouter>
);
