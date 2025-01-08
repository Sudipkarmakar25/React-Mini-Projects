import React from 'react'
import menus from './Components/Data'
import MenuList from './Components/MenuList'

export  function App() {
  return (
    <div className='h-auto w-[250px] bg-slate-900 text-white'>
     <MenuList list={menus}  />
    </div>
  )
}
 export default App;