
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Resume from './Pages/Resume'
import Info from './Pages/Info'
import Download from './Pages/Download'
import Pnf from './Pages/Pnf'
import Saved from './Pages/Saved'
import View from './Pages/View'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  
// pages : homepage, Resume, UserInfo, ViewResume, All saved resume, Download Resume, Page not found
// components : Header, Footer, userinput, preview, edit resume

  return (
    <>
     <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/resume-details' element={<Info/>}/>
        <Route path='/downloads' element={<Download/>}/>
        <Route path='/*' element={<Pnf/>}/>
        <Route path='/all-resumes' element={<Saved/>}/>
        <Route path='/resume/:id' element={<View/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
