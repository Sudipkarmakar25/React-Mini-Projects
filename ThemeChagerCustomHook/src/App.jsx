import React from 'react'
import useLocalStorage from './useLocalStorage'

const App = () => {
  const[theme,settheme]=useLocalStorage("theme","dark")

  function handleToggleTheme(){
    settheme(theme=="light"?"dark":"light")
  
  }
 
  return (
    <div className={`h-screen ${theme=="dark"?'bg-slate-800 text-white':'bg-yellow text-black'} flex flex-col justify-center items-center`}>
      <h1>This is a theme changer using Custom Hook</h1>
      <button className={`rounded ${theme=="dark"?'bg-blue-400 text-black':'bg-green-500 text-black'} text-white text-xl hover:bg-slate-700' onClick={()=>handleToggleTheme()`} onClick={()=>handleToggleTheme()}>Change Theme</button>
    </div>
  )
}

export default App
