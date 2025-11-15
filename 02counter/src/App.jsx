import { useState } from 'react'
import './App.css'

function App() {

  let   [counter, setCounter] = useState(15)

  // ✅ Use setCounter to update state
  const addValue = () => {
    console.log("clicked", counter);
    setCounter(counter + 1);
  }

  const removeValue = () => {

    if(counter>0){

    

    setCounter(counter - 1);
    console.log("clicked", counter);
  }else{
    console.log("Counter cannot go below 0 ")
  }
  }
  

  return (
    <>
      <h1>India VS Aus</h1>
      <h2>Counter value: {counter}</h2>

      {/* ✅ Call function on click */}
      <button 
      onClick={removeValue}>Add value</button>
      
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
