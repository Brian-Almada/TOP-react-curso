import React from 'react'
import ReactDOM from 'react-dom/client'
import Contadores from './Contadores.jsx'
import Contador from './ContadorHook.jsx'
import Greeting from './Greeting.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Contador />
  </React.StrictMode>,
)
