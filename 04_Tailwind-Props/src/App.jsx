import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {

  return (
    <>
      <h1 className='bg-green-700 text-black rounded-xl p-4 mb-8'>Tailwind Test</h1>
      <Card username={"Sheela Rani"} bio={"I am Sheela. Nice to Meet You. Hahahahaha. Ajja"}/>
      <Card username={"Heena Rani"} bio={"I am Heena. Lagti hu bohot Haseena. Ajja"}/>
    </>
  )
}

export default App
