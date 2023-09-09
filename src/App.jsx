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

Button.defaultProps = {
  text: "Click Me, please",
  color: "blue",
  fontSize: 12
}

function App() {
  return (
    <div>
      <Button />
      <Button text="Don´t Click Me" color="red" fontSize={12}/>
      <Button color="brown" fontSize={20}/>
    </div>
  )
}

export default App
