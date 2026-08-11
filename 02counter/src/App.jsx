import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  // hooks
  let[counter,setCounter]=useState(15)
  // let counter=15
  const addValue=()=>{
    counter++;
    if(counter>20)counter=20;
    
    setCounter(counter)
    
  }
  const subtractValue=()=>{
    
    --counter;
    if(counter<0)counter=0;
    setCounter(counter)
    
  }
  return (
    <>
      <h1>hanji comeback</h1> 
      <h3>counter value :{counter}</h3>
      <button
      onClick={addValue}>add</button>
      <button
      onClick={subtractValue}>remove</button>
    </> 
  )
}

export default App
