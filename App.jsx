import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import ProtectedLayout from './Components/ProtectedLayout'
import Pokedex from './Components/Pokedex'
import PokedexId from './Components/Pokedex.id'
import { useSelector } from 'react-redux'

function App() {
  
  
  

  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route element={<ProtectedLayout/>}>
            <Route path='/pokedex' element={<Pokedex/>} />
            <Route path='/pokedex/:id/' element={<PokedexId/>} />
          </Route>
      </Routes>
    </div>
  )
}

export default App
