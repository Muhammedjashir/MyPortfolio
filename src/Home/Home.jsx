import React from 'react'
import About from '../Pages/About'
import { Route,Routes } from 'react-router-dom'
import Resume from '../Pages/Resume'
import Portfolio from '../Pages/Portfolio'
import Blog from '../Pages/Blog'
import Contact from '../Pages/Contact'








function Home() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    
    
    </div>
  )
}

export default Home
