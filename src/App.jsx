import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>{count}{setCount}</div>
    </>
  )
}

export default App
