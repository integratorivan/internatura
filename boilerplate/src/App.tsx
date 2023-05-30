import { useState } from 'react'
import './App.css'

function App () {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>
        Hello, world!
      </h1>
      <h2>{count}</h2>
      <div className="container">
        <button className="base_button" type="button" onClick={() => setCount((prevCount) => prevCount + 1)}>Increment</button>
        <button className="base_button" type="button" onClick={() => setCount((prevCount) => prevCount - 1)}>Decrement</button>
      </div>
    </>
  )
}

export default App
