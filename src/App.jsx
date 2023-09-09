import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Button({text, color, fontSize}) {

const buttonStyle = {
  color: color,
  fontSize: fontSize + 'px'
};

  return (
    <button style={buttonStyle}>{text}</button>
  )
}



function App() {
  return (
    <div>
      <Button text="Click Me" color="blue" fontSize={12}/>
      <Button text="Don´t Click Me" color="red" fontSize={12}/>
      <Button text="Click Me NOW!" color="brown" fontSize={20}/>
    </div>
  )
}

export default App
