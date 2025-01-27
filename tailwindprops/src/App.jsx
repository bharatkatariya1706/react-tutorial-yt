import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-5">Tailwind Test</h1>
      <Card username='bharat'/>
      <Card username='shah rukh khan'/>
      
    </>
  );
}

export default App
