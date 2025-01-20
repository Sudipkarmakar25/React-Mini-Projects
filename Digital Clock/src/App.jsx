import React, { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
  const [hour,sethour]=useState(0)
  const [minute,setminute]=useState(0)
  const [second,setsecond]=useState(0)
  const date = new Date();
  useEffect(()=>{
    setTimeout(() => {
      sethour(date.getHours())
      setminute(date.getMinutes())
      setsecond(date.getSeconds())
    }, 1000);

  },[second])
  
  return (
    <div className='flex justify-center items-center h-screen flex-row'>
      <div className='h-[100px] w-[140px] border-black bg-slate-500 flex justify-center items-center font-semibold text-5xl shadow-xl shadow-black'>{hour<10?"0"+hour:hour}</div>
      <div className='text-5xl'>:</div>
      <div className='h-[100px] w-[140px] border-black bg-slate-500 flex justify-center items-center font-semibold text-5xl shadow-xl shadow-black'>{minute<10?"0"+minute:minute}</div>
      <div className='text-5xl'>:</div>
      <div className='h-[100px] w-[140px] border-black bg-slate-500 flex justify-center items-center font-semibold text-5xl shadow-black shadow-xl'>{second<10?"0"+second:second}</div>
    </div>
  )
}

export default App
