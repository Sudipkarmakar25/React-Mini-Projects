import React, { useState } from 'react'
import { GoArrowLeft,GoArrowRight,GoCircle } from "react-icons/go";

const App = () => {
  const images=['https://th.bing.com/th/id/OIP.BUKBU3OEkRGQRWJrUS4P3QHaHa?rs=1&pid=ImgDetMain',
                'https://th.bing.com/th/id/OIP.x0_oUXMaV53bzBYD4zLN7AAAAA?rs=1&pid=ImgDetMain',
                'https://th.bing.com/th/id/OIP.x0ndyHrUS5kVCE2wGeA3rwHaEL?rs=1&pid=ImgDetMain',
                'https://concepto.de/wp-content/uploads/2022/09/random-aleatorio-imprevisible-e1664563555843.jpg',
                'https://th.bing.com/th/id/R.2234a41ca390db7bf7de385266812e1b?rik=6%2bR4rhzRaho%2bUA&riu=http%3a%2f%2fimages2.fanpop.com%2fimage%2fphotos%2f14300000%2fBeautiful-Wallpaper-random-14312356-2560-1600.jpg&ehk=5m%2ffM32BaViYe8wCwbWZEry%2b%2fKQxZl2rha0ON8RfiCc%3d&risl=&pid=ImgRaw&r=0',
                'https://th.bing.com/th/id/OIP.O3e7wxiE8QaZLoZX5VQa8wAAAA?pid=ImgDet&w=203&h=304&c=7&dpr=1.3',
                'https://i.pinimg.com/originals/05/2e/46/052e46cc70a936e936e5d785fe74b6a4.jpg'

  ]
  const length=images.length;
  const [index,setindex]=useState(0);
  function next() {
    const curr=(index+1)%length;
    setindex(curr)
  }
  function prev() {
    const curr=index-1;
    if(curr<0)
    {
      setindex(length-1);
    }
    else{
      setindex(curr)
    }
  }
  function circlechange(circleindex) {
    setindex(circleindex)
  }
  return (
   <div className='bg-slate-400 h-screen'>
    <br />
   <h1 className="text-center  text-3xl font-extrabold text-gray-800">
  Image Carousel
</h1>
<div className="flex justify-center items-center my-12 gap-x-4">
 
  <button
    onClick={() => prev()}
    className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300 shadow-md"
    aria-label="Previous Image"
  >
    <GoArrowLeft size={30} />
  </button>
  <img
    className="h-[300px] w-[500px] border-4 border-gray-300 rounded-md shadow-lg"
    src={images[index]}
    alt="Carousel Slide"
  />
  <button
    onClick={() => next()}
    className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300 shadow-md"
    aria-label="Next Image"
  >
    <GoArrowRight size={30} />
  </button>
</div>
<div className="flex space-x-2 mx-[680px]">
  {[...Array(length)].map((_, Arrayindex) => (
    <button
      key={Arrayindex} 
      onClick={() => circlechange(Arrayindex)} 
      className={`rounded-full ${
        index === Arrayindex ? "bg-black" : "bg-gray-200 "
      }`}
    >
      <GoCircle size={30} />
    </button>
  ))}
</div>


   </div>
  )
}

export default App
