import { useState } from 'react'
import {Route , Routes} from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Product from './pages/Product'


import './App.css'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path="*" element={<h1>Not Found</h1>}/>
        </Routes>
    </>
  )
}

export default App
