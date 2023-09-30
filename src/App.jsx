import { useEffect, useState } from 'react'
import './App.css'
import { EVENT } from './assets/consts'
import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'

function App() {
  const [ currentPath, setCurrentPath]= useState(window.location.pathname)

useEffect(()=> {
  const onLocationChange = () => {
    setCurrentPath(window.Location.pathname)
  }
  window.addEventListener(EVENT.PUSHSTATE, onLocationChange)
  window.addEventListener(EVENT.POPSTATE, onLocationChange)
  return() => {
    window.removeEventListener(EVENT.PUSHSTATE, onLocationChange)
    window.removeEventListener(EVENT.POPSTATE, onLocationChange)
  }, []})

  return (
    <main>
      {currentPath === '/' && <HomePage/>}
      {currentPath === '/about' && <AboutPage/>}
    </main>
  )
}

export default App
