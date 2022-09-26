import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Categories from './pages/Categories'
import './main.css'

export interface IApp {}

const App: React.FC<IApp> = props => {
  const [cartCount, setCartCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Landing cartCount={cartCount} setCartCount={setCartCount} />}
        />
        <Route
          path="/categorias"
          element={<Categories cartCount={cartCount} setCartCount={setCartCount} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
