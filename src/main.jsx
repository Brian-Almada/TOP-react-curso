import React from 'react'
import ReactDOM from 'react-dom/client'
import Contador from './Contador.jsx'
import Greeting from './Greeting.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Contador value={0}/>
  </React.StrictMode>,
)
