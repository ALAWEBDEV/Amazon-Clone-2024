import { useState } from 'react'
import Header from './Components/Header/Header'
import CarouselEffect from './Components/Carousel/CarouselEffect'


function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
      <Header/>
      <CarouselEffect/>
      </div>
    )
}

export default App
