import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function ListItem(props) {
  return <li>{props.animal}</li>
}

function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return <ListItem key= {animal} animal = {animal} />;
      })}
    </ul>
  );
}

function App() {
  const animals = ["Lion", "Tiger", "Snake", "Lizard", "Monkey"];
  return (
    <>
      <h1>Animals: </h1>
      <List animals={animals}/>
    </>
  )
}

export default App
