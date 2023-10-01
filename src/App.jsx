import { useEffect, useState } from 'react'
import { EVENT } from './consts'
import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'

function App() {
  const [ currentPath, setCurrentPath]= useState(window.location.pathname)
  /* window.Location.pathname te devuelve el pahh: https://pag.com"/home/aqui"
  el path /home/aqui lo devuelve como solo lectura.
  El windos.addEventListener agrega un Evento al objeto global window*/

  useEffect(()=> {
  const onLocationChange = () => {
    setCurrentPath(window.Location.pathname)
  }
  window.addEventListener(EVENT.PUSHSTATE, onLocationChange)
  window.addEventListener(EVENT.POPSTATE, onLocationChange)
  return() => {
    window.removeEventListener(EVENT.PUSHSTATE, onLocationChange)
    window.removeEventListener(EVENT.POPSTATE, onLocationChange)
  }
}, [])

  return (
    <main>
      {currentPath === '/' && <HomePage/>}
      {currentPath === '/about' && <AboutPage/>}
    </main>
  )
}

export default App
