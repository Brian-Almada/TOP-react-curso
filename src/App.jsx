import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Button() {
  return (
    <button>Click Me!</button>
  )
}

function Button2() {
  return (
    <button>Don´t click me!</button>
  )
}

function App() {
  return (
    <div>
      <Button />
      <Button2 />
      <Button />
    </div>
  )
}

export default App
