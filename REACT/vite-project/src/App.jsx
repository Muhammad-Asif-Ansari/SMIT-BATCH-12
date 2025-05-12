import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './components/About'
import Card from "./components/Card"
import {firstName,lastName} from "./components/Constants"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>Vite + React:{firstName}</h1>
      <h1>{lastName}</h1>
     <About/> */}
     <Card/>
    </>
  )
}

export default App
