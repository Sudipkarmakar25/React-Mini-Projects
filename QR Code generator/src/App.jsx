import React,{useState} from 'react'
import QRCode from 'react-qr-code'
const App = () => {
  const [text,settext]=useState('')
  const [qr,setqr]=useState('')
  const handleChange=(e)=> {
    settext(e.target.value)
  }
  const handlesubmit=()=> {
    setqr(text);
  }
  return (
    <div className='h-screen flex flex-col justify-center items-center bg-yellow-100'>
      <div className='py-4'>Enter the Text:<input type="text" onChange={handleChange}/>{text==""?null:<button onClick={handlesubmit}>Submit</button>}</div>
      <QRCode value={qr} size={300} bgColor="#ffff"></QRCode>
    </div>
  )
}

export default App
