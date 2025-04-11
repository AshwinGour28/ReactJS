import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  
  return (
    <>
      <Card username="Sydney Sweeney" role="Software Engineer"/>
      <Card username="Madison Beer" role="Frontend Engineer"/>
    </>
  )
}

export default App
