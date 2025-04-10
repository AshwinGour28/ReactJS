import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // let counter = 6;
  const handelIncrement = () => {
    setCount(count+1)
  }
  const handelDecrement = () =>{
    if(count>0){
      setCount(count-1);
    }
    
  }
  return (
    <>
      <h1>hello world</h1>
      <h3>Counter Value: {count}</h3>
      <br />
      <button onClick={handelIncrement}>Increment</button>
      <button onClick={handelDecrement}>Decrement</button>
    </>
  )
}

export default App
