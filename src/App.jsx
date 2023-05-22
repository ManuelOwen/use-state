import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () =>{
      if (count == 10)return;

      setCount(count + 1)
  }

  const decrement = () =>{
   if(count ==0) return;
    setCount(count - 1)
  }

  const reset = () =>{
    
    setCount(0)
  }

  return (
    <>
     <button onClick={increment}> + </button>

     {count}

     <button onClick={decrement}>-</button>

     <button onClick={reset}>reset</button>
    </>
  )
}

export default App
