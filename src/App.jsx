import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Characters from './pages/Characters/Characters'
import CharacterDetail from './pages/CharacterDetail/CharacterDetail'
import Footer from './components/Footer/Footer'

function App() {
  
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/characters" element={<Characters/>}/>
        <Route path="/character/:id" element={<CharacterDetail/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
