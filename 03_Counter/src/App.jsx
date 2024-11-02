import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    let [counter, setCounter] = useState(0)
  
    function addValue () {
      if(counter < 20) {
        counter++;
        setCounter(counter)
      } else {
        alert("The value can't be more than 20")
      }
    }
  
    function decreaseValue() {
      if(counter > 0) {
        counter--;
        setCounter(counter)
      } else {
        alert("Vaue can't be negetive")
      }
    }
  
  
  
  return (
    <>
  
      <h1>Chai aur Code</h1>
      <h2>Counter Value: {counter}</h2>
      <button id="add" onClick={addValue}>Add Value</button>
  
      <br /><br />
      
      <button id="decrease" onClick={decreaseValue}>Decrease Value</button>
      <br /><br />
      
      <p>DISPLAY 1: {counter}</p>
      <p>DISPLAY 2: {counter}</p>
      <p>DISPLAY 3: {counter}</p>
    </>
  )
  }


export default App
