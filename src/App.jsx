// Este es un estilo global
import './App.css'
//import Header from './components/Header'
import Home from './pages/Home'
import Owner from './pages/Owner'
import Navbar from './components/Navbar'
//import Card from './components/Card'
//import Menu from './components/Menu'
//import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Navbar/>
     <Routes>
          <Route path='/' element={<Home/>}/>,
          <Route path='/Owner' element={<Owner/>}/>
    </Routes>
    </>
   
    
    // <Card
    //     image="060125-9223.JPG"
    //     name="Alan Oswaldo"
    //     github="https://github.com/Alan050102"
    //     linkedin="www.linkedin.com/in/alan-oswaldo-nuño-angel-3aa197233"
    //   />
    
    
  )
}

export default App
