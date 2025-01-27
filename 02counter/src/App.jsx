import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
 let [counter , setCounter] =  useState(15)

// let counter = 15;

const addValue = ()=>{
  // console.log('value added');
  if(counter>=20){
    alert('counter cannot be greater than 20')
  }
  else{
     counter = counter + 1;
     setCounter(counter);
  }
 
}

const removeValue = ()=>{
  // console.log('value removed');
  if(counter<=0){
    alert('counter cannot be negative')
  }
  else{
     counter = counter - 1;
     setCounter(counter);
  }
 
}

  return (
    <>
      <h1>Bharat's Counter Project</h1>
      <h2>Counter Value : {counter}</h2>
      <button
      onClick={addValue}>Add Value</button>
      <br/>
      <button
      onClick={removeValue}>Remove Value</button>
   
    </>
  )
}

export default App
