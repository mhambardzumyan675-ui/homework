import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'
import NotFound from './pages/NotFound'


const App = () => {
  return (
   <BrowserRouter>
   <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/courses' element={<Courses/>}/>
<Route path='/coursesdetails/:id' element={<CourseDetails/>}/>
<Route path='*' element={<NotFound/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App

