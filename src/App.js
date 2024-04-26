import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Signup from '../src/details/Signup'
import Login from './details/Login'
import PrivateComponent from './components/PrivateComponent'
import Create from './components/Create'
import Stats from './components/Stats'

import BigNftSlider from './components/BigNftSlider/BigNftSlider'
import Drop from './components/Drop'
import Slider from './components/Slider'




const App = () => {
  return (
    <>
    
      <BrowserRouter>
      <Navbar/>
      <Routes>
        
        <Route element={<PrivateComponent/>}>
        <Route path="/" element={<Slider/>} />
        <Route path="home" element={<Home/>} />
        <Route path='accountsetting' element={<BigNftSlider/>}/>
        <Route path='drop' element={<Drop/>}/>
        <Route path='create' element={<Create/>}/>
        <Route path='stats' element={<Stats/>}/>
        </Route>
        <Route path='signup' element={<Signup/>}/>
        <Route path='login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
