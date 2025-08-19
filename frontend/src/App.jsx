import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Client from './pages/Client'
import Home from './pages/Home'
const App = () => {
  return (
   <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/client" element={<Client/>} />
   </Routes>
  )
}

export default App
