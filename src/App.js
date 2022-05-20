import React, { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const Add = () => {
    setCount((x) => x + 1)
  }
  const Sub = () => {
    setCount((x) => x - 1)
  }
  const Reset = () => {
    setCount((x) => x * 0)
  }

  return (
    <>
      <button onClick={Add}>+</button>
      <span>&nbsp;{count}&nbsp;</span>
      <button onClick={Sub}>-</button>
      <br />
      <button onClick={Reset}>reset</button>
    </>
  )
}

export default App
