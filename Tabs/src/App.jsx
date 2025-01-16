import React, { useState } from 'react'
import ThreeWheeler from './Components/ThreeWheeler'
import TwoWheeler from './Components/TwoWheeler'
import PrivateCars from './Components/PrivateCars'
import Bus from './Components/Bus'

const App = () => {
  const tabs=[
    {
      label:"First",
      content:<ThreeWheeler/>
    },
    {
      label:"second",
      content:<TwoWheeler/>
    },
    {
      label:"third",
      content:<PrivateCars/>
    },
    {
      label:"Fourth",
      content:<Bus/>
    }

  ]
  const [index,setIndex]=useState(0)
  return (
    <div>
      <div className='flex flex-row my-5 gap-2 justify-center'>
        <button className={`${index==0?"bg-blue-900":"bg-blue-600"} h-16 rounded-xl text-white font-bold hover:bg-blue-800`} onClick={()=>setIndex(0)}>Three Wheeler</button>
        <button className={`${index==1?"bg-blue-900":"bg-blue-600"} h-16 rounded-xl text-white font-bold hover:bg-blue-800`} onClick={()=>setIndex(1)}>Two Wheeler</button>
        <button className={`${index==2?"bg-blue-900":"bg-blue-600"} h-16 rounded-xl text-white font bold hover:bg-blue-800`} onClick={()=>setIndex(2)}>Private Cars</button>
        <button className={`${index==3?"bg-blue-900":"bg-blue-600"} h-16 rounded-xl w-24 text-white font-bold hover:bg-blue-800`} onClick={()=>setIndex(3)}>Bus</button>
      </div>
      <div className='flex justify-center'>
       {tabs[index]?tabs[index].content:null}
      </div>
    </div>
  )
}

export default App
