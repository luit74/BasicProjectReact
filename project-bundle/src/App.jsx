import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ImageSlider } from './projectComponents/imageSlider'
import { LoadProducts } from './projectComponents/load-more-data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Image slider project */}
      {/* <ImageSlider
        url={'https://api.thedogapi.com/v1/images/search?'}
        limit={'10'} 
      /> */}


      <LoadProducts />

    </>
  )
}

export default App
