import React from 'react'
import Home from './assets/pages/Home/Home.jsx';
import { Register } from "./assets/pages/Register/Register.jsx";
import {Login} from './assets/pages/Login/Login.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
function App() {
  return (
    <Router>
      <Routes>
        <Route  path='/' element={<Login/>}/>
        <Route path='//Home' element={<Home/>}/>
        <Route  path='//Register' element={<Register/>}/>
      </Routes>
    </Router>
  )
}

export default App
