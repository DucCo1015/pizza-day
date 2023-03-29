import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Menu from '../pages/Menu'
import Recipes from '../pages/Recipes'
import Contact from '../pages/Contact'

const Routers = () => {
  return (
    <Routes>
      <Route path = "*"  element = {<Navigate to = '/home' />}/>
      <Route path ='/home' element = {<Home/>}/>            
      <Route path ='/about' element = {<About/>}/>            
      <Route path ='/menu' element = {<Menu/>}/>            
      <Route path ='/recipes' element = {<Recipes/>}/>            
      <Route path ='/contact' element = {<Contact/>}/>            
    </Routes>
  )
}

export default Routers