// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

import FormDisabledDemo  from "./components/home/Home.jsx"
import About from  "./components/about/About.jsx"
import Countdown1 from "./components/countdown/Countdown.jsx"


function App(){
  return (
    <div>
      FORM
      <br />
      <br />
      <FormDisabledDemo />
      COLLAPSE TEXT
      <br />
      <br />
      <About/>
      <br />
      COUNTDOWN
      <br />
      <br />
      <Countdown1/>
    </div>
  )
}

export default App
