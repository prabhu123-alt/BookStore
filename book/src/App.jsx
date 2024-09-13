import React from 'react'
import Home from './components/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import Course from './courses/Course'
import Signup from './courses/Signup'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast'
import { useAuth } from './context/authprovider'
import About from './About/About'

function App() {
   const [authUser,setAuthUser]=useAuth();
   console.log(authUser);
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
      
        <Routes>
          <Route path ='/' element={<Home />} />
          <Route path ='/Course' element= { authUser ? <Course />:<Navigate to="/signup"/>} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/About' element={authUser ? <About /> : <Navigate to="/signup" />} />

        </Routes>
        <Toaster />
       
       
      </div>  
    </>
  )
}

export default App