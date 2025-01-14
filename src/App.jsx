import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ComponentA from './components/ComponentA'
import { useDispatch } from 'react-redux'
import { increment, decrement } from './features/counter/counterSlice'
import Header from './components/Header'
import Homepage from './components/Homepage'


function App() {

  const dispatch = useDispatch()

  return (
    <>
      <Homepage />


    </>
  )
}

export default App
