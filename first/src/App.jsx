import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  // let counter=5

  const addValue=() => {
    console.log("value added", counter)
    setCounter(counter+1)
  }
  function editValue() {
    console.log("value edited", counter)
    setCounter(counter-1)
  }

  return (
    <>
      <h1>Code for Good</h1>
      <h3>All The Best !</h3>
      <h2>Counter : {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={editValue}>Edit value {counter}</button>
      <footer>counter: {counter}</footer>
    </>
  )
}

export default App
