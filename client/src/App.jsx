 import React from 'react'
 import {Route, Routes, BrowserRouter} from 'react-router-dom'
 import About from './pages/About';
 import SignIn from './pages/SignIn';
 import SignUp from './pages/SignUp';
 import Projects from './pages/Projects';
 import Dashboard from './pages/Dashboard';
 import Home from './pages/Home'

 const App = () => {
   return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='*' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
   )
 }
 
 export default App
 