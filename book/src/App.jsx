import React from 'react'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Course from './courses/Course'
import Signup from './courses/Signup'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
    
        <Routes>
          <Route path ='/' element={<Home />} />
          <Route path ='/Course' element={<Course />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Contact' element={<Contact />} />

        </Routes>
       
      </div>  
    </>
  )
}

export default App