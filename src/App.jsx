import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Person() {
  const [person, setPerson] = useState({ name: 'John', age: 100});


// BAD - Don´t do this!
  const handleIncreaseAge = () => {
  // mutating the current state object
    person.age = person.age + 1;
    setPerson(person);
}

//GOOD - Do this!
  const handleIncreaseAge = () => {
  // copy the existing person objet into a new objet
  //while updating the age property
    const newPerson = { ...person, age: person.age + 1};
    setPerson(newPerson);
}

  return (
    <>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  )
}

export default App
