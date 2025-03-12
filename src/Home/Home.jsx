import React from 'react'
import About from '../Pages/About'
import { Route,Routes } from 'react-router-dom'
import Resume from '../Pages/Resume'
import Portfolio from '../Pages/Portfolio'






function Home() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
      </Routes>
    
      
    </div>
  )
}

export default Home
