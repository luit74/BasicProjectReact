import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ImageSlider } from './projectComponents/imageSlider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ImageSlider
        url={'https://api.thedogapi.com/v1/images/search?'}
        limit={'10'} 
      />
    </>
  )
}

export default App
