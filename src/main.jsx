import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Contadores from './Contadores.jsx'
import Contador from './ContadorHook.jsx'
import Greeting from './Greeting.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
