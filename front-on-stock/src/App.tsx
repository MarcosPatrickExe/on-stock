import { useState } from 'react'
import { BestSellers } from './components/BestSellers'
import { Brands } from './components/Brands'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import './main.css'

function App() {
  const [cartCount, setCartCount] = useState(0)
  //Lift State Up

  return (
    <div className="max-w-[1344] mx-auto flex items-center flex-col">
      <Navbar cartCount={cartCount} />
      <Home />
      <Brands />
      <BestSellers setCartCount={setCartCount} />
    </div>
  )
}

export default App
