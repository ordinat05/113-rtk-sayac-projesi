import React, { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount, incrementByInput, reset } from './store/counterSlice'


function App() {
  const [warning, setWarning] = useState(50);

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(3))
  }

  const handleIncrementByInput = () => {
    dispatch(incrementByInput(warning))
  }

  const handleReset = () => {
    dispatch(reset())
  }

  return (
    <div className="App">
      {/* 🍀 This Component App.jsx */}
      <h1> Redux Toolkit </h1>
      <h1> Amount Increment Counter App </h1>
      <div className='counter-inner'>
        <button id="reset" onClick={handleReset}>RESET</button>
        <br />
        <br />
        <button id="negative" onClick={handleDecrement}>-</button>
        <span>{count}</span>
        <button id="positive" onClick={handleIncrement}>+</button>
        <br />
        <hr></hr>
        <br />
        <button id="concrete" onClick={handleIncrementByAmount}>+3 Concrete Increment</button>
        <br />
        <br />
        <div id="yanyana">
          <input id="txtbox" type="number" value={warning} onChange={(e) => setWarning(Number(e.target.value))} placeholder="Artış İçin Sayı Giriniz" />
          <button id="abstract" onClick={handleIncrementByInput}>"{warning}" Abstract Increment.</button>
        </div>
      </div>
    </div>
  )
}

export default App
