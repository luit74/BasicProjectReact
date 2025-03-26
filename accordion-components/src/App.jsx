import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Accordian } from './components/accordian'
import { Practice } from './components/accordian/practice'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Accordian /> */}
      <Practice />
    </>
  )
}

export default App
