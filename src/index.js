import React from 'react';
import ReactDOM from 'react-dom/client';
import { MoralisProvider } from "react-moralis";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const MORALIS_APPID = process.env.REACT_APP_MORALIS_APPID;
const MORALIS_URL = process.env.REACT_APP_MORALIS_URL;
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <MoralisProvider appId={MORALIS_APPID} serverUrl={MORALIS_URL}>
      <App />
    </MoralisProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
